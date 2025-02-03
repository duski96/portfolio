import './ForSale.css';
import { useState, useContext } from 'react';
import { MockDataContext } from '../../App';

import ForSaleSearch from './ForSaleSearch';
import ForSaleList from './ForSaleList';

const ForSale=()=>{
    // 검색 조건을 저장할 state 생성
    // onClickSeries 실행 및 select 태그, input 태그 클릭 시 onChange 이벤트 발생
    const [condition, setCondition]=useState({
        series:null,
        year:null,
        price:null,
        mileage:null,
        fuel:null,
        spot:null,
        nextPlus:null
    });

    const {series, year, price, mileage, fuel, spot, nextPlus}=condition;

    // 시리즈 선택 시 검색 조건 업데이트
    const onClickSeries=(e)=>{
        setCondition({
            ...condition,
            [e.target.name]:e.target.alt
        });
    }

    // 셀렉트 박스 클릭 시 검색 조건 업데이트
    const onChangeSelect=(e)=>{
        setCondition({
            ...condition,
            [e.target.name]:e.target.value
        });
    }

    // NEXT PLUS 여부 체크 시 검색 조건 업데이트
    const onChangeChk=(e)=>{
        setCondition({
            ...condition,
            [e.target.name]:!e.target[e.target.name]
        });
    }


    // App.jsx에서 전체 매물 목록을 불러옴
    const mockData=useContext(MockDataContext); // 전체 매물 목록
    let filteredData=[...mockData]; // 매물 목록에서 검색 조건에 맞는 것들을 담을 배열

    const [filteredList, setFilteredList]=useState(filteredData);

    // 검색 버튼을 눌렀을 때 필터링 후 검색 조건 초기화
    const onClickSubmit=()=>{
        let filteredCondition=Object.entries(condition).filter((item)=>item[1]!==null).map((item)=>['year','price','mileage'].includes(item[0]) ? [item[0], Number(item[1])] : [item[0], item[1]]); // 선택된 검색 조건들의 배열 생성
                
        filteredCondition.forEach((v)=>{
            switch(v[0]){
                case 'series' :
                case 'fuel' :
                case 'spot' :
                case 'nextPlus' : {
                    filteredData=[...filteredData].filter((item)=>item[v[0]]===v[1]);
                    break;
                }
                    
                case 'year' : {
                    v[1]===new Date().getFullYear()-10 ? filteredData=[...filteredData].filter((item)=>item[v[0]]<=v[1]) : filteredData=[...filteredData].filter((item)=>item[v[0]]===v[1]);
                    break;
                }
                case 'price' :
                case 'mileage' : {
                    filteredData=[...filteredData].filter((item)=>item[v[0]]<=v[1]);
                    break;
                }
                default :
                    return filteredData;
            }
        });

        // 검색 조건 초기화
        setCondition({
            series:null,
            year:null,
            price:null,
            mileage:null,
            fuel:null,
            spot:null,
            nextPlus:null
        });

        setFilteredList(filteredData);
    }

    return (
        <section className='ForSale'>
            <div className='inner_1280'>
                <h3 className='fs_lg mb_lg'>나에게 꼭 맞는 MINI를 찾아보세요.</h3>
                <ForSaleSearch onClickSeries={onClickSeries} onChangeSelect={onChangeSelect} onChangeChk={onChangeChk} onClickSubmit={onClickSubmit} />
                <ForSaleList filteredList={filteredList}/>
            </div>
        </section>
    );
}

export default ForSale;