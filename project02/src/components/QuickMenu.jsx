import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuickMenu.css';
import homeImg from '../assets/common/quick_home.svg';
import interestImg from '../assets/common/quick_interest.svg';
import topImg from '../assets/common/quick_top.svg';
import { MockDataContext } from '../App';

const QuickMenu=()=>{
    const nav=useNavigate();
    const {interestId}=useContext(MockDataContext)
    return (
        <section className='QuickMenu'>
            <div className='inner_1600'>
                <ul className='fs_xsm NotoSansKR'>
                    <li className='title'>
                        Quick<br/>Menu
                    </li>
                    <li className='home' onClick={()=>{nav('/', {replace:true})}}>
                        <img src={homeImg} alt='홈으로 이동' />
                        HOME
                    </li>
                    <li className='interest' onClick={()=>{nav('/interest')}}>
                        {interestId.length ? <div className='count active'>{interestId.length}</div> : <div className='count'>0</div>}
                        <img src={interestImg} alt='관심매물 페이지로 이동' />
                        관심매물
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