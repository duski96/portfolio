import { useParams } from "react-router-dom";

import Header from "../components/Header";
import SubMain from "../components/sub/SubMain";
import ModelContent from "../components/sub/model/ModelContent";
import QuickMenu from "../components/QuickMenu";
import Footer from "../components/Footer";
import Redirect from "../components/Redirect";

import subMainBg from './../assets/sub/model_main.jpg';

const Model=()=>{
    const paramsName=useParams().subPageName;

    const returnExplanation=()=>{
        switch(paramsName){
            case '3door' : return '클래식한 소형 해치백';
            case '5door' : return '실용적인 가족용 해치백';
            case 'convertible' : return '오픈탑의 자유로움';
            case 'clubman' : return '넓은 공간, 독특한 디자인';
            case 'countryman' : return '다재다능한 소형 SUV';
            case 'coupe' : return '독특한 2인승 스포츠카';
            case 'paceman' : return '미래지향적 소형 SUV';
            case 'roadster' : return '경쾌한 2인승 컨버터블';
            default : break;
        }
    }

    const explanation=returnExplanation();

    return (
        ['3door', '5door', 'convertible', 'clubman', 'countryman', 'coupe', 'paceman', 'roadster'].includes(paramsName) ?
        <>
            <Header isActive={true} />
            <SubMain title={'MODEL'} explanation={`${explanation}`} background={subMainBg} addClassName={'Model'} />
            <ModelContent paramsName={paramsName} />
            <QuickMenu />
            <Footer />
        </>
        :
        <>
            <Redirect message={'해당 페이지는 존재하지 않습니다.'} />
        </>
    );
}

export default Model;