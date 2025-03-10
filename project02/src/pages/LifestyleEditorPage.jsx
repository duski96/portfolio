import Header from "../components/Header";
import SubMain from "../components/sub/SubMain";
import LifestyleEditor from "../components/sub/brand/LifestyleEditor";
import QuickMenu from "../components/QuickMenu";
import Footer from "../components/Footer";

import subMainBg from '../assets/sub/brand_main.jpg';

const LifestyleEditorPage=()=>{
    return (
        <>
            <Header isActive={true} />
            <SubMain title={'BRAND'} explanation={'Welcome to Mini Lifestyle'} background={subMainBg} addClassName={'Brand'} />
            <LifestyleEditor />
            <QuickMenu />
            <Footer />
        </>
    );
}

export default LifestyleEditorPage;