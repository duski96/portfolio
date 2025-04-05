import './Info.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LoadedDataType, useLoadedDataContext, useWeatherInfoContext } from "../../App";
import beachInfo from '../../assets/beachInfo.json';
import { getUltraSrtFcstApiUrl, getWhBuoyApiUrl, getTwBuoyApiUrl } from '../../util/getApiUrl';
import { getPTY, getSKY, getVEC } from '../../util/getAttrValue';
import { getWeatherIcon } from '../../util/getWeatherIcon';
import waveIcon from '../../assets/wave_icon.png';
import windIcon from '../../assets/wind_icon.png';

const CurrentWeather=()=>{
    // 현재 페이지 url 파라미터 === 해수욕장 고유번호
    const param=Number(useParams().id);

    // null 타입을 받아올 경우를 대비해 useContext 대신 custom Hook으로 받아옴
    const {loadedData, setLoadedData}=useLoadedDataContext();

    // api 호출 후 loadedData에 저장
    useEffect(()=>{
        // api url 반환 함수 호출
        const apiUrl=getUltraSrtFcstApiUrl(param);
        // api 호출
        axios.get(apiUrl).then(
            (res)=>{
                const result: LoadedDataType[]=res.data.response.body.items.item;
                setLoadedData(result);
            }
        ).catch((err: string)=>{throw new Error (err);});
    }, [param]);

    // 날씨 정보(속성 값) 불러옴
    const {weatherInfo}=useWeatherInfoContext();

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

    // 수온과 파고의 state
    const [waveInfo, setWaveInfo]=useState({
        tempWater:'string',
        waveHeight:'string'
    });

    useEffect(()=>{
        // 수온 api 호출 후 업데이트
        const twApiUrl=getTwBuoyApiUrl(param);
        axios.get(twApiUrl).then((res)=>{
            const tw=res.data.response.body.items.item[0].tw;
            setWaveInfo((waveInfo)=>{return {...waveInfo, tempWater:tw}});
        }).catch((err)=>{
            console.log(err);
            return err;
        });

        // 파고 api 호출 후 업데이트
        const whApiUrl=getWhBuoyApiUrl(param);
        axios.get(whApiUrl).then((res)=>{
            const wh=res.data.response.body.items.item[0].wh;
            setWaveInfo((waveInfo)=>{return {...waveInfo, waveHeight:wh}});
        }).catch((err)=>{
            console.log(err);
            return err;
        });
    }, [param]);

    // 날씨 아이콘 출력에 필요한 변수
    const currentHour=new Date().getHours();

    return (
        <article className='Info CurrentWeather'>
            <h2 className='fs_lg'>{currentBeachInfo.name}</h2>
            <div className='weather'>
                <img src={getWeatherIcon(currentBeachInfo.precType, currentBeachInfo.sky, currentHour)} alt="날씨 아이콘" />
                <div className='txt'>
                    <p className='temp fs_xlg'>{currentBeachInfo.temp}℃</p>
                    <p className='humidity fs_md'>습도 <b>{currentBeachInfo.humid}%</b></p>
                    <p className='state fs_md'>{getPTY(currentBeachInfo.precType)} | {getSKY(currentBeachInfo.sky)}</p>
                </div>
            </div>
            <ul className='add_info fs_md'>
                <li>
                    <img src={waveIcon} alt="파도 아이콘" />
                    <p>
                        수온: <b>{waveInfo.tempWater}℃</b> <br />
                        파고: <b>{waveInfo.waveHeight}M</b>
                    </p>
                </li>
                <li>
                    <img src={windIcon} alt="바람 아이콘" />
                    <p>
                        풍향: <b>{getVEC(currentBeachInfo.windDir)} {currentBeachInfo.windDir}º</b> <br />
                        풍속: <b>{currentBeachInfo.windSpd}m/s</b>
                    </p>
                </li>
            </ul>
        </article>
    );
}

export default CurrentWeather;