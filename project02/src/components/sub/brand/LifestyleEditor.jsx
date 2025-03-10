import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LoginUserInfoContext } from "../../../App";
import axios from "axios";

const LifestyleEditor=()=>{
    // useParams를 사용하지 않고 어느 게시판의 에디터인지 구분
    const loc=useLocation().pathname.split('/');
    const boardName=loc[loc.length-2];

    let title;
    switch(boardName){
        case 'review' : title='리뷰쓰기'; break;
        case 'meeting' : title='정기 모임'; break;
        case 'driving' : title='드라이빙 코스'; break;
        case 'maintanance' : title='정비 후기'; break;
        case 'defect' : title='결함/리콜'; break;
        default : break;
    }

    const {loginUserInfo}=useContext(LoginUserInfoContext);

    const initInput={
        title:'',
        userId:loginUserInfo.userId,
        nickname:loginUserInfo.nickname,
        car:loginUserInfo.car,
        rate:'',
        content:'',
        board:boardName,
        date:''
    };

    const [input, setInput]=useState(initInput);

    const onChangeInput=(e)=>{
        const newInput={
            ...input,
            [e.target.name]:e.target.value
        }
        setInput(newInput);
    }

    const onClickInit=()=>{setInput(initInput);}

    const getDayTime=()=>{
        const year=new Date().getFullYear();
        const month=new Date().getMonth() <= 9 ? `0${new Date().getMonth()+1}` : `${new Date().getMonth()+1}`;
        const date=new Date().getDate();
        const hours=new Date().getHours() <= 9 ? `0${new Date().getHours()}` : `${new Date().getHours()}`;
        const minutes=new Date().getMinutes();
        const seconds=new Date().getSeconds();

        return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    }

    const onClickSubmit=()=>{        
        input.date=getDayTime();

        if(boardName==='review'){
            axios.get('/api/board/review_submit', {params:input})
            .then(()=>{
                
            }).catch(()=>{
                
            });
        }
        else{
            axios.get('/api/board/post_submit', {params:input})
            .then(()=>{
                
            }).catch(()=>{
                
            });
        }
    }

    return (
        <section className='BrandContent Lifestyle LifestyleEditor NotoSansKR'>
            <div className='inner_1280'>
                <h4 className='page_title fs_lg mb_lg'>{`${title}`}</h4>
                <form>
                    <ul>
                        {boardName==='review' ?
                        <>
                            <li className="mb_sm">
                                <label htmlFor="rate">평점</label>
                                :
                                <select id="rate" name="rate" onChange={onChangeInput}>
                                    <option value="">별점 선택</option>
                                    <option value="1">★</option>
                                    <option value="2">★★</option>
                                    <option value="3">★★★</option>
                                    <option value="4">★★★★</option>
                                    <option value="5">★★★★★</option>
                                </select>
                            </li>
                        </>
                        :
                        <>
                            <li className="mb_sm">
                                <label htmlFor="title">제목</label>
                                :
                                <input id="title" name="title" type="text" value={input.title} onChange={onChangeInput} />
                            </li>
                        </>
                        }
                        <li>
                            <label htmlFor="content">내용</label>
                            :
                            <textarea id="content" name="content" value={input.content} onChange={onChangeInput} />
                        </li>
                    </ul>
                    <div className='button_area'>
                        <button type='button' className='fs_sm' onClick={onClickInit}>초기화</button>
                        <button type='button' className='fs_sm submit' onClick={onClickSubmit}>완료</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default LifestyleEditor;