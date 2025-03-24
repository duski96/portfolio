import './Header.css';
import logo from '../assets/logo.svg';
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LoginUserInfoContext } from '../App';

const Header=({isActive})=>{    
    // 아래 경로를 로그인 페이지에 전달하고 경로 유무에 따라 리다이렉트 설정
    const locPath=useLocation().pathname;

    // PC 버전 Header 에서 사용
    const [isHover, setIsHover]=useState(false);

    const onMouseOver=()=>{
        setIsHover(true);
    }

    const onMouseOut=()=>{
        setIsHover(false);
    }

    // Mobile 버전 Header 에서 사용
    const [mobileNavVisible, setMobileNavVisible]=useState('');
    const [mobileHeaderActive, setMobileHeaderActive]=useState(false);

    const onMobileBtnClick=(e)=>{
        // 모바일 버튼 클릭 시 active 클래스 추가
        const btn=e.currentTarget;
        btn.classList.toggle('active');
        
        // 버튼이 클릭 상태이면 nav 보임
        btn.classList.contains('active') ? setMobileNavVisible('visible') : setMobileNavVisible('');

        // 버튼일 클릭 상태이면 Header 활성화
        btn.classList.contains('active') ? setMobileHeaderActive(true) : setMobileHeaderActive(false);
    }

    // 로그인 유저의 정보 사용
    const {loginUserInit, loginUserInfo, setLoginUserInfo}=useContext(LoginUserInfoContext);

    // 로그아웃 버튼 클릭 시 세션에서 유저 정보 삭제, 로그인 유저 상태 초기화
    const onClickLogout=()=>{
        sessionStorage.removeItem('loginUserInfo');
        setLoginUserInfo(loginUserInit);
    }

    return (
        <header className={`Header ${isHover ? 'isHover' : ''} ${isActive ? 'isActive' : ''} ${mobileHeaderActive ? 'isActive' : ''}`}>
            <div className="inner_1280">
                <h1 className='logo'><Link to='/'><img src={logo} alt="logo" /></Link></h1>
                <nav onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={`${mobileNavVisible}`} >
                    <ul className='depth01'>
                        <li>
                            <b>MODEL</b>
                            <ul className='depth02'>
                                <li><Link to='/model/3door'>3-DOOR</Link></li>
                                <li><Link to='/model/5door'>5-DOOR</Link></li>
                                <li><Link to='/model/convertible'>CONVERTIBLE</Link></li>
                                <li><Link to='/model/clubman'>CLUBMAN</Link></li>
                                <li><Link to='/model/countryman'>COUNTRYMAN</Link></li>
                                <li><Link to='/model/coupe'>COUPE</Link></li>
                                <li><Link to='/model/paceman'>PACEMAN</Link></li>
                                <li><Link to='/model/roadster'>ROADSTER</Link></li>
                            </ul>
                        </li>
                        <li>
                            <b>USED CAR</b>
                            <ul className='depth02'>
                                <li><Link to='/used-car/certified'>인증중고차</Link></li>
                                <li><Link to='/used-car/loyalty'>LOYALTY PROGRAM</Link></li>
                                <li><Link to='/used-car/sales'>내차 판매 문의</Link></li>
                                <li><Link to='/used-car/desired'>희망차량 등록 알림</Link></li>
                            </ul>
                        </li>
                        <li>
                            <b>SERVICE</b>
                            <ul className='depth02'>
                                <li><Link to='/service/connected'>MINI CONNECTED</Link></li>
                                <li><Link to='/service/app'>MINI APP</Link></li>
                                <li><Link to='/service/parts'>PARTS</Link></li>
                                <li><Link to='/service/accessories'>ACCESSORIES</Link></li>
                            </ul>
                        </li>
                        <li>
                            <b>BRAND</b>
                            <ul className='depth02'>
                                <li><Link to='/brand/news'>NEWS</Link></li>
                                <li><Link to='/brand/inside'>INSIDE MINI</Link></li>
                                <li><Link to='/brand/lifestyle'>MINI LIFESTYLE</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <ul className={`user fs_xsm NotoSansKR ${loginUserInfo.isLogin ? 'not_login' : 'login'}`}>
                    <li><Link to={'/login'} state={{from:locPath}}>로그인</Link></li>
                    <li><Link to={'/register'}>회원가입</Link></li>
                    <li><Link to={`/mypage/${loginUserInfo.userId}`}>내 정보</Link></li>
                    <li><Link to={'/login'} state={{from:locPath}} onClick={onClickLogout}>로그아웃</Link></li>
                </ul>
                <button className='mobile_btn' onClick={onMobileBtnClick}>
                    <span>b</span>
                    <span>t</span>
                    <span>n</span>
                </button>
            </div>
        </header>
    );
}

export default Header;