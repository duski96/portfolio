const Estimate=({currentData})=>{

    const estimateInfo={
        price:currentData.price,
        registration:Math.floor(currentData.price*0.07),
        maintenance:30,
        agency:10,
        warranty:Math.floor(currentData.price*0.01),
        delivery:10
    }

    const totalPrice=Object.entries(estimateInfo).map(v=>v[1]).reduce((a,c)=>a+c);

    return (
        <div className="Estimate NotoSansKR">
            <p><a href="tel:0504-1234-5678" className="fs_lg mb_sm"><b>Tel. 0504-1234-5678</b></a></p>
            <hr className="mb_sm" />
            <h4 className="fs_md mb_sm"><b>총 예상 구매 비용</b></h4>
            <ul className="bill fs_sm mb_sm">
                <li><span>차량가</span> <span>{estimateInfo.price} 만원</span></li>
                <li><span>이전등록비</span> <span>{estimateInfo.registration} 만원</span></li>
                <li><span>관리비</span> <span>{estimateInfo.maintenance} 만원</span></li>
                <li><span>등록대행수수료</span> <span>{estimateInfo.agency} 만원</span></li>
                <li><span>Mini Warranty 가입비</span> <span>{estimateInfo.warranty} 만원</span></li>
                <li><span>배송비</span> <span>{estimateInfo.delivery} 만원</span></li>
            </ul>
            <p className="total fs_md mb_sm">
                <b>합계</b> 
                <b className='fs_lg'>{totalPrice} 만원</b>
            </p>
            <button type="button" className="fs_md"><b>구매하기</b></button>
        </div>
    );
}

export default Estimate;