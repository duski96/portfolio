import './ModelContent.css';

import ThreeDoor from './ThreeDoor';
import FiveDoor from './FiveDoor';
import Convertible from './Convertible';
import Clubman from './Clubman';
import Countryman from './Countryman';
import Coupe from './Coupe';
import Paceman from './Paceman';
import Roadster from './Roadster';

const ModelContent=({paramsName})=>{
    switch(paramsName){
        case '3door' : return <ThreeDoor />
        case '5door' : return <FiveDoor />
        case 'convertible' : return <Convertible />
        case 'clubman' : return <Clubman />
        case 'countryman' : return <Countryman />
        case 'coupe' : return <Coupe />
        case 'paceman' : return <Paceman />
        case 'roadster' : return <Roadster />
        default : break;
    }
}

export default ModelContent;