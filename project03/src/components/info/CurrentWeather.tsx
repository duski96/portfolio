import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LoadedDataType, useLoadedDataContext, useWeatherInfoContext } from "../../App";
import beachInfo from '../../assets/beachInfo.json';

const Title=()=>{
    // 현재 페이지 url 파라미터 === 해수욕장 고유번호
    const param=Number(useParams().id);

    // null 타입을 받아올 경우를 대비해 useContext 대신 custom Hook으로 받아옴
    const {loadedData, setLoadedData}=useLoadedDataContext();

    // api url에 사용할 변수 생성
    const year=new Date().getFullYear().toString();
    const month=`0${new Date().getMonth()+1}`.slice(-2);
    const date=`0${new Date().getDate()}`.slice(-2);
    const baseDate=`${year}${month}${date}`;

    // api의 base_time에 여유를 두기 위해 1시간 빼기
    const hour=`0${new Date().getHours()-1}`.slice(-2);
    const baseTime=`${hour}00`;

    // api 호출 후 loadedData에 저장
    useEffect(()=>{
        const apiUrl=`https://apis.data.go.kr/1360000/BeachInfoservice/getUltraSrtFcstBeach?serviceKey=tSschjwEmaSA4wuIPOHxP00%2B0IJG7SAQ9pw4W9FPOFH79MKUK0hGrrp0byPhCafekK4dyrKqLYnZKtVKUnpbuA%3D%3D&numOfRows=60&pageNo=1&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&beach_num=${param}`;

        axios.get(apiUrl).then(
            (res)=>{
                const result: LoadedDataType[]=res.data.response.body.items.item;
                setLoadedData(result);
            }
        ).catch();
    }, [param]);

    // 날씨 정보(속성 값) 불러옴
    const {weatherInfo, setWeatherInfo}=useWeatherInfoContext();

    // 날씨 속성 - 기온, 강수량, 하늘상태, 동서바람성분, 남북바람성분, 습도, 강수형태, 풍향, 풍속
    const attrArr=['T1H', 'RN1', 'SKY', 'UUU', 'VVV', 'REH', 'PTY', 'VEC', 'WSD'];

    for(const attr of attrArr){
        // 각 속성별로 필터링 진행
        const filtered=loadedData.filter(item=>item.category===attr);
        // 6시간 동안의 value를 담을 임시 배열 생성
        const tmp: string[]=[];

        // 필터링된 데이터를 순회하면서 속성값 저장
        for(const item of filtered){
            // fcstValue -> 각 날씨 속성의 value
            tmp.push(item.fcstValue);
        }

        // 날씨의 state 변경
        weatherInfo[attr]=tmp;
    }

    // 현재 시간의 해변 날씨 정보
    const currentBeachInfo={
        id:param,
        name:beachInfo.filter(item=>item.id===param)[0].beachName,
        temp:weatherInfo.T1H[0],
        prec:weatherInfo.RN1[0],
        sky:weatherInfo.SKY[0],
        humid:weatherInfo.REH[0],
        precType:weatherInfo.PTY[0],
        windDir:weatherInfo.VEC[0],
        windSpd:weatherInfo.WSD[0],
    }

    // 강수형태 반환
    const returnPTY=(value: string)=>{
        switch(value){
            case '0' : return '강수 없음';
            case '1' : return '비';
            case '2' : return '비 / 눈';
            case '3' : return '눈';
            case '4' : return '소나기';
            case '5' : return '빗방울';
            case '6' : return '빗방울 / 눈날림';
            case '7' : return '눈날림';
            default : return '확인 불가';
        }
    }

    // 하늘상태 반환
    const returnSKY=(value: string)=>{
        switch(value){
            case '1' : return '맑음';
            case '3' : return '구름 많음';
            case '4' : return '흐림';
            default : return '확인 불가';
        }
    }

    return (
        <section className='Info Title'>
            <div className='inner_1000'>
                <h2>{currentBeachInfo.name}</h2>
                <p>{currentBeachInfo.temp}℃</p>
                <p>습도 {currentBeachInfo.humid}%</p>
                <p>{returnPTY(currentBeachInfo.precType)} | {returnSKY(currentBeachInfo.sky)}</p>
            </div>
        </section>
    );
}

export default Title;