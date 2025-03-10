import profileImg from '../../../assets/sub/profile_default.jpg';

const mockPost=[
    {
        id:0,
        userId:'user1',
        userNickname:'말랑박쥐',
        userCar:'클럽맨',
        title:'제 1회 부산 폭주 모임',
        content:'폭주합시다.'
    },
    {
        id:1,
        userId:'user2',
        userNickname:'딱딱구리',
        userCar:'5도어',
        title:'제 1회 부산 폭주 모임',
        content:'폭주합시다.'
    },
    {
        id:2,
        userId:'user3',
        userNickname:'콩송편은적폐',
        userCar:'컨트리맨',
        title:'제 1회 부산 폭주 모임',
        content:'폭주합시다.'
    },
    {
        id:3,
        userId:'user4',
        userNickname:'undeFined',
        userCar:'기타',
        title:'제 1회 부산 폭주 모임',
        content:'폭주합시다.'
    }
];

const LifestylePost=({visible})=>{
    let slIdx;
    visible==='part' ? slIdx=mockPost.length-3 : slIdx=0;

    return (
        <ul className='post_list fs_sm'>
            {mockPost.slice(slIdx).reverse().map((item)=>
                <li key={item.id} className='post_item'>
                    <ul>
                        <li className='mb_sm'><span className='title fs_md'>{item.title}</span></li>
                        <li><span className='ninckname'>{item.userId}</span> <span className='car'>{item.userCar}</span></li>
                    </ul>
                </li>
            )}
        </ul>
    );
}

export default LifestylePost;