import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import heart from './../../assets/main/forsale_heart.png';

import { useContext } from 'react';
import { MockDataContext, MockDataDispatchContext } from '../../App';

import {replaceFuelTxt} from '../../util/replace-fuel-txt.js';
import {replaceSpotTxt} from '../../util/replace-spot-txt.js';

const ForSaleList = ({ filteredList }) => {
    const {interestId}=useContext(MockDataContext);
    const {getInterestId}=useContext(MockDataDispatchContext);

    return (
        <>
            <div className='filtered_list'>
                {filteredList.length ?
                    (
                        <Swiper
                            spaceBetween={32}
                            slidesPerView={4}
                        >
                            {filteredList.map((item) => (<SwiperSlide key={item.id}>
                                <div className='info fs_sm NotoSansKR'>
                                    <div className='function'>
                                        <button type="button" onClick={()=>{getInterestId(item.id)}} className={interestId.includes(item.id) ? 'active' : ''}><img src={heart} alt='관심 매물 등록 아이콘' /></button>
                                    </div>
                                    <div className='picture'>
                                        <img src={item.img} alt={item.series} className='model' />
                                    </div>
                                    <div className='txt'>
                                        <h4 className='fs_md'><b>{item.series.toUpperCase()}</b></h4>
                                        <p className='fs_md mb_sm'><b>{item.price} 만원</b></p>
                                        <div className='flex j-sb mb_xsm'>
                                            <p>주행거리</p>
                                            <p>{item.mileage}km</p>
                                        </div>
                                        <div className='flex j-sb mb_xsm'>
                                            <p>연식</p>
                                            <p>{item.year}</p>
                                        </div>
                                        <div className='flex j-sb mb_sm'>
                                            <p>연료</p>
                                            <p>{replaceFuelTxt(item.fuel)}</p>
                                        </div>
                                        <hr className='mb_xsm' />
                                        <p>{replaceSpotTxt(item.spot)}</p>
                                    </div>
                                </div>
                            </SwiperSlide>))}
                        </Swiper>
                    )
                    : (
                        <div className='no_result'>
                            <p className='fs_lg'>
                                선택한 조건에 맞는 매물이 없습니다!
                            </p>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default ForSaleList;