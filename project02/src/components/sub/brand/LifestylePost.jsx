import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const LifestylePost=({visible, tableName})=>{
    // lifestyle 페이지면 tableName으로,
    // 해당 게시판 페이지라면 useParams로 게시판 이름 구분
    let boardName=useParams().boardName || tableName;

    // 현재 게시판의 데이터를 저장할 state
    const [boardList, setBoardList]=useState(null);

    // DB에서 데이터를 불러온 후 다시 렌더링
    useEffect(()=>{
        axios.get(`/api/board/${boardName}`).then((res)=>{
            const loadData=res.data;
            console.log(loadData);
            setBoardList(loadData);
        }).catch(()=>{
            alert('DB 연결에 실패했습니다.');
        });
    }, []);

    let slIdx=0; // 페이지에 따라 출력될 리스트의 개수가 다르기 때문에 slice할 인덱스 지정

    if(!boardList){
        return <p>작성된 글이 없습니다.</p>
    }
    else{
        // lifestyle 페이지에서 보여질 리스트
        // 작성된 글이 3개 이하면 모든 글 출력
        visible==='part' ? slIdx=boardList.length-3 : slIdx=0;
    }

    // boardName : 불러와야 할 게시판 이름,
    // boardList : 해당 게시판 리스트,
    // slIdx : 페이지에 따라 리스트의 개수를 다르게 출력
    return (
        <ul className='post_list fs_sm'>
            {boardList.slice(slIdx).reverse().map((item)=>
                <li key={item.id} className='post_item'>
                    <Link to={`/brand/lifestyle/${boardName}/${item.id}`} state={item}>
                        <ul>
                            <li className='mb_sm'><span className='title fs_md'>{item.title}</span></li>
                            <li><span className='ninckname'>{item.nickname}</span> <span className='car'>{item.car}</span></li>
                        </ul>
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default LifestylePost;