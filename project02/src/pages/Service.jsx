import { useParams } from "react-router-dom";

import Header from "../components/Header";
import SubMain from "../components/sub/SubMain";
import TempPage from "../components/sub/TempPage"
import QuickMenu from "../components/QuickMenu";
import Footer from "../components/Footer";

import subMainBg from '../assets/sub/service_main_img01.jpg';

const Service=()=>{
    const params=useParams();
    const paramsName=params.subPageName;

    return (
        <>
            <Header isActive={true} />
            <SubMain title={'Service'} explanation={`${paramsName.toUpperCase()} 페이지 입니다.`} background={subMainBg} addClassName={'Service'} />
            <TempPage paramsName={paramsName} />
            <QuickMenu />
            <Footer />
        </>
    );
}

export default Service;