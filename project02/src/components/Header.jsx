import './Header.css';
import logo from '../assets/logo.svg';
import { useState } from 'react';

const Header=({isActive})=>{
    
    const [isHover, setIsHover]=useState(false);

    const onMouseOver=()=>{
        setIsHover(true);
    }

    const onMouseOut=()=>{
        setIsHover(false);
    }

    return (
        <header className={`Header ${isHover ? 'isHover' : ''} ${isActive ? 'isActive' : ''}`}>
            <div className="inner_1280">
                <h1 className='logo'><img src={logo}/></h1>
                <nav onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                    <ul className='depth01'>
                        <li>
                            <b>MODEL</b>
                            <ul className='depth02'>
                                <li>HATCH</li>
                                <li>5-DOOR</li>
                                <li>CONVERTIBLE</li>
                                <li>CLUBMAN</li>
                                <li>COUNTRYMAN</li>
                            </ul>
                        </li>
                        <li>
                            <b>USED CAR</b>
                            <ul className='depth02'>
                                <li>인증중고차</li>
                                <li>LOYALTY PROGRAM</li>
                                <li>내차 판매 문의</li>
                                <li>희망차량 등록 알림</li>
                            </ul>
                        </li>
                        <li>
                            <b>SERVICE</b>
                            <ul className='depth02'>
                                <li>MINI CONNECTED</li>
                                <li>MINI APP</li>
                                <li>PARTS</li>
                                <li>ACCESSORIES</li>
                            </ul>
                        </li>
                        <li>
                            <b>BRAND & NEWS</b>
                            <ul className='depth02'>
                                <li>NEWS</li>
                                <li>INSIDE MINI</li>
                                <li>MINI LIFESTYLE</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;