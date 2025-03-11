import profileImg from '../../../assets/sub/profile_default.jpg';
import axios from 'axios';

let reviewData;

axios.get('/api/board/review').then((res)=>{
    reviewData=res.data;
}).catch(()=>{});

// const mockReview=[
//     {
//         id:0,
//         userId:'user1',
//         userNickname:'말랑박쥐',
//         userCar:'클럽맨',
//         rate:3,
//         content:'이 차를 사느니 걸어다니겠습니다.'
//     },
//     {
//         id:1,
//         userId:'user2',
//         userNickname:'딱딱구리',
//         userCar:'5도어',
//         rate:5,
//         content:'이정도면 개 혜자임.'
//     },
//     {
//         id:2,
//         userId:'user3',
//         userNickname:'콩송편은적폐',
//         userCar:'컨트리맨',
//         rate:5,
//         content:'미니는 역시 돈 보고 타는 차는 아니네요. 이게 배고픈게 없으면 나가 스트라이프 파티 참여하면 얼마를 타고 좋아요.'
//     },
//     {
//         id:3,
//         userId:'user4',
//         userNickname:'undeFined',
//         userCar:'기타',
//         rate:5,
//         content:'역시 차는 롤스로이스죠~'
//     }
// ];

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