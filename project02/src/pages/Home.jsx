import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Main from '../components/main/Main';
import Warranty from '../components/main/Warranty';
import ForSale from '../components/main/ForSale';
import TradeIn from '../components/main/TradeIn';
import Spot from '../components/main/spot';
import Footer from '../components/Footer';

const Home=()=>{

    const [isActive, setIsActive]=useState(false);

    function headerActive(){
        let mainSec=document.querySelector('.Main');

        const io=new IntersectionObserver((entries)=>{
            entries.forEach((item)=>{
                item.isIntersecting ? setIsActive(false) : setIsActive(true);
            });
        },{threshold:1});
    
        io.observe(mainSec);
    }

    useEffect(()=>{
        headerActive();
    }, []);

    const nav=useNavigate();
    
    return (
        <>
            <Header isActive={isActive}/>
            <Main />
            <Warranty />
            <ForSale />
            <div className='inner_1280' onClick={()=>{nav('/interest')}}>관심목록 가기</div>
            <TradeIn />
            <Spot />
            <Footer />
        </>
    );
}

export default Home;