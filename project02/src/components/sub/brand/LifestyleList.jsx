import './BrandContent.css';
import { useContext } from 'react';
import { LoginUserInfoContext } from '../../../App.jsx';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import LifestyleWelcome from './LifestyleWelcome.jsx';
import LifestyleReview from './LifestyleReview.jsx';
import LifestylePost from './LifestylePost.jsx';

const LifestyleList=()=>{
    // 현재 경로 유무에 따라 로그인 페이지 이동 후 리다이렉트 경로 설정
    const locPath=useLocation().pathname;

    // 게시판 이름
    const boardName=useParams().boardName;
    
    const {loginUserInfo}=useContext(LoginUserInfoContext);
    
    const nav=useNavigate();
    
    // 글 작성 버튼
    const onClickWrite=()=>{
        // 로그인 하지 않으면 글 쓰기 불가
        if(!loginUserInfo.isLogin){
            if(confirm('로그인이 필요합니다!')){
                nav('/login', {state:{from:locPath}});
            }
            return;
        }
        nav(`/brand/lifestyle/${boardName}/editor`);
    }
    
    return (
        <section className='BrandContent Lifestyle LifestyleList NotoSansKR'>
            <div className='inner_1280'>
                <LifestyleWelcome />
                {boardName==='review' ? 
                <>
                    <h4 className='board_title fs_lg mb_lg'>운전자 리뷰</h4>
                    <LifestyleReview />
                </>
                :
                <>
                    {boardName==='meeting' ? 
                    <h4 className='board_title fs_lg mb_lg'>정기 모임</h4> :
                    boardName==='driving' ?
                    <h4 className='board_title fs_lg mb_lg'>드라이빙 코스 추천</h4> :
                    boardName==='maintenance' ?
                    <h4 className='board_title fs_lg mb_lg'>정비 후기</h4> :
                    boardName==='defect' ?
                    <h4 className='board_title fs_lg mb_lg'>결함 / 리콜</h4> :
                    <></>
                    }
                    <LifestylePost />
                </>
                }
                <div className='btn_area'>
                    <button type='button' className='board_home fs_sm' onClick={()=>{nav('/brand/lifestyle')}}>
                        Lifestyle 페이지로
                    </button>
                    <button type='button' className='write fs_sm' onClick={onClickWrite}>
                        {boardName==='review' ? '리뷰쓰기' : '글쓰기'}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default LifestyleList;