import { useState, useContext } from 'react';
import { MockDataContext, MockDataDispatchContext } from '../../App';
import './InterestList.css';

import { getMiniImage } from '../../util/get-mini-image.js';
import { replaceFuelTxt } from '../../util/replace-fuel-txt.js';
import { replaceSpotTxt } from '../../util/replace-spot-txt.js';

const InterestList=()=>{
    const {mockData, interestId}=useContext(MockDataContext);
    const {deleteInterestId}=useContext(MockDataDispatchContext);

    const [interestList, setInterestList]=useState(mockData.filter((item)=>interestId.includes(item.id))) // 관심 매물 리스트

    const onClickDelete=(targetId)=>{
        deleteInterestId(targetId); // interestId 배열에서 해당하는 id 삭제
        setInterestList(interestList.filter((item)=>item.id!==targetId)); // 과심 매물 리스트 재설정
    }

    return (
        <section className='InterestList'>
            <div className='inner_1280'>
                {interestList.length ? 
                    <ul className='interest_list'>
                    {interestList.map((item)=>(
                        <li key={item.id}>
                            <div className='info'>
                                <img src={getMiniImage(item.id)} alt='매물' />
                                <ul className='fs_sm NotoSansKR'>
                                    <li className='mb_md'><h4 className='fs_lg'><b>{item.series.toUpperCase()}</b></h4></li>
                                    <li>연식 : {item.year}</li>
                                    <li>주행거리 : {item.mileage}</li>
                                    <li>연료 : {replaceFuelTxt(item.fuel)}</li>
                                    <li>전시장 위치 : {replaceSpotTxt(item.spot)}</li>
                                </ul>
                            </div>
                            <div className='price'>
                                <p className='fs_md NotoSansKR'><b>{item.price}만원</b></p>
                            </div>
                            <div className='func'>
                                <button type="button">구매</button>
                                <button type="button" onClick={()=>{onClickDelete(item.id)}}>삭제</button>
                            </div>                        
                        </li>
                    ))}
                </ul> :
                <div className='no_result'>
                    <p className='fs_lg'>
                        관심목록에 추가된 매물이 없습니다!
                    </p>
                </div>
                }
            </div>
        </section>
    );
}

export default InterestList;