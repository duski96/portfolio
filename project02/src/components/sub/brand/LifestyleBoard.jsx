import './BrandContent.css';
import { useContext } from 'react';
import { LoginUserInfoContext } from '../../../App.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import LifestyleWelcome from './LifestyleWelcome.jsx';
import LifestyleReview from './LifestyleReview.jsx';
import LifestylePost from './LifestylePost.jsx';

const LifestyleBoard=()=>{
    const boardName=useParams().boardName;
    
    const {loginUserInfo}=useContext(LoginUserInfoContext);
    
    const nav=useNavigate();
    const onClickWrite=()=>{
        // 로그인 하지 않으면 글 쓰기 불가
        if(!loginUserInfo.isLogin){
            if(confirm('로그인이 필요합니다!')){
                nav('/login');
            }
            return;
        }
        nav(`/brand/lifestyle/${boardName}/editor`);
    }
    
    return (
        <section className='BrandContent Lifestyle LifestyleBoard NotoSansKR'>
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
                <button type='button' className='write fs_sm' onClick={onClickWrite}>
                    {boardName==='review' ? '리뷰쓰기' : '글쓰기'}
                </button>
            </div>
        </section>
    );
}

export default LifestyleBoard;