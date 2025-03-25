import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { MockDataContext, MockDataDispatchContext } from '../../App';
import { getMiniImage } from '../../util/get-mini-image.js';
import { replaceFuelTxt } from '../../util/replace-fuel-txt.js';
import { replaceSpotTxt } from '../../util/replace-spot-txt.js';
import heart from './../../assets/main/forsale_heart.png';

const ForSaleList = ({ filteredList }) => {
    const {interestId}=useContext(MockDataContext);
    const {getInterestId}=useContext(MockDataDispatchContext);

    return (
        <>
            <div className='filtered_list'>
                {filteredList.length ?
                    (
                        <>
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={16}
                                slidesPerView={1}
                                pagination={{clickable:true, type:'progressbar'}}
                                breakpoints={{
                                    481:{slidesPerView:2},
                                    769:{slidesPerView:3},
                                    1281:{slidesPerView:4, spaceBetween:32}
                                }}
                            >
                                {filteredList.map((item) => (<SwiperSlide key={item.id}>
                                    <div className='info fs_sm NotoSansKR'>
                                        <div className='function'>
                                            <button type="button" onClick={()=>{getInterestId(item.id)}} className={interestId.includes(item.id) ? 'active' : ''}><img src={heart} alt='관심 매물 등록 아이콘' /></button>
                                        </div>
                                        <Link to={`/product/${item.id}`}>
                                            <div className='picture'>
                                                <img src={getMiniImage(item.id)} alt={item.series} className='model' />
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
                                        </Link>
                                    </div>
                                </SwiperSlide>))}
                            </Swiper>
                        </>
                        
                    )
                    : (
                        <div className='no_result'>
                            <p className='fs_lg'>
                                선택한 조건에 해당하는 매물이 없습니다!
                            </p>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default ForSaleList;