import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SubMain from "../components/sub/SubMain";
import ServiceContent from "../components/sub/service/ServiceContent";
import QuickMenu from "../components/QuickMenu";
import Footer from "../components/Footer";
import subMainBg from '../assets/sub/service_main.jpg';
import Redirect from "../components/Redirect";

const Service=()=>{
    const paramsName=useParams().subPageName;

    const returnExplanation=()=>{
        switch(paramsName){
            case 'connected' : return 'MINI CONNECTED';
            case 'app' : return 'MINI APP';
            case 'parts' : return 'PARTS';
            case 'accessories' : return 'ACCESSORIES';
            default : break;
        }
    }

    const explanation=returnExplanation();

    return (
        ['connected', 'app', 'parts', 'accessories'].includes(paramsName) ?
        <>
            <Header isActive={true} />
            <SubMain title={'Service'} explanation={explanation} background={subMainBg} addClassName={'Service'} />
            <ServiceContent paramsName={paramsName} />
            <QuickMenu />
            <Footer />
        </>
        :
        <>
            <Redirect message={'해당 페이지는 존재하지 않습니다.'} />
        </>
    );
}

export default Service;