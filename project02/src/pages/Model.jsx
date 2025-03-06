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

    return (
        ['3door', '5door', 'convertible', 'clubman', 'countryman', 'coupe', 'paceman', 'roadster'].includes(paramsName) ?
        <>
            <Header isActive={true} />
            <SubMain title={'MODEL'} explanation={`미니의 ${paramsName.toUpperCase()} 모델에 대해 알아보세요.`} background={subMainBg} addClassName={'Model'} />
            <ModelContent paramsName={paramsName} />
            <QuickMenu />
            <Footer />
        </>
        :
        <>
            <Redirect message={`${paramsName} 모델은 존재하지 않습니다.`} />
        </>
    );
}

export default Model;