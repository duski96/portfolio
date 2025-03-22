import './UsedCarContent.css';
import Certified from './Certified';
import Loyalty from './Loyalty';
import TempPage from '../TempPage';

const UsedCarContent=({paramsName})=>{
    switch(paramsName){
        case 'certified' : return <Certified />
        case 'loyalty' : return <Loyalty />
        case 'sales' : return <TempPage curPage={'내차 판매 문의'} />
        case 'desired' : return <TempPage curPage={'희망차량 등록 알림'} />
        default : break;
    }
}

export default UsedCarContent;