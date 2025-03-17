import profileImg from '../../../assets/sub/profile_default.jpg';
import { useState, useEffect, useContext } from 'react';
import { LoginUserInfoContext } from '../../../App';
import axios from 'axios';

const LifestyleReview=({visible})=>{
    const {loginUserInfo}=useContext(LoginUserInfoContext);

    // 리뷰 데이터를 저장할 state
    const [reviewData, setReviewData]=useState();

    // review 페이지와 lifestyle 페이지에서 보여질 개수가 다르기 때문에 slice할 인덱스를 지정할 변수
    let slIdx=0;

    //DB에서 리뷰 테이블 데이터 로딩 후 다시 렌더링
    useEffect(()=>{
        axios.get('/api/board/review').then((res)=>{
            setReviewData(res.data);
        }).catch(()=>{
            alert('DB 연결에 실패했습니다.');
        });
    }, []);

    // 리뷰 데이터의 개수에 따라 리턴이 다름
    if(!reviewData){
        return <p>작성된 리뷰가 없습니다.</p>
    }
    else{
        // lifestyle 페이지에선 2개만, 리뷰 페이지에선 모두 출력 
        visible==='part' ? slIdx=reviewData.length-2 : slIdx=0;
    }
    
    return (
        <ul className='review_list fs_sm'>
            {reviewData.slice(slIdx).reverse().map((item)=>
                <li key={item.id} className='review_item'>
                    <div className='profile_img'>
                        <img src={profileImg} />
                    </div>
                    <ul className='info'>
                        <li><span className='ninckname'>{item.nickname}</span> <span className='car'>{item.car}</span></li>
                        <li className='mb_xsm'><span className='rate'>{'★'.repeat(item.rate)}</span></li>
                        <li><p className='content'>{item.content}</p></li>
                    </ul>
                    <div className={`button_area ${item.user_id===loginUserInfo.userId ? 'visible' : ''}`}>
                        <button type='button' className='delete fs_sm'>삭제</button>
                    </div>
                </li>
            )}
        </ul>
    );
}

export default LifestyleReview;