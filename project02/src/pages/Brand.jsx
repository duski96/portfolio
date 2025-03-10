import { useParams } from "react-router-dom";

import Header from "../components/Header";
import SubMain from "../components/sub/SubMain";
import BrandContent from "../components/sub/brand/BrandContent";
import QuickMenu from "../components/QuickMenu";
import Footer from "../components/Footer";
import Redirect from "../components/Redirect";

import subMainBg from '../assets/sub/brand_main.jpg';

const Brand=()=>{
    const params=useParams();
    const paramsName=params.subPageName;

    return (
        ['news', 'inside', 'lifestyle'].includes(paramsName) ?
        <>
            <Header isActive={true} />
            <SubMain title={'BRAND'} explanation={`${paramsName.toUpperCase()}`} background={subMainBg} addClassName={'Brand'} />
            <BrandContent paramsName={paramsName} />
            <QuickMenu />
            <Footer />
        </>
        :
        <>
            <Redirect message={`${paramsName} 페이지는 존재하지 않습니다.`} />
        </>
    );
}

export default Brand;