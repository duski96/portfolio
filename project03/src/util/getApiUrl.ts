// 숫자를 파라미터로 받는 함수 타입 지정
type getApiUrlType=(value: number)=>string;

// api url에 사용할 변수 생성
const year=new Date().getFullYear().toString();
const month=`0${new Date().getMonth()+1}`.slice(-2);
const date=`0${new Date().getDate()}`.slice(-2);
const baseDate=`${year}${month}${date}`;

// api의 base_time에 여유를 두기 위해 1시간 빼기
// 단 0시는 그대로 반영
const hour=`0${new Date().getHours()-1 < 0 ? 0 : new Date().getHours()-1}`.slice(-2);
const baseTime=`${hour}00`;

// param은 url의 파라미터를 받아와야 하므로 따로 전달받음
// 초단기예보 api
export const getUltraSrtFcstApiUrl: getApiUrlType=(param)=>{
    const apiUrl=`https://apis.data.go.kr/1360000/BeachInfoservice/getUltraSrtFcstBeach?serviceKey=tSschjwEmaSA4wuIPOHxP00%2B0IJG7SAQ9pw4W9FPOFH79MKUK0hGrrp0byPhCafekK4dyrKqLYnZKtVKUnpbuA%3D%3D&numOfRows=60&pageNo=1&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&beach_num=${param}`;

    return apiUrl;
}

// 파고, 수온 조회 api에 사용할 변수 생성
const minute=`0${new Date().getMinutes()}`.slice(-2);
const searchTime=`${year}${month}${date}${hour}${minute}`

// 파고 조회 api
export const getWhBuoyApiUrl: getApiUrlType=(param)=>{
    const apiUrl=`https://apis.data.go.kr/1360000/BeachInfoservice/getWhBuoyBeach?serviceKey=tSschjwEmaSA4wuIPOHxP00%2B0IJG7SAQ9pw4W9FPOFH79MKUK0hGrrp0byPhCafekK4dyrKqLYnZKtVKUnpbuA%3D%3D&numOfRows=1&pageNo=1&dataType=JSON&beach_num=${param}&searchTime=${searchTime}`;

    return apiUrl;
}

// 수온 조회 api
export const getTwBuoyApiUrl: getApiUrlType=(param)=>{
    const apiUrl=`https://apis.data.go.kr/1360000/BeachInfoservice/getTwBuoyBeach?serviceKey=tSschjwEmaSA4wuIPOHxP00%2B0IJG7SAQ9pw4W9FPOFH79MKUK0hGrrp0byPhCafekK4dyrKqLYnZKtVKUnpbuA%3D%3D&numOfRows=1&pageNo=1&dataType=JSON&beach_num=${param}&searchTime=${searchTime}`;

    return apiUrl;
}