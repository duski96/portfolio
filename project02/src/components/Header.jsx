import './Header.css';
import logo from '../assets/logo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header=({isActive})=>{
    
    const [isHover, setIsHover]=useState(false);

    const onMouseOver=()=>{
        setIsHover(true);
    }

    const onMouseOut=()=>{
        setIsHover(false);
    }

    const nav=useNavigate();

    return (
        <header className={`Header ${isHover ? 'isHover' : ''} ${isActive ? 'isActive' : ''}`}>
            <div className="inner_1280">
                <h1 className='logo' onClick={()=>{nav('/', {replace:true})}}><img src={logo} alt="logo" /></h1>
                <nav onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                    <ul className='depth01'>
                        <li>
                            <b>MODEL</b>
                            <ul className='depth02'>
                                <li onClick={()=>{nav('/model/hatch')}}>HATCH</li>
                                <li onClick={()=>{nav('/model/5door')}}>5-DOOR</li>
                                <li onClick={()=>{nav('/model/convertible')}}>CONVERTIBLE</li>
                                <li onClick={()=>{nav('/model/clubman')}}>CLUBMAN</li>
                                <li onClick={()=>{nav('/model/countryman')}}>COUNTRYMAN</li>
                            </ul>
                        </li>
                        <li>
                            <b>USED CAR</b>
                            <ul className='depth02'>
                                <li onClick={()=>{nav('/used-car/certified')}}>인증중고차</li>
                                <li onClick={()=>{nav('/used-car/loyalty')}}>LOYALTY PROGRAM</li>
                                <li onClick={()=>{nav('/used-car/sales')}}>내차 판매 문의</li>
                                <li onClick={()=>{nav('/used-car/desired')}}>희망차량 등록 알림</li>
                            </ul>
                        </li>
                        <li>
                            <b>SERVICE</b>
                            <ul className='depth02'>
                                <li onClick={()=>{nav('/service/connected')}}>MINI CONNECTED</li>
                                <li onClick={()=>{nav('/service/app')}}>MINI APP</li>
                                <li onClick={()=>{nav('/service/parts')}}>PARTS</li>
                                <li onClick={()=>{nav('/service/accessories')}}>ACCESSORIES</li>
                            </ul>
                        </li>
                        <li>
                            <b>BRAND</b>
                            <ul className='depth02'>
                                <li onClick={()=>{nav('/brand/news')}}>NEWS</li>
                                <li onClick={()=>{nav('/brand/inside')}}>INSIDE MINI</li>
                                <li onClick={()=>{nav('/brand/lifestyle')}}>MINI LIFESTYLE</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;