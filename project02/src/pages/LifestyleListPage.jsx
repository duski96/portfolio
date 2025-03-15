import { useParams } from "react-router-dom";

import Header from "../components/Header";
import SubMain from "../components/sub/SubMain";
import LifestyleList from "../components/sub/brand/LifestyleList";
import QuickMenu from "../components/QuickMenu";
import Footer from "../components/Footer";
import Redirect from "../components/Redirect";

import subMainBg from '../assets/sub/brand_main.jpg';

const LifestyleListPage=()=>{
    const paramsName=useParams().boardName;

    return (
        ['review', 'meeting', 'driving', 'maintenance', 'defect'].includes(paramsName) ?
        <>
            <Header isActive={true} />
            <SubMain title={'BRAND'} explanation={'Welcome to Mini Lifestyle'} background={subMainBg} addClassName={'Brand'} />
            <LifestyleList />
            <QuickMenu />
            <Footer />
        </>
        :
        <>
            <Redirect message={'해당 게시판은 존재하지 않습니다.'} />
        </>
    );
}

export default LifestyleListPage;