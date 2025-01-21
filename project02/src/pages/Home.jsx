import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/main/Main';
import Warranty from '../components/main/Warranty';
import ForSale from '../components/main/ForSale';

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
    
    
    return (
        <>
            <Header isActive={isActive}/>
            <Main />
            <Warranty />
            <ForSale />
        </>
    );
}

export default Home;