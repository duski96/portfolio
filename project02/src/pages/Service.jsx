import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SubMain from "../components/sub/SubMain";
import ServiceContent from "../components/sub/service/ServiceContent";
import QuickMenu from "../components/QuickMenu";
import Footer from "../components/Footer";
import subMainBg from '../assets/sub/service_main.jpg';

const Service=()=>{
    const paramsName=useParams().subPageName;

    return (
        <>
            <Header isActive={true} />
            <SubMain title={'Service'} explanation={`${paramsName.toUpperCase()} 페이지 입니다.`} background={subMainBg} addClassName={'Service'} />
            <ServiceContent paramsName={paramsName} />
            <QuickMenu />
            <Footer />
        </>
    );
}

export default Service;