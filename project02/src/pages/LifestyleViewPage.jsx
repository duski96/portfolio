import Header from "../components/Header";
import SubMain from "../components/sub/SubMain";
import LifestyleViewer from "../components/sub/brand/LifestyleView";
import QuickMenu from "../components/QuickMenu";
import Footer from "../components/Footer";

import subMainBg from '../assets/sub/brand_main.jpg';

const LifestyleViewerPage=()=>{
    return (
        <>
            <Header isActive={true} />
            <SubMain title={'BRAND'} explanation={'Welcome to Mini Lifestyle'} background={subMainBg} addClassName={'Brand'} />
            <LifestyleViewer />
            <QuickMenu />
            <Footer />
        </>
    );
}

export default LifestyleViewerPage;