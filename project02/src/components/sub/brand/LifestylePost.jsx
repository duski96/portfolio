import { useParams } from 'react-router-dom';
import axios from 'axios';

let postData;
axios.get('/api/board/post').then((res)=>{
    postData=res.data;
    console.log(postData['meeting'].length);
}).catch((err)=>{
    console.log(err);
});

// const mockPost=[
//     {
//         id:0,
//         userId:'user1',
//         userNickname:'말랑박쥐',
//         userCar:'클럽맨',
//         title:'제 1회 부산 폭주 모임',
//         content:'폭주합시다.'
//     },
//     {
//         id:1,
//         userId:'user2',
//         userNickname:'딱딱구리',
//         userCar:'5도어',
//         title:'제 1회 부산 폭주 모임',
//         content:'폭주합시다.'
//     },
//     {
//         id:2,
//         userId:'user3',
//         userNickname:'콩송편은적폐',
//         userCar:'컨트리맨',
//         title:'제 1회 부산 폭주 모임',
//         content:'폭주합시다.'
//     },
//     {
//         id:3,
//         userId:'user4',
//         userNickname:'undeFined',
//         userCar:'기타',
//         title:'제 1회 부산 폭주 모임',
//         content:'폭주합시다.'
//     }
// ];

// postData는 review와 달리 네 개의 테이블을 한 번에 불러옴
// tableName 파라미터에 따라 몇 번째 테이블을 불러올지 정해짐
const LifestylePost=({visible, tableName})=>{
    
    // lifestyle 페이지가 아닌 해당 게시판 페이지라면 useParams로 불러올 데이터 구분
    const boardName=useParams().boardName;

    // lifestyle 페이지에선 tableName, 게시판 페이지에선 boardName이 속성으로 사용됨
    let attr;
    tableName ? attr=tableName : attr=boardName;

    //post 페이지와 lifestyle 페이지에서 보여질 개수가 다르기 때문에 slice할 인덱스를 지정할 변수
    let slIdx;

    // 작성글 데이터의 개수에 따라 리턴이 다름
    if(!postData[attr].length){
        return <p>작성된 글이 없습니다.</p>
    }
    else if(postData[attr].length<=3){
        // 작성글이 3개 이하면 모두 출력
        slIdx=0;
    }
    else{
        // 작성글이 2개 넘으면 lifestyle 페이지에선 3개만, 리뷰 페이지에선 모두 출력 
        visible==='part' ? slIdx=postData[attr].length-3 : slIdx=0;
    }

    return (
        <ul className='post_list fs_sm'>
            {postData[attr].slice(slIdx).reverse().map((item)=>
                <li key={item.id} className='post_item'>
                    <ul>
                        <li className='mb_sm'><span className='title fs_md'>{item.title}</span></li>
                        <li><span className='ninckname'>{item.nickname}</span> <span className='car'>{item.car}</span></li>
                    </ul>
                </li>
            )}
        </ul>
    );
}

export default LifestylePost;