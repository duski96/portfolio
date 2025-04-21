import { useContext, useEffect, useState } from "react";
import { useParams, useLocation, useNavigate} from "react-router-dom";
import { LoginUserInfoContext } from "../../../App";
import axios from "axios";

const LifestyleViewer=()=>{
    // 로그인 여부 확인 후 수정 및 삭제 가능
    const {loginUserInit, loginUserInfo, setLoginUserInfo}=useContext(LoginUserInfoContext);
    
    const nav=useNavigate();

    // 게시판 이름
    const loc=useLocation().pathname;
    const boardName=loc.split('/')[loc.split('/').length-2];
   
    // 현재 포스트 아이디
    const curId=useParams().id;

    // 현재 게시판 데이터
    // Link 태그에서 받아온 state가 있으면 해당 데이터 사용, 없으면 DB에서 로딩
    let linkData=useLocation().state;

    // 현재 데이터 담을 state
    const [curData, setCurData]=useState(null);

    // 로딩이 끝나고 다시 렌더링
    useEffect(()=>{
        if(linkData){
            // 사용자가 포스팅 리스트에서 클릭을 통해 들어올 경우 Link의 state를 통해 얻은 데이터 사용.
            setCurData(linkData);
        }
        else{
            // 직접 링크를 입력해 들어올 경우 DB에서 해당 id에 맞는 데이터 로딩 후 렌더링
            axios.get(`/api/board/${boardName}`).then((res)=>{
                const loadData=res.data.filter((item)=>item.id===Number(curId))[0];
                setCurData(loadData);

            }).catch(()=>{
                alert('DB 연결에 실패했습니다.');
            });
        }
    }, []);
        
    if(!curData){
        return <p>해당 글이 존재하지 않습니다.</p>
    }

    // 목록으로 버튼
    const onClickList=()=>{
        nav(`/brand/lifestyle/${boardName}`);
    }

    // 수정 버튼
    const onClickEdit=()=>{
        axios.get('/api/auth/verify', {withCredentials:true}).then((res)=>{
            if(!res){
                alert('토큰이 유효하지 않습니다. 다시 로그인해주세요.');
                sessionStorage.removeItem('loginUserInfo');
                setLoginUserInfo(loginUserInit);
                nav('/login', {replace:true});
            }
            else{
                // 로그인 하지 않으면 함수 종료
                if(!loginUserInfo)
                    return;

                // 작성자가 다르면 알림 표시 후 함수 종료
                if(loginUserInfo.userId!==curData.user_id){
                    alert('수정 권한이 없습니다.');
                    return;
                }
                else{
                    // 확인 시 글 수정
                    if(window.confirm('작성한 글을 수정하시겠습니까?')){
                        nav(`/brand/lifestyle/${boardName}/editor`, {state:{value:curData}});
                    }
                    else{
                        //취소 시 함수 종료
                        return;
                    }
                }
            }
        }).catch(()=>{
            alert('서버와 통신할 수 없습니다.');
            return;
        });
    }

    // 삭제 버튼
    const onClickDelete=()=>{
        axios.get('/api/auth/verify', {withCredentials:true}).then((res)=>{
            if(!res){
                alert('토큰이 유효하지 않습니다. 다시 로그인해주세요.');
                sessionStorage.removeItem('loginUserInfo');
                setLoginUserInfo(loginUserInit);
                nav('/login', {replace:true});
            }
            else{
                if(!loginUserInfo)
                    return;
        
                if(loginUserInfo.userId!==curData.user_id){
                    alert('삭제 권한이 없습니다.');
                    return;
                }
                else{
                    // 확인 시 글 삭제
                    if(window.confirm('작성한 글을 삭제 하시겠습니까?')){
                        axios.get('/api/board/delete', {params:{id:curData.id, userId:curData.user_id, board:boardName}})
                        .then(()=>{
                            alert('삭제되었습니다.');
                            nav(`/brand/lifestyle/${boardName}`)
                        }).catch(()=>{
                            alert('삭제할 수 없습니다.')
                        });
                    }
                    else{
                        //취소 시 함수 종료
                        return;
                    }
                }
            }
        }).catch(()=>{
            alert('서버와 통신할 수 없습니다.');
            return;
        });
    }

    return(
        <section className='BrandContent Lifestyle LifestyleViewer NotoSansKR'>
            <div className='inner_1280'>
                <h4 className='fs_lg page_title mb_sm'>{curData.title}</h4>
                <div className='write_info mb_md'>
                    <div className='user_info'>
                        <span className='ninckname'>{curData.nickname}</span> <span className='car'>{curData.car}</span>
                    </div>
                    <span className='created_date'>작성일자 : {curData.created_date}</span>
                </div>
                <hr className='mb_md' />
                <div className='content mb_xlg'>
                    <p>
                        {curData.content}
                    </p>
                </div>
                <div className='button_area'>
                    <button type='button' className='visible' onClick={onClickList}>목록으로</button>
                    <button type='button' className={`edit ${loginUserInfo.userId===curData.user_id ? 'visible': ''}`} onClick={onClickEdit}>수정</button>
                    <button type='button' className={`delete ${loginUserInfo.userId===curData.user_id ? 'visible': ''}`} onClick={onClickDelete}>삭제</button>
                </div>
            </div>
        </section>
    );
}

export default LifestyleViewer;