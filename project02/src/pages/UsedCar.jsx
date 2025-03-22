import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SubMain from "../components/sub/SubMain";
import UsedCarContent from "../components/sub/usedcar/UsedCarContent";
import QuickMenu from "../components/QuickMenu";
import Footer from "../components/Footer";
import Redirect from "../components/Redirect";
import subMainBg from '../assets/sub/used_car_main.jpg';

const UsedCar=()=>{
    const paramsName=useParams().subPageName;

    const returnExplanationTxt=()=>{
        switch(paramsName){
            case 'certified' : return '인증중고차';
            case 'loyalty' : return 'LOYALTY PROGRAM';
            case 'sales' : return '내차 판매 문의';
            case 'desired' : return '희망차량 등록 알림';
            default : break;
        }
    }

    const explanationTxt=returnExplanationTxt();

    return (
        ['certified', 'loyalty', 'sales', 'desired'].includes(paramsName) ?
        <>
            <Header isActive={true} />
            <SubMain title={'UsedCar'} explanation={explanationTxt} background={subMainBg} addClassName={'UsedCar'} />
            <UsedCarContent paramsName={paramsName} />
            <QuickMenu />
            <Footer />
        </>
        :
        <>
            <Redirect message={`해당 페이지는 존재하지 않습니다.`} />
        </>
    );
}

export default UsedCar;