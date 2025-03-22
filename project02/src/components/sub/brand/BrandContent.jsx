import './BrandContent.css';
import News from './News.jsx';
import Inside from './Inside.jsx';
import Lifestyle from './Lifestyle.jsx';
import TempPage from '../TempPage.jsx';

const BrandContent=({paramsName})=>{
    switch(paramsName){
        case 'news' : return <TempPage curPage={'NEWS'} />
        case 'inside' : return <TempPage curPage={'INSIDE MINI'} />
        case 'lifestyle' : return <Lifestyle />
        default : break;
    }
}

export default BrandContent;