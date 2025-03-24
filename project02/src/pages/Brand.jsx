import { useParams } from "react-router-dom";

import Header from "../components/Header";
import SubMain from "../components/sub/SubMain";
import BrandContent from "../components/sub/brand/BrandContent";
import QuickMenu from "../components/QuickMenu";
import Footer from "../components/Footer";
import Redirect from "../components/Redirect";

import subMainBg from '../assets/sub/brand_main.jpg';

const Brand=()=>{
    const paramsName=useParams().subPageName;

    const returnExplanation=()=>{
        switch(paramsName){
            case 'news' : return 'NEWS';
            case 'inside' : return 'INSIDE MINI';
            case 'lifestyle' : return 'Welcome to Mini Lifestyle';
            default : break;
        }
    }

    const explanation=returnExplanation();

    return (
        ['news', 'inside', 'lifestyle'].includes(paramsName) ?
        <>
            <Header isActive={true} />
            <SubMain title={'BRAND'} explanation={explanation} background={subMainBg} addClassName={'Brand'} />
            <BrandContent paramsName={paramsName} />
            <QuickMenu />
            <Footer />
        </>
        :
        <>
            <Redirect message={'해당 페이지는 존재하지 않습니다.'} />
        </>
    );
}

export default Brand;