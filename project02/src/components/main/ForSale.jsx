import { useState, useRef, useContext } from 'react'
import './ForSale.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import forSaleImg01 from '../../assets/main/forsale_img01.png';
import forSaleImg02 from '../../assets/main/forsale_img02.png';
import forSaleImg03 from '../../assets/main/forsale_img03.png';
import forSaleImg04 from '../../assets/main/forsale_img04.png';
import forSaleImg05 from '../../assets/main/forsale_img05.png';
import forSaleImg06 from '../../assets/main/forsale_img06.png';
import forSaleImg07 from '../../assets/main/forsale_img07.png';
import forSaleImg08 from '../../assets/main/forsale_img08.png';

import {MockDataContext} from '../../App';

const ForSale=()=>{
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const seriesSelect=[
        {id:0, value:'3door', content:forSaleImg01},
        {id:1, value:'5door', content:forSaleImg02},
        {id:2, value:'convertible', content:forSaleImg03},
        {id:3, value:'clubman', content:forSaleImg04},
        {id:4, value:'countryman', content:forSaleImg05},
        {id:5, value:'coupe', content:forSaleImg06},
        {id:6, value:'paceman', content:forSaleImg07},
        {id:7, value:'roadster', content:forSaleImg08}
    ];

    const yearSelect=[];
    for(let i=0; i<10; i++){
        yearSelect.push({id:i, value:new Date().getFullYear()-i, content:new Date().getFullYear()-i + `${i===9 ? '년 이전' : '년식'}`})
    }

    const priceSelect=[
        {id:0, value:2000, content:'2,000만원 이하'},
        {id:1, value:4000, content:'4,000만원 이하'},
        {id:2, value:6000, content:'6,000만원 이하'},
        {id:3, value:8000, content:'8,000만원 이하'}
    ];

    const mileageSelect=[
        {id:0, value:1000, content:'1,000km 이하'},
        {id:1, value:5000, content:'5,000km 이하'},
        {id:2, value:10000, content:'10,000km 이하'},
        {id:3, value:30000, content:'30,000km 이하'},
        {id:4, value:50000, content:'50,000km 이하'},
        {id:5, value:100000, content:'100,000km 이하'},
        {id:6, value:200000, content:'200,000km 이하'},
        {id:7, value:999999, content:'200,000km 초과'}
    ];

    const fuelSelect=[
        {id:0, value:'gasoline', content:'가솔린'},
        {id:1, value:'disel', content:'디젤'},
        {id:2, value:'electric', content:'전기'},
        {id:3, value:'hev', content:'하이브리드'},
        {id:4, value:'lpg', content:'LPG'}
    ];

    const spotSelect=[
        {id:0, value:'spot01', content:'서울'},
        {id:1, value:'spot02', content:'경기/인천'},
        {id:2, value:'spot03', content:'충청/대전'},
        {id:3, value:'spot04', content:'경상/대구/부산/울산'},
        {id:4, value:'spot05', content:'전라/광주'}
    ];
    
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

    const onChange=(e)=>{
        setCondition({
            ...condition,
            [e.target.name]:e.target.value
        });
    }

    let slImg=document.querySelectorAll('.search .swiper-slide img');

    const onClickSeries=(e)=>{
        slImg.forEach((v)=>{
            v.classList.remove('selected');
        });

        e.target.classList.add('selected');

        setCondition({
            ...condition,
            [e.target.name]:e.target.alt
        });
    }

    const [isChked, setIsChked]=useState(false);

    const onChangeChk=(e)=>{        
        setIsChked(!isChked);

        setCondition({
            ...condition,
            [e.target.name]:!isChked
        });
    }

    const mockData=useContext(MockDataContext);
    let filteredData=[...mockData];

    const onClickSubmit=()=>{
        let filteredCondition=Object.entries(condition).filter((item)=>item[1]!==null).map((item)=>['year','price','mileage'].includes(item[0]) ? [item[0], Number(item[1])] : [item[0], item[1]]);
        
        filteredCondition.forEach((v,i)=>{
            switch(v[0]){
                case 'series' :
                case 'fuel' :
                case 'spot' :
                case 'nextPlus' :
                    filteredData=[...filteredData].filter((item)=>item[v[0]]===v[1]);
                    break;
                case 'year' :
                    v[1]===new Date().getFullYear()-9 ? filteredData=[...filteredData].filter((item)=>item[v[0]]<=v[1]) : filteredData=[...filteredData].filter((item)=>item[v[0]]===v[1]);
                    break;
                case 'price' :
                case 'mileage' :
                    filteredData=[...filteredData].filter((item)=>item[v[0]]<=v[1]);
                    break;
                default :
                    return filteredData;
            }
            
        });

        console.log(filteredData);
    }

    return (
        <section className='ForSale'>
            <div className='inner_1280'>
                <h3 className='fs_lg mb_lg'>나에게 꼭 맞는 MINI를 찾아보세요.</h3>
                <div className='search'>
                    <div className='swiper_area mb_md'>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={32}
                            slidesPerView={4}
                            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                        >
                            {seriesSelect.map((item)=>(<SwiperSlide key={item.id} onClick={onClickSeries}><img src={item.content} name={'series'} alt={item.value} /></SwiperSlide>))}
                        </Swiper>
                        <div className='navigation_btn'>
                            <button type="button" ref={prevRef} className='prev'></button>
                            <button type="button" ref={nextRef} className='next'></button>
                        </div>
                    </div>
                    <ul className='select_area'>
                        <li>
                            <select name={'year'} onChange={onChange}>
                                <option defaultValue>연식</option>
                                {yearSelect.map((item)=>(<option key={item.id} value={item.value}>{item.content}</option>))}
                            </select>
                        </li>
                        <li>
                            <select name={'price'} onChange={onChange}>
                                <option defaultValue>가격</option>
                                {priceSelect.map((item)=>(<option key={item.id} value={item.value}>{item.content}</option>))}
                            </select>
                        </li>
                        <li>
                            <select name={'mileage'} onChange={onChange}>
                                <option defaultValue>주행거리</option>
                                {mileageSelect.map((item)=>(<option key={item.id} value={item.value}>{item.content}</option>))}
                            </select>
                        </li>
                        <li>
                            <select name='fuel' onChange={onChange}>
                                <option defaultValue>연료</option>
                                {fuelSelect.map((item)=>(<option key={item.id} value={item.value}>{item.content}</option>))}
                            </select>
                        </li>                        
                        <li>
                            <select name={'spot'} onChange={onChange}>
                                <option defaultValue>지역</option>
                                {spotSelect.map((item)=>(<option key={item.id} value={item.value}>{item.content}</option>))}
                            </select>
                        </li>
                        <li>
                            <div className='flex'>
                                <input type='checkbox' name={'nextPlus'} onChange={onChangeChk} checked={isChked}/>
                                <p className='fs_sm'>NEXT PLUS</p>
                            </div>
                            <button type="button" className='fs_sm' onClick={onClickSubmit}>결과 조회</button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ForSale;