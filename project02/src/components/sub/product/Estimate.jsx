const Estimate=()=>{
    return (
        <div className="Estimate NotoSansKR">
            <p><a href="tel:0504-1234-5678" className="fs_lg mb_sm"><b>Tel. 0504-1234-5678</b></a></p>
            <hr className="mb_sm" />
            <h4 className="fs_md mb_sm"><b>총 예상 구매 비용</b></h4>
            <ul className="bill fs_sm mb_sm">
                <li>차량가</li>
                <li>이전등록비</li>
                <li>관리비</li>
                <li>등록대행수수료</li>
                <li>Mini Warranty 가입비</li>
                <li>배송비</li>
            </ul>
            <p className="total fs_md mb_sm"><b>합계</b></p>
            <button type="button" className="fs_md"><b>구매하기</b></button>
        </div>
    );
}

export default Estimate;