import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import productImg03 from '../../../assets/sub/product_img03.jpg';
import productImg04 from '../../../assets/sub/product_img04.jpg';

import { imgArrange } from '../../../util/img-arrange';

const LifestyleInfo=()=>{
    
    useEffect(()=>{
        imgArrange();
    });

    return (
        <article className="LifestyleInfo NotoSansKR">
            <h4 className="fs_md mb_md">
                <b>미니를 즐기는 사람들의 공간!<br /><span className="fs_lg">Mini Lifestyle</span></b>
            </h4>
            <div className='img_arrange mb_md'>
                <img src={productImg03} alt="정비소 안의 미니쿠퍼" />
                <img src={productImg04} alt="정비공" />
            </div>
            <p className='fs_sm mb_md'>
                <b>Mini Lifestyle</b>은 미니 시리즈 오너들을 위한 커뮤니티입니다. <br />
                드라이빙 코스 추천, 커스텀 팁, 정비 노하우 등 다양한 정보를 나누며, 미니와 함께하는 라이프스타일을 공유하죠. <br />
                <b>정기적인 오프라인 모임 & 시승 이벤트</b>도 진행되니, 미니를 더 즐기고 싶다면 지금 합류하세요!
            </p>
            <p className='go_to fs_sm'><Link to='/brand/lifestyle'>Mini Lifestyle 바로가기</Link></p>
        </article>
    );
}

export default LifestyleInfo;