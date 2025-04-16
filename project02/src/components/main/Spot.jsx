import { useState } from 'react';
import './Spot.css';
import mapImg from '../../assets/main/spot_img01.png';

import {replaceSpotTxt} from '../../util/replace-txt.js';

const spotList=[
    {id:0, spot:'spot01', shop:['양재', '가양', '성동']},
    {id:1, spot:'spot02', shop:['김포', '송도', '일산', '부천', '수원']},
    {id:2, spot:'spot03', shop:['대전']},
    {id:3, spot:'spot04', shop:['사직', '대구', '남구', '창원']},
    {id:4, spot:'spot05', shop:['광주']}
];

const Spot=()=>{
    const [clickedSpotList, setClickedSpotList]=useState(spotList[0]);

    const onClickPin=(e)=>{
        setClickedSpotList(spotList[e.target.value]);
    }

    return (
        <section className='Spot'>
            <div className='inner_1000'>
                <h3 className='fs_lg mb_xlg'>여러분 근처에 있는 MINI 중고 전시장을 찾아보세요.</h3>
                <div className='info'>
                    <div className='map'>
                        <img src={mapImg} alt="지도 이미지"/>
                        <ul className='pins'>
                            {spotList.map((item, idx)=>(<li key={idx} value={idx} className='pin' onClick={onClickPin}></li>))}
                        </ul>
                    </div>
                    <div className='list'>
                        <p className='fs_md mb_lg'>
                            {replaceSpotTxt(clickedSpotList.spot)} 지역 내 <br/>
                            {clickedSpotList.shop.length}개의 전시장이 있습니다.
                        </p>
                        <ul className='shop_list fs_sm'>
                            {clickedSpotList.shop.map((item, idx)=>(<li key={idx} onClick={()=>{alert('전시장 정보는 준비중입니다.')}}>MINI NEXT {item} 전시장</li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Spot;