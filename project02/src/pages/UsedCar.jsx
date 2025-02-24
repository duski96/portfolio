import { useParams } from "react-router-dom";

import Header from "../components/Header";
import SubMain from "../components/sub/SubMain";
import TempPage from "../components/sub/TempPage"
import QuickMenu from "../components/QuickMenu";
import Footer from "../components/Footer";

import subMainBg from '../assets/sub/used_car_main.jpg';

const UsedCar=()=>{
    const params=useParams();
    const paramsName=params.subPageName;

    return (
        <>
            <Header isActive={true} />
            <SubMain title={'UsedCar'} explanation={`${paramsName.toUpperCase()} 페이지 입니다.`} background={subMainBg} addClassName={'UsedCar'} />
            <TempPage paramsName={paramsName} />
            <QuickMenu />
            <Footer />
        </>
    );
}

export default UsedCar;