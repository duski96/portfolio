import { useEffect } from 'react';

import productImg01 from '../../../assets/sub/product_img01.jpg';
import productImg02 from '../../../assets/sub/product_img02.jpg';

import { imgArrange } from '../../../util/img-arrange';

const Warranty=()=>{
    
    useEffect(()=>{
        imgArrange();
    });

    return (
        <article className="Warranty NotoSansKR mb_xlg">
            <h4 className="fs_md mb_md">
                <b>중고차 구매, 이제 걱정 없이! <br /><span className="fs_lg">Mini Warranty로 안심하세요.</span></b>
            </h4>
            <div className='img_arrange mb_md'>
                <img src={productImg01} alt="정비소 안의 미니쿠퍼" />
                <img src={productImg02} alt="정비공" />
            </div>
            <p className='fs_sm mb_md'>
                중고차를 살 때 가장 큰 고민은 예상치 못한 수리 비용입니다. <b>Mini Warranty</b>는 이런 걱정을 덜어주는 믿음직한 보증 프로그램입니다. 차량 구매 후 <b>1년 이내 또는 주행거리 5만 km 이내</b>에 발생한 고장에 대해 <b>수리비를 100% 보장</b>해드립니다. 
            </p>
            <p className='fs_sm mb_md'>  
                엔진, 변속기 등 주요 부품부터 예상치 못한 갑작스러운 고장까지 폭넓게 지원합니다. 추가 비용 없이 안심하고 차를 운행할 수 있도록 <b>전국 20개 공식 서비스센터에서 신속한 수리를 보장</b>합니다. 보증 기간 내 판매 시에도 혜택이 양도 가능해, <b>중고차 가치도 상승</b>합니다. 
            </p>
            <p className='fs_sm'>  
                믿을 수 있는 보증이 필요하다면, <b>Mini Warranty와 함께 안전한 드라이빙을 시작하세요!</b>
            </p>
        </article>
    );
}

export default Warranty;