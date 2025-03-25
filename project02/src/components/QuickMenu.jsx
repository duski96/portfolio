import './QuickMenu.css';
import { useContext, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import homeImg from '../assets/common/quick_home.svg';
import interestImg from '../assets/common/quick_interest.svg';
import topImg from '../assets/common/quick_top.svg';
import { MockDataContext } from '../App';

const QuickMenu=()=>{
    const {interestId}=useContext(MockDataContext);

    // 아래로 스크롤 하면 퀵메뉴 등장
    // debounce 사용으로 이벤트 동작 횟수 조정
    const debounceScrollEvent=useCallback(debounce(()=>{
        const quickMenu=document.querySelector('.QuickMenu');

        scrollY > 50 ? quickMenu.classList.remove('hidden') : quickMenu.classList.add('hidden');
    }, 100), []);
    
    window.addEventListener('scroll', debounceScrollEvent);

    return (
        <section className='QuickMenu hidden'>
            <div className='inner_1600'>
                <ul className='fs_xsm NotoSansKR'>
                    <li className='title'>
                        Quick<br/>Menu
                    </li>
                    <li className='home'>
                        <Link to='/'>
                            <img src={homeImg} alt='홈으로 이동' />
                            HOME
                        </Link>
                    </li>
                    <li className='interest'>
                        <Link to='/interest'>
                            {interestId.length ? <div className='count active'>{interestId.length}</div> : <div className='count'>0</div>}
                            <img src={interestImg} alt='관심매물 페이지로 이동' />
                            관심매물
                        </Link>
                    </li>
                    <li className='top' onClick={()=>{window.scrollTo({top:0, left:0, behavior:'smooth'})}}>
                        <img src={topImg} alt="최상단으로 이동" />
                        TOP
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default QuickMenu;