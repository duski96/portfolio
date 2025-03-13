import profileImg from '../../../assets/sub/profile_default.jpg';
import axios from 'axios';

let reviewData;
axios.get('/api/board/review').then((res)=>{
    reviewData=res.data;
}).catch(()=>{});

const LifestyleReview=({visible})=>{
    // review 페이지와 lifestyle 페이지에서 보여질 개수가 다르기 때문에 slice할 인덱스를 지정할 변수
    let slIdx;

    // 리뷰 데이터의 개수에 따라 리턴이 다름
    if(!reviewData.length){
        return <p>작성된 리뷰가 없습니다.</p>
    }
    else if(reviewData.length<=2){
        // 리뷰가 2개 이하면 모두 출력
        slIdx=0;
    }
    else{
        // 리뷰가 2개 넘으면 lifestyle 페이지에선 2개만, 리뷰 페이지에선 모두 출력 
        visible==='part' ? slIdx=reviewData.length-2 : slIdx=0;
    }
    
    return (
        <ul className='review_list fs_sm'>
            {reviewData.slice(slIdx).reverse().map((item)=>
                <li key={item.id} className='review_item'>
                    <div className='profile_img'><img src={profileImg} /></div>
                    <ul>
                    <li><span className='ninckname'>{item.nickname}</span> <span className='car'>{item.car}</span></li>
                    <li className='mb_xsm'><span className='rate'>{'★'.repeat(item.rate)}</span></li>
                    <li><p className='content'>{item.content}</p></li>
                    </ul>
                </li>
            )}
        </ul>
    );
}

export default LifestyleReview;