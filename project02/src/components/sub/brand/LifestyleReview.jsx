import profileImg from '../../../assets/sub/profile_default.jpg';

const mockReview=[
    {
        id:0,
        userId:'user1',
        userNickname:'말랑박쥐',
        userCar:'클럽맨',
        rate:3,
        content:'이 차를 사느니 걸어다니겠습니다.'
    },
    {
        id:1,
        userId:'user2',
        userNickname:'딱딱구리',
        userCar:'5도어',
        rate:5,
        content:'이정도면 개 혜자임.'
    },
    {
        id:2,
        userId:'user3',
        userNickname:'콩송편은적폐',
        userCar:'컨트리맨',
        rate:5,
        content:'미니는 역시 돈 보고 타는 차는 아니네요. 이게 배고픈게 없으면 나가 스트라이프 파티 참여하면 얼마를 타고 좋아요.'
    },
    {
        id:3,
        userId:'user4',
        userNickname:'undeFined',
        userCar:'기타',
        rate:5,
        content:'역시 차는 롤스로이스죠~'
    }
];

const LifestyleReview=({visible})=>{
    let slIdx;
    visible==='part' ? slIdx=mockReview.length-2 : slIdx=0;
    
    return (
        <ul className='review_list fs_sm'>
            {mockReview.slice(slIdx).reverse().map((item)=>
                <li key={item.id} className='review_item'>
                    <div className='profile_img'><img src={profileImg} /></div>
                    <ul>
                    <li><span className='ninckname'>{item.userId}</span> <span className='car'>{item.userCar}</span></li>
                    <li className='mb_xsm'><span className='rate'>★★★★★</span></li>
                    <li><p className='content'>{item.content}</p></li>
                    </ul>
                </li>
            )}
        </ul>
    );
}

export default LifestyleReview;