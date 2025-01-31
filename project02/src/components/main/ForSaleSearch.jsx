import { useState, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import forSaleSearchImg01 from '../../assets/main/forsale_search_img01.png';
import forSaleSearchImg02 from '../../assets/main/forsale_search_img02.png';
import forSaleSearchImg03 from '../../assets/main/forsale_search_img03.png';
import forSaleSearchImg04 from '../../assets/main/forsale_search_img04.png';
import forSaleSearchImg05 from '../../assets/main/forsale_search_img05.png';
import forSaleSearchImg06 from '../../assets/main/forsale_search_img06.png';
import forSaleSearchImg07 from '../../assets/main/forsale_search_img07.png';
import forSaleSearchImg08 from '../../assets/main/forsale_search_img08.png';

const ForSaleSearch=({onClickSeries, onChangeSelect, onChangeChk, onClickSubmit})=>{
    // 커스텀할 swiper 네비게이션 초기 선언
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // 시리즈(모델) 선택은 swiper-slide 클릭 시 별도의 함수 실행
    const seriesSelect=[
        {id:0, value:'3door', content:forSaleSearchImg01},
        {id:1, value:'5door', content:forSaleSearchImg02},
        {id:2, value:'convertible', content:forSaleSearchImg03},
        {id:3, value:'clubman', content:forSaleSearchImg04},
        {id:4, value:'countryman', content:forSaleSearchImg05},
        {id:5, value:'coupe', content:forSaleSearchImg06},
        {id:6, value:'paceman', content:forSaleSearchImg07},
        {id:7, value:'roadster', content:forSaleSearchImg08}
    ];

    let slImg=document.querySelectorAll('.search .swiper-slide img');
    
    const slImgInit=()=>{
        slImg.forEach((v)=>{
            v.classList.remove('selected');
        });
    }

    const onClickSeriesHandler=(e)=>{
        slImgInit();
        e.target.classList.add('selected');
        onClickSeries(e); // 검색 조건 업데이트
    }

    // 연식은 현재 연도를 기준으로 10년 전 까지 선택 가능
    // 10년 전 연도 클릭 시 그 이전 모델 모두 출력
    const yearSelect=[];
    for(let i=0; i<=10; i++){
        yearSelect.push({id:i, value:new Date().getFullYear()-i, content:new Date().getFullYear()-i + `${i===10 ? '년 이전' : '년식'}`})
    }

    // 연식, 가격, 주행거리, 연료, 지역 선택 시 동작
    const onChangeSelectHandler=(e)=>{
        onChangeSelect(e); // 검색 조건 업데이트
    }
    
    // 체크박스 체크 여부에 따른 동작
    const [isChked, setIsChked]=useState(false);
    const onChangeChkHandler=(e)=>{        
        setIsChked(!isChked); // 체크박스 표시 여부
        onChangeChk(e); // 검색 조건 업데이트
    }

    // 
    const onClickSubmitHandler=(e)=>{
        slImgInit(); // swiper slide 체크 해제

        let selects=document.querySelectorAll('select');
        selects.forEach((v)=>{
            v.value=v.children[0].innerText; // select box 초기화
        });
        onClickSubmit(e); // 검색 조건에 따른 필터링 진행 후 검색 조건 초기화
        setIsChked(false); // checkbox 초기화
    }

    return (
        <>
            <div className='search mb_lg'>
                <div className='swiper_area mb_md'>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={32}
                        slidesPerView={4}
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                    >
                        {seriesSelect.map((item)=>(<SwiperSlide key={item.id} onClick={onClickSeriesHandler}><img src={item.content} name={'series'} alt={item.value} /></SwiperSlide>))}
                    </Swiper>
                    <div className='navigation_btn'>
                        <button type="button" ref={prevRef} className='prev'></button>
                        <button type="button" ref={nextRef} className='next'></button>
                    </div>
                </div>
                <ul className='select_area'>
                    <li>
                        <select name={'year'} onChange={onChangeSelectHandler}>
                            <option>연식</option>
                            {yearSelect.map((item)=>(<option key={item.id} value={item.value}>{item.content}</option>))}
                        </select>
                    </li>
                    <li>
                        <select name={'price'} onChange={onChangeSelectHandler}>
                            <option>가격</option>
                            <option value="2000">2,000만원 이하</option>
                            <option value="4000">4,000만원 이하</option>
                            <option value="6000">6,000만원 이하</option>
                            <option value="8000">8,000만원 이하</option>
                        </select>
                    </li>
                    <li>
                        <select name={'mileage'} onChange={onChangeSelectHandler}>
                            <option>주행거리</option>
                            <option value="1000">1,000km 이하</option>
                            <option value="5000">5,000km 이하</option>
                            <option value="10000">10,000km 이하</option>
                            <option value="30000">30,000km 이하</option>
                            <option value="50000">50,000km 이하</option>
                            <option value="100000">100,000km 이하</option>
                            <option value="200000">200,000km 이하</option>
                            <option value="999999">제한 없음</option>
                        </select>
                    </li>
                    <li>
                        <select name='fuel' onChange={onChangeSelectHandler}>
                            <option>연료</option>
                            <option value="gasoline">가솔린</option>
                            <option value="disel">디젤</option>
                            <option value="electric">전기</option>
                            <option value="hev">하이브리드</option>
                            <option value="lpg">LPG</option>
                        </select>
                    </li>                        
                    <li>
                        <select name={'spot'} onChange={onChangeSelectHandler}>
                            <option>지역</option>
                            <option value="spot01">서울</option>
                            <option value="spot02">경기/인천</option>
                            <option value="spot03">충청/대전</option>
                            <option value="spot04">경상/대구/부산/울산</option>
                            <option value="spot05">전라/광주</option>
                        </select>
                    </li>
                    <li>
                        <div className='flex'>
                            <input type='checkbox' name={'nextPlus'} onChange={onChangeChkHandler} checked={isChked}/>
                            <p className='fs_sm'>NEXT PLUS</p>
                        </div>
                        <button type="button" className='fs_sm' onClick={onClickSubmitHandler}>결과 조회</button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ForSaleSearch;