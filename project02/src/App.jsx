import { useState, createContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Interest from './pages/Interest';

const mockData=[
  {id:0, series:'3door', year:2017, price:3000, mileage:17000, fuel:'disel', spot:'spot01', nextPlus:false},
  {id:1, series:'3door', year:2020, price:4000, mileage:170000, fuel:'gasoline', spot:'spot02', nextPlus:false},
  {id:2, series:'5door', year:2019, price:2700, mileage:90000, fuel:'electric', spot:'spot03', nextPlus:false},
  {id:3, series:'convertible', year:2024, price:7000, mileage:7000, fuel:'hev', spot:'spot04', nextPlus:false},
  {id:4, series:'clubman', year:2023, price:5000, mileage:5000, fuel:'disel', spot:'spot05', nextPlus:false},
  {id:5, series:'countryman', year:2022, price:6400, mileage:3000, fuel:'disel', spot:'spot01', nextPlus:false},
  {id:6, series:'coupe', year:2020, price:5000, mileage:37000, fuel:'gasoline', spot:'spot01', nextPlus:true},
  {id:7, series:'paceman', year:2018, price:2000, mileage:200000, fuel:'electric', spot:'spot02', nextPlus:false},
  {id:8, series:'roadster', year:2023, price:6000, mileage:44000, fuel:'hev', spot:'spot03', nextPlus:false},
  {id:9, series:'3door', year:2019, price:4200, mileage:89000, fuel:'hev', spot:'spot04', nextPlus:false},
  {id:10, series:'3door', year:2021, price:5600, mileage:74000, fuel:'lpg', spot:'spot05', nextPlus:false},
  {id:11, series:'5door', year:2022, price:7000, mileage:1500, fuel:'gasoline', spot:'spot01', nextPlus:false},
  {id:12, series:'convertible', year:2012, price:1000, mileage:300000, fuel:'gasoline', spot:'spot02', nextPlus:false},
  {id:13, series:'clubman', year:2017, price:2200, mileage:38000, fuel:'disel', spot:'spot03', nextPlus:false},
  {id:14, series:'countryman', year:2021, price:4900, mileage:4000, fuel:'hev', spot:'spot04', nextPlus:true},
  {id:15, series:'coupe', year:2010, price:500, mileage:187000, fuel:'gasoline', spot:'spot01', nextPlus:true},
  {id:16, series:'paceman', year:2020, price:6600, mileage:700, fuel:'disel', spot:'spot05', nextPlus:false},
  {id:17, series:'roadster', year:2021, price:5700, mileage:27000, fuel:'electric', spot:'spot01', nextPlus:false},
  {id:18, series:'coupe', year:2014, price:3300, mileage:1000, fuel:'hev', spot:'spot02', nextPlus:true},
  {id:19, series:'paceman', year:2005, price:1000, mileage:30000, fuel:'gasoline', spot:'spot03', nextPlus:false},
  {id:20, series:'5door', year:2011, price:1700, mileage:90900, fuel:'disel', spot:'spot01', nextPlus:false},
];

export const MockDataContext=createContext();
export const MockDataDispatchContext=createContext();

function App() {
  const storedInterestId=JSON.parse(localStorage.getItem('interestId'));
  
  const [interestId, setInterestId]=useState(storedInterestId ? storedInterestId : []);

  const getInterestId=(targetId)=>{
    interestId.includes(targetId) ? setInterestId(interestId.filter((item)=>item!==targetId)) : setInterestId([...interestId, targetId]);
  }

  const deleteInterestId=(targetId)=>{
    setInterestId(interestId.filter((item)=>item!==targetId));
  }

  localStorage.setItem('interestId',JSON.stringify(interestId));

  return (
    <>
      <MockDataContext.Provider value={{mockData, interestId}}>
        <MockDataDispatchContext.Provider value={{getInterestId, deleteInterestId}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/interest" element={<Interest />} />
          </Routes>
        </MockDataDispatchContext.Provider>
      </MockDataContext.Provider>
    </>
  )
}

export default App
