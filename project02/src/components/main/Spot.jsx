import { useState } from 'react';
import './Spot.css';
import mapImg from '../../assets/main/spot_img01.png';
import pinImg from '../../assets/main/spot_img02.png';

const spotList=[
    {id:0, spot:'spot01', content:'서울', shop:['양재', '가양', '성동']},
    {id:1, spot:'spot02', content:'경기/인천', shop:['김포', '송도', '일산', '부천', '수원']},
    {id:2, spot:'spot03', content:'충청/대전', shop:['대전']},
    {id:3, spot:'spot04', content:'경상/대구/부산/울산', shop:['사직', '대구', '남구', '창원']},
    {id:4, spot:'spot05', content:'전라/광주', shop:['광주']}
];

const Spot=()=>{
    const [clickedSpotList, setClickedSpotList]=useState(spotList[0]);

    const onClickPin=(e)=>{
        console.log(e.target);
        console.log(e.target.key);
    }

    return (
        <section className='Spot'>
            <div className='inner_1000'>
                <h3 className='fs_lg mb_xlg'>여러분 근처에 있는 MINI 중고 전시장을 찾아보세요.</h3>
                <div className='info'>
                    <div className='map'>
                        <img src={mapImg} alt="지도 이미지"/>
                        <ul className='pins'>
                            {spotList.map((item)=>(<li key={item.id} className='pin' onClick={onClickPin}></li>))}
                        </ul>
                    </div>
                    <div className='list'>
                        <p className='fs_md'>
                            {/* {clickedSpotList.content} 지역 내 <br/>
                            {clickedSpotList.shop.length}개의 전시장이 있습니다. */}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Spot;