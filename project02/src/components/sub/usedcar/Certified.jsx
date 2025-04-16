import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MockDataContext, MockDataDispatchContext } from '../../../App';
import heart from '../../../assets/main/forsale_heart.png';
import { getMiniImage } from '../../../util/get-mini-image';
import { replaceFuelTxt, replaceSpotTxt } from '../../../util/replace-txt';

const Certified=()=>{
    // 전체 매물 불러옴
    const {mockData, interestId}=useContext(MockDataContext);
    const {getInterestId}=useContext(MockDataDispatchContext);

    return (
        <section className='UsedCarContent Certified'>
            <div className='inner_1280'>
                <h4 className='fs_lg mb_sm'><b>인증 중고차 한눈에 보기</b></h4>
                <h5 className='fs_md mb_lg'>
                    &quot;미니의 프리미엄 인증 중고차를 만나보세요. <br />최고의 품질과 신뢰를 보장합니다.&quot;
                </h5>
                <ul className='all_list'>
                    {mockData.map((item)=>(
                        <li key={item.id}>
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
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Certified;