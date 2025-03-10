import './BrandContent.css';
import News from './News.jsx';
import Inside from './Inside.jsx';
import Lifestyle from './Lifestyle.jsx';

const BrandContent=({paramsName})=>{
    switch(paramsName){
        case 'news' : return <News />
        case 'inside' : return <Inside />
        case 'lifestyle' : return <Lifestyle />
        default : break;
    }
}

export default BrandContent;