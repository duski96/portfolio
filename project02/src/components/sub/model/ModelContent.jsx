import './ModelContent.css';

import Hatch from './Hatch';
import FiveDoor from './FiveDoor';
import Convertible from './Convertible';
import Clubman from './Clubman';
import Countryman from './Countryman';

const ModelContent=({paramsName})=>{
    switch(paramsName){
        case 'hatch' : return <Hatch />
        case '5door' : return <FiveDoor />
        case 'convertible' : return <Convertible />
        case 'clubman' : return <Clubman />
        case 'countryman' : return <Countryman />
        default : break;
    }
}

export default ModelContent;