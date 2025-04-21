import profileImg from '../../../assets/sub/profile_default.jpg';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginUserInfoContext } from '../../../App';
import axios from 'axios';

const LifestyleReview=({visible})=>{
    const nav=useNavigate();

    // 로그인 유저 Context
    const {loginUserInit, loginUserInfo, setLoginUserInfo}=useContext(LoginUserInfoContext);

    // 리뷰 데이터를 저장할 state
    const [reviewData, setReviewData]=useState();

    // review 페이지와 lifestyle 페이지에서 보여질 개수가 다르기 때문에 slice할 인덱스를 지정할 변수
    let slIdx=0;

    // 리스트 렌더링 함수
    const ListLoading=()=>{
        axios.get('/api/board/review').then((res)=>{
            setReviewData(res.data);
        }).catch(()=>{
            alert('DB 연결에 실패했습니다.');
        });
    }

    //DB에서 리뷰 테이블 데이터 로딩 후 다시 렌더링
    useEffect(()=>{
        ListLoading();
    }, []);

    // 리뷰 데이터의 개수에 따라 리턴이 다름
    if(!reviewData){
        return <p>작성된 리뷰가 없습니다.</p>
    }
    else{
        // lifestyle 페이지에선 2개만, 리뷰 페이지에선 모두 출력 
        visible==='part' ? slIdx=reviewData.length-2 : slIdx=0;
    }

    
    // 리뷰 삭제 버튼
    const onClickDelete=(e)=>{
        // 삭제 전 최종 확인
        if(window.confirm('리뷰를 삭제하시겠습니까?')){
            axios.get('/api/auth/verify', {withCredentials:true}).then((res)=>{
                if(!res){
                    alert('토큰이 유효하지 않습니다. 다시 로그인해주세요.');
                    sessionStorage.removeItem('loginUserInfo');
                    setLoginUserInfo(loginUserInit);
                    nav('/login', {replace:true});
                }
                else{
                    // 확인 시 게시판 삭제 api 호출
                    axios.get('/api/board/delete', {params:{id:e.target.dataset.itemId, userId:e.target.dataset.userId, board:'review'}});

                    // 삭제 알림
                    alert('리뷰가 삭제되었습니다.');

                    // 삭제 후 리뷰 리스트 다시 렌더링. 비동기 호출 방지를 위해 리스트 삭제 후 1초 후 실행
                    setTimeout(()=>{
                        ListLoading();
                    }, 1000);
                }
            }).catch(()=>{
                alert('서버와 통신할 수 없습니다.');
                return;
            });
        }
        else{
            // 취소 시 클릭 이벤트 종료
            return;
        }
    }
    
    return (
        <ul className='review_list fs_sm'>
            {reviewData.slice(slIdx).reverse().map((item)=>
                <li key={item.id} className='review_item mb_md'>
                    <div className='review_info'>
                        <div className='profile_img'>
                            <img src={profileImg} />
                        </div>
                        <ul className='info'>
                            <li><span className='ninckname'>{item.nickname}</span> <span className='car'>{item.car}</span></li>
                            <li className='mb_xsm'><span className='rate'>{'★'.repeat(item.rate)}</span></li>
                            <li><p className='content'>{item.content}</p></li>
                        </ul>
                    </div>
                    <div className={`button_area ${item.user_id===loginUserInfo.userId ? 'visible' : ''}`}>
                        <button type='button' className='delete fs_sm' onClick={onClickDelete} data-item-id={item.id} data-user-id={item.user_id}>삭제</button>
                    </div>
                </li>
            )}
        </ul>
    );
}

export default LifestyleReview;