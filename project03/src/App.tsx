import './App.css';
import { useState, createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';

// 인덱스 시그니처
// 기상 API 타입 정의
export type LoadedDataType={[key: string]: string}
// key 자체의 type을 string으로 지정해야 문자열 변수로 객체의 key 접근 가능
export type WeatherType={[key: string]: string[]}

// Context 타입 정의
type LoadedDataContextType={
  loadedData: LoadedDataType[];
  setLoadedData: React.Dispatch<React.SetStateAction<LoadedDataType[]>>;
}

type WeatherInfoContextType={
  weatherInfo: WeatherType;
  setWeatherInfo: React.Dispatch<React.SetStateAction<WeatherType>>;
}

// 검색 후 선택 목록과 기상 API를 Context로 만들어 사용
const WeatherInfoContext=createContext<WeatherInfoContextType | null>(null);
const LoadedDataContext=createContext<LoadedDataContextType | null>(null);

// useContext로 호출할 경우 null 타입을 반환할 수 있기 때문에 custom Hook을 만들어 올바른 타입으로 반환
export function useLoadedDataContext(){
  const context=useContext(LoadedDataContext);
  if(!context){
    throw new Error ('이 Context에 문제가 있습니다.');
  }
  return context;
}

export function useWeatherInfoContext(){
  const context=useContext(WeatherInfoContext);
  if(!context){
    throw new Error ('이 Context에 문제가 있습니다.');
  }
  return context;
}

const weatherInfoInit: WeatherType={
  T1H:[],
  RN1:[],
  SKY:[],
  UUU:[],
  VVV:[],
  REH:[],
  PTY:[],
  VEC:[],
  WSD:[],
}

function App() {
  // 기상 API를 저장할 state
  const [loadedData, setLoadedData] = useState<LoadedDataType[]>([]);
  // API 속성 값을 저장할 state
  const [weatherInfo, setWeatherInfo]=useState<WeatherType>(weatherInfoInit);

  return (
    <>
        <LoadedDataContext.Provider value={{loadedData, setLoadedData}}>
          <WeatherInfoContext.Provider value={{weatherInfo, setWeatherInfo}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/info/:id" element={<Info />} />
            </Routes>
          </WeatherInfoContext.Provider>
        </LoadedDataContext.Provider>
    </>
  )
}

export default App