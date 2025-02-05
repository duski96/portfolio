import { useContext } from 'react';
import { MockDataContext } from '../../App';
import './InterestList.css';

const InterestList=()=>{
    const {mockData}=useContext(MockDataContext);
    const {interestId}=useContext(MockDataContext);

    //const interestId=[0,1,2,15];

    const interestList=mockData.filter((item)=>interestId.includes(item.id))

    return (
        <section className='InterestList'>
            <div className='inner_1280'>
               <ul className='interest_list'>
                {interestList.map((item)=>(
                    <li key={item.id}>
                        <div className='info'>
                            <img src={item.img} alt='매물' />
                            <ul className='fs_sm NotoSansKR'>
                                <li className='mb_md'><h4 className='fs_lg'><b>{item.series.toUpperCase()}</b></h4></li>
                                <li>연식 : {item.year}</li>
                                <li>주행거리 : {item.mileage}</li>
                                <li>연료 : {item.fuel.toUpperCase()}</li>
                                <li>전시장 위치 : {item.spot === 'spot01' ? '서울' : item.spot === 'spot02' ? '경기/인천' : item.spot === 'spot03' ? '충청/대전' : item.spot === 'spot04' ? '경상/대구/부산/울산' : item.spot === 'spot05' ? '전라/광주' : '판매지 미정'}</li>
                            </ul>
                        </div>
                        <div className='price'>
                            <p className='fs_md NotoSansKR'><b>{item.price}만원</b></p>
                        </div>
                        <div className='func'>
                            <button type="button">구매</button>
                            <button type="button">삭제</button>
                        </div>                        
                    </li>
                ))}
               </ul>
            </div>
        </section>
    );
}

export default InterestList;