import { replaceFuelTxt, replaceSpotTxt, replaceModelTxt } from "../../util/replace-txt";

const ForSaleCondition=({condition, setCondition})=>{
    // 검색 조건을 순회하기 위해 배열로 변환
    const selectedCondition=Object.entries(condition).filter(item=>item[1]);
    
    // 검색 조건에 표시될 내용 반환
    const returnCondition=(attr)=>{
        switch(attr[0]){
            case 'fuel' : return `${replaceFuelTxt(attr[1])}`;
            case 'mileage' : return attr>200000 ? '주행거리 제한 없음' : `${attr[1]}km 이하`;
            case 'nextPlus' : return attr ? 'NEXT PLUS 적용' : '';
            case 'price' : return `${attr[1]}원 이하`;
            case 'series' : return `${replaceModelTxt(attr[1])}`;
            case 'spot' : return `${replaceSpotTxt(attr[1])}`;
            case 'year' : return `${attr[1]}년식`;
            default : break;
        }
    }

    // 검색 조건 삭제
    const conditionDelete=(target)=>{
        // nextPlus 항목은 초기값이 false 이므로 따로 설정
        setCondition({
            ...condition,
            [target]:target==='nextPlus' ? false : null
        });

        // select 태그의 option 값 초기화
        let selects=document.querySelectorAll('select');
        selects.forEach((v)=>{
            if(v.name===target){
                // value가 공백일 경우 해당 속성이 null로 변경 / ForSale.jsx 참조
                v.value='';
            }
        });
    }

    return (
        <div className="condition mb_lg NotoSansKR">
            {selectedCondition.length ? (
                <>
                <ul className="condition_list">
                    {selectedCondition.map((item, idx)=>(<li key={idx}>{returnCondition(item)} <span onClick={()=>{conditionDelete(item[0])}}>×</span></li>))}
                </ul>
                </>
            ) : (<p className="fs_xsm">검색 조건을 선택하세요.</p>)}
        </div>
    );
}

export default ForSaleCondition;