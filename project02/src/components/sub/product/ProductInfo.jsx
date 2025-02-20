import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Fancybox from './Fancybox.jsx';

import { useContext } from 'react';
import { MockDataContext } from '../../../App.jsx';
import { useNavigate } from 'react-router-dom';

import { getMiniImage } from '../../../util/get-mini-image.js';
import { replaceFuelTxt } from '../../../util/replace-fuel-txt.js';
import { replaceSpotTxt } from '../../../util/replace-spot-txt.js';

import tmpImg01 from '../../../assets/sub/detail_tmp01.jpg';
import tmpImg02 from '../../../assets/sub/detail_tmp02.jpg';
import tmpImg03 from '../../../assets/sub/detail_tmp03.jpg';
import tmpImg04 from '../../../assets/sub/detail_tmp04.jpg';
import tmpImg05 from '../../../assets/sub/detail_tmp05.jpg';
import tmpImg06 from '../../../assets/sub/detail_tmp06.jpg';

const ProductInfo=()=>{

    const {mockData}=useContext(MockDataContext);
    const currentData=mockData[0];

    const nav=useNavigate();

    return (
        <article className='Info mb_xlg'>
            <h4 className='fs_lg mb_xsm'><b>{currentData.series.toUpperCase()}</b></h4>
            <ul className='fs_sm NotoSansKR info_txt'>
                <li>연식 : {currentData.year}</li>
                <li>주행거리 : {currentData.mileage}</li>
                <li>연료 : {replaceFuelTxt(currentData.fuel)}</li>
            </ul>
            <ul className='fs_sm NotoSansKR info_txt mb_sm'>
                <li>전시장 위치 : {replaceSpotTxt(currentData.spot)}</li>
                <li>NEXT PLUS {currentData.nextPlus ? '적용' : '미적용'}</li>
            </ul>
            <Fancybox
                options={{
                    Carousel: {
                    infinite: false,
                    },
                }}
            >
            <div className='photo_area mb_md'>
                <div className='swiper_area'>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                    >
                        <SwiperSlide>
                            <a data-fancybox="gallery" href={getMiniImage(currentData.id)}>
                                <img src={getMiniImage(currentData.id)} alt="매물 사진 1" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a data-fancybox="gallery" href={tmpImg03}>
                                <img src={tmpImg03} alt="매물 사진 4" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a data-fancybox="gallery" href={tmpImg04}>
                                <img src={tmpImg04} alt="매물 사진 5" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a data-fancybox="gallery" href={tmpImg05}>
                                <img src={tmpImg05} alt="매물 사진 6" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a data-fancybox="gallery" href={tmpImg06}>
                                <img src={tmpImg06} alt="매물 사진 7" />
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='add_area'>
                    <div className='add_img'>
                    <a data-fancybox="gallery" href={tmpImg01}><img src={tmpImg01} alt="매물 사진 2" /></a></div>
                    <div className='add_img'><a data-fancybox="gallery" href={tmpImg02}><img src={tmpImg02} alt="매물 사진 3" /></a></div> 
                </div>
            </div>
            </Fancybox>
            <p className='go_to fs_md NotoSansKR' onClick={()=>{nav(`/model/${currentData.series}`)}}>{currentData.series.toUpperCase()} 모델 알아보기</p>
        </article>
    );
}

export default ProductInfo;