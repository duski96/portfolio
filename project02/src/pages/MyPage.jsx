import { useContext } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import SubMain from "../components/sub/SubMain";
import Profile from "../components/sub/mypage/Profile";
import QuickMenu from "../components/QuickMenu";
import Footer from "../components/Footer";
import Redirect from "../components/Redirect";

import subMainBg from './../assets/sub/mypage_main.jpg';

import { LoginUserInfoContext } from "../App";

const MyPage=()=>{
    const paramsName=useParams().userId;
    const {loginUserInfo}=useContext(LoginUserInfoContext);

    if(loginUserInfo.userId===paramsName){
        return (
            <>
                <Header isActive={true} />
                <SubMain title={'MY PAGE'} explanation={`Profile`} background={subMainBg} addClassName={'Model'} />
                <Profile loginUserInfo={loginUserInfo} />
                <QuickMenu />
                <Footer />
            </>
        );
    }
    else{
        return <Redirect message={'다른 회원의 정보는 볼 수 없습니다.'} />
    }
}

export default MyPage;