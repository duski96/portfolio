import './ServiceContent.css';
import Connected from './Connected';
import MiniApp from './MiniApp';
import Parts from './Parts';
import Accessories from './Accessories';

const ServiceContent=({paramsName})=>{
    switch(paramsName){
        case 'connected' : return <Connected />
        case 'app' : return <MiniApp />
        case 'parts' : return <Parts />
        case 'accessories' : return <Accessories />
        default : break;
    }
}

export default ServiceContent;