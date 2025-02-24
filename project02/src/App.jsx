import { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Interest from './pages/Interest';
import Model from './pages/Model';
import UsedCar from './pages/UsedCar';
import Service from './pages/Service';
import Brand from './pages/Brand';
import Product from './pages/Product';

import { mockDataArray } from './util/mock-data';

const mockData=mockDataArray; // 전체 매물

export const MockDataContext=createContext();
export const MockDataDispatchContext=createContext();

function App() {
  const storedInterestId=JSON.parse(localStorage.getItem('interestId'));
  // 찜한 목록의 id를 localStorage에서 불러옴
  
  const [interestId, setInterestId]=useState(storedInterestId ? storedInterestId : []);
  // localStorage가 비어있을 경우 빈 배열을 초기값으로, 그렇지 않으면 저장된 데이터를 초기값으로 지정

  const getInterestId=(targetId)=>{ // 관심 매물 id 저장
    interestId.includes(targetId) ? setInterestId(interestId.filter((item)=>item!==targetId)) : setInterestId([...interestId, targetId]);
  }

  const deleteInterestId=(targetId)=>{ // 관심 매물 id 삭제
    setInterestId(interestId.filter((item)=>item!==targetId));
  }

  localStorage.setItem('interestId',JSON.stringify(interestId));
  // interestId의 상태가 변하면 localStorage에 저장

  return (
    <>
      <MockDataContext.Provider value={{mockData, interestId}}>
        <MockDataDispatchContext.Provider value={{getInterestId, deleteInterestId}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/interest" element={<Interest />} />
            <Route path="/model/:subPageName" element={<Model />} />
            <Route path="/used-car/:subPageName" element={<UsedCar />} />
            <Route path="/service/:subPageName" element={<Service />} />
            <Route path="/brand/:subPageName" element={<Brand />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </MockDataDispatchContext.Provider>
      </MockDataContext.Provider>
    </>
  )
}

export default App
