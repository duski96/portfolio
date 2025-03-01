import { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Interest from './pages/Interest';
import Model from './pages/Model';
import UsedCar from './pages/UsedCar';
import Service from './pages/Service';
import Brand from './pages/Brand';
import Product from './pages/Product';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Register from './pages/Register';

import { mockDataArray } from './util/mock-data';

const mockData=mockDataArray; // 전체 매물

export const MockDataContext=createContext();
export const MockDataDispatchContext=createContext();
export const LoginUserInfoContext=createContext();

function App() {
  // 찜한 목록의 id를 localStorage에서 불러옴
  const storedInterestId=JSON.parse(localStorage.getItem('interestId'));

  // localStorage가 비어있을 경우 빈 배열을 초기값으로, 그렇지 않으면 저장된 데이터를 초기값으로 지정
  const [interestId, setInterestId]=useState(storedInterestId ? storedInterestId : []);

  const getInterestId=(targetId)=>{ // 관심 매물 id 저장
    interestId.includes(targetId) ? setInterestId(interestId.filter((item)=>item!==targetId)) : setInterestId([...interestId, targetId]);
  }
  const deleteInterestId=(targetId)=>{ // 관심 매물 id 삭제
    setInterestId(interestId.filter((item)=>item!==targetId));
  }

  // interestId의 상태가 변하면 localStorage에 저장
  localStorage.setItem('interestId',JSON.stringify(interestId));


  // 로그인 할 유저의 초기 상태
  const loginUserInit={
    userId:'',
    nickName:'',
    eMail:'',
    car:'',
    isLogin:false
  }

  // 로그인한 유저의 상태를 세션에 저장
  const sotredLoginUserInfo=JSON.parse(sessionStorage.getItem('loginUserInfo'));

  // 로그인 유저 상태 관리
  const [loginUserInfo, setLoginUserInfo]=useState(sotredLoginUserInfo ? 
    sotredLoginUserInfo : loginUserInit);

  // 로그인 한 유저의 정보를 세션에 저장
  sessionStorage.setItem('loginUserInfo', JSON.stringify(loginUserInfo));

  return (
    <>
      <MockDataContext.Provider value={{mockData, interestId}}>
        <MockDataDispatchContext.Provider value={{getInterestId, deleteInterestId}}>
          <LoginUserInfoContext.Provider value={{loginUserInit, loginUserInfo, setLoginUserInfo}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/interest" element={<Interest />} />
              <Route path="/model/:subPageName" element={<Model />} />
              <Route path="/used-car/:subPageName" element={<UsedCar />} />
              <Route path="/service/:subPageName" element={<Service />} />
              <Route path="/brand/:subPageName" element={<Brand />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mypage/:userId" element={<MyPage />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </LoginUserInfoContext.Provider>
        </MockDataDispatchContext.Provider>
      </MockDataContext.Provider>
    </>
  )
}

export default App