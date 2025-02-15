import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createContext } from "react";

import Header from "../components/Header";
import SubMain from "../components/sub/SubMain";
import ModelContent from "../components/sub/ModelContent";
import QuickMenu from "../components/QuickMenu";
import Footer from "../components/Footer";

import subMainBg from './../assets/sub/model_main_img01.jpg';

export const ParamsName=createContext();

const Model=()=>{
    const params=useParams();
    const paramsName=params.name;

    const nav=useNavigate();

    useEffect(()=>{
        if(!['hatch', '5door', 'convertible', 'clubman', 'countryman'].includes(paramsName)){
            alert('존재하지 않는 모델입니다.');
            nav(-1);
        }
    });

    return (
        <>
            <Header isActive={true} />
            <SubMain title={'MODEL'} explanation={`미니의 ${paramsName.toUpperCase()} 모델에 대해 알아보세요.`} background={subMainBg} addClassName={'Model'} />
            <ParamsName.Provider value={paramsName}>
                <ModelContent />
            </ParamsName.Provider>
            <QuickMenu />
            <Footer />
        </>
    );

    
}

export default Model;