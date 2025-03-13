import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Redirect from '../../Redirect';

const returnMarkup=(boardName, boardList, sliceIndex)=>{
    // boardName : 불러와야 할 게시판 이름,
    // boardList : 해당 게시판 리스트,
    // sliceIndex : 페이지에 따라 리스트의 개수를 다르게 출력
    return (
        <ul className='post_list fs_sm'>
            {boardList.slice(sliceIndex).reverse().map((item)=>
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

const LifestylePost=({visible, tableName})=>{
    // lifestyle 페이지면 tableName으로,
    // 해당 게시판 페이지라면 useParams로 게시판 이름 구분
    let boardName=useParams().boardName || tableName;

    // 현재 게시판의 데이터를 저장할 state
    const [boardList, setBoardList]=useState(null);

    // 로딩 실패 여부 : 성공 true, 실패 false
    const [loadSuccess, setLoadSuccess]=useState(true);

    // DB에서 데이터를 불러온 후 다시 렌더링
    useEffect(()=>{
        axios.get(`/api/board/${boardName}`).then((res)=>{
            const loadData=res.data;
            setBoardList(loadData);
        }).catch(()=>{
            setLoadSuccess(false);
        });
    }, []);

    if(!loadSuccess)
        return <Redirect message={'데이터 로딩에 실패했습니다.'} />

    if(!boardList){
        return <p>작성된 글이 없습니다.</p>
    }
    else if(visible==='part'){
        // lifestyle 페이지에서 보여질 리스트
        if(boardList.length-3){
            return returnMarkup(boardName, boardList, 0);
        }
        else{
            return returnMarkup(boardName, boardList, boardList.length-3);
        }
    }
    else{
        // 해당 게시판 페이지에서 보여질 리스트
        return returnMarkup(boardName, boardList, 0);
    }
}

export default LifestylePost;