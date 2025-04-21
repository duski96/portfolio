import { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginUserInfoContext } from "../../../App";
import axios from "axios";
import { getCurrentTime } from "../../../util/get-current-time.js";

const LifestyleEditor=()=>{
    // 현재 페이지 경로
    const loc=useLocation().pathname;
    // useParams를 사용하지 않고 어느 게시판의 에디터인지 구분
    const boardName=loc.split('/')[loc.split('/').length-2];

    // 유저가 수정 버튼을 눌러서 들어오면 기존 data를 전달받음
    const linkData=useLocation().state;

    // 접속했던 게시판 경로에 따라 다른 제목으로 출력
    let title;
    switch(boardName){
        case 'review' : title='리뷰쓰기'; break;
        case 'meeting' : title='정기 모임'; break;
        case 'driving' : title='드라이빙 코스'; break;
        case 'maintenance' : title='정비 후기'; break;
        case 'defect' : title='결함/리콜'; break;
        default : break;
    }

    const {loginUserInit, loginUserInfo, setLoginUserInfo}=useContext(LoginUserInfoContext);

    const nav=useNavigate();

    // 로그인 하지 않은 유저가 접근할 때
    if(!loginUserInfo.isLogin){
        if(confirm('로그인이 필요합니다!')){
            nav('/login', {state:{from:loc}});
            return;
        }
        else{
            nav('/brand/lifestyle');
            return;
        }
    }

    // input 기본 값.
    // 로그인한 유저의 정보와 게시판 이름까지 서버에 전달해 적절한 DB에 저장
    // 글 수정이면 제목과 내용에 linkData로 기본값 지정
    const initInput={
        id:linkData ? linkData.value.id : undefined,
        title:linkData ? linkData.value.title : '',
        userId:loginUserInfo.userId,
        nickname:loginUserInfo.nickname,
        car:loginUserInfo.car,
        rate:'',
        content:linkData ? linkData.value.content : '',
        createdDate:getCurrentTime(),
        board:boardName,
    };

    const [input, setInput]=useState(initInput);

    const onChangeInput=(e)=>{
        const newInput={
            ...input,
            [e.target.name]:e.target.value
        }
        setInput(newInput);
    }
    

    // 초기화 버튼 클릭 시 작성중인 내용 모두 삭제
    const onClickInit=()=>{
        if(window.confirm('작성중인 내용을 초기화하시겠습니까?')){
            setInput(initInput);
        }
        else{
            return;
        }
    }

    const onClickCancel=()=>{
        if(window.confirm('글 작성을 취소하시겠습니까?')){
            nav(-1);
        }
        else{
            return;
        }
    }

    // 완료 버튼 클릭시 DB에 저장
    const onClickSubmit=()=>{
        // 완료 클릭 시점의 시간을 작성 일자로 지정
        setInput({...input, createdDate:getCurrentTime()});

        // 리뷰 게시판에서 다루는 데이터가 달라 따로 호출
        if(boardName==='review'){
            axios.get('/api/board/review_submit', {params:input})
            .then(()=>{
                alert('리뷰 작성이 완료되었습니다.');
                nav('/brand/lifestyle/review');
            }).catch(()=>{
                alert('오류가 발생했습니다!');
            });
        }
        else{
            if(!linkData){
                axios.get('/api/board/post_submit', {params:input})
                .then(()=>{
                    alert('글 작성이 완료되었습니다.');
                    nav(`/brand/lifestyle/${boardName}`);
                }).catch(()=>{
                    alert('오류가 발생했습니다!');
                });
            }
            else{
                axios.get('/api/board/post_update', {params:input})
                .then(()=>{
                    alert('글 수정이 완료되었습니다.');
                    nav(`/brand/lifestyle/${boardName}`);
                }).catch(()=>{
                    alert('오류가 발생했습니다!');
                });
            }
        }
    }

    // 섹션 hidden 여부 확인
    const [isHidden, setIsHidden]=useState(true);

    // jwt 토큰 유효성 검사 실행
    axios.get('api/auth/verify', {withCredentials:true}).then((res)=>{
        if(!res){
            alert('토큰이 유효하지 않습니다. 다시 로그인해주세요.');
            sessionStorage.removeItem('loginUserInfo');
            setLoginUserInfo(loginUserInit);
            nav('/login', {replace:true});
        }
        else{
            setIsHidden(false);
        }
    }).catch(()=>{
        alert('서버와 통신할 수 없습니다.');
        nav('/', {replace:true});
    });

    return (
        <section className={`BrandContent Lifestyle LifestyleEditor NotoSansKR hidden_${isHidden}`}>
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
                        <button type='button' className='fs_sm cancel' onClick={onClickCancel}>취소</button>
                        <button type='button' className='fs_sm submit' onClick={onClickSubmit}>완료</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default LifestyleEditor;