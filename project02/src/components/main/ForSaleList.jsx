import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useContext } from "react";
import { ForSaleStateContext } from "./ForSale";

const ForSaleList=()=>{
    const filteredList=useContext(ForSaleStateContext);

    return (
        <>
            {/* <ul className="filtered_list">
                {filteredList.map((item)=>(<li key={item.id}>{item.series}</li>))}
            </ul> */}
            <div className='filtered_list'>
                <Swiper
                    spaceBetween={32}
                    slidesPerView={4}
                >
                    {filteredList.map((item)=>(<SwiperSlide key={item.id}>
                        <div className='info fs_sm NotoSansKR'>
                            <h4 className='fs_md mb_xsm'><b>{item.series.toUpperCase()}</b></h4>
                            <p className='fs_md mb_xsm'><b>{item.price} 만원</b></p>
                            <div className='flex j-sb mb_xsm'>
                                <p>주행거리</p>
                                <p>{item.mileage}km</p>
                            </div>
                            <div className='flex j-sb mb_xsm'>
                                <p>연식</p>
                                <p>{item.year}</p>
                            </div>
                            <div className='flex j-sb mb_xsm'>
                                <p>연료</p>
                                <p>{item.fuel.toUpperCase()}</p>
                            </div>
                            <hr className='mb_xsm' />
                            <p>{item.spot==='spot01' ? '서울' : item.spot==='spot02' ? '경기/인천' : item.spot==='spot03' ? '충청/대전' : item.spot==='spot04' ? '경상/대구/부산/울산' : item.spot==='spot05' ? '전라/광주' : '판매지 미정'}</p>
                        </div>
                        
                    </SwiperSlide>))}
                </Swiper>
            </div>
        </>
    );
}

export default ForSaleList;