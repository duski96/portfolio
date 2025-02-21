import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './QuickMenu.css';
import homeImg from '../assets/common/quick_home.svg';
import interestImg from '../assets/common/quick_interest.svg';
import topImg from '../assets/common/quick_top.svg';
import { MockDataContext } from '../App';

const QuickMenu=()=>{
    const {interestId}=useContext(MockDataContext)
    return (
        <section className='QuickMenu'>
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