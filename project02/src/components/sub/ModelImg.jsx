import { useContext } from 'react';
import { ParamsName } from '../../pages/Model';

import HatchImg from '../../assets/sub/model_hatch.jpg';
import FiveDoorImg from '../../assets/sub/model_5door.jpg';
import ConvertibleImg from '../../assets/sub/model_convertible.jpg';
import ClubmanImg from '../../assets/sub/model_clubman.jpg';
import CountrymanImg from '../../assets/sub/model_countryman.jpg';

const ModelImg=()=>{
    let paramsName=useContext(ParamsName);
    let imgSrc;

    switch(paramsName){
        case 'hatch' : imgSrc=HatchImg; break;
        case '5door' : imgSrc=FiveDoorImg; break;
        case 'convertible' : imgSrc=ConvertibleImg; break;
        case 'clubman' : imgSrc=ClubmanImg; break;
        case 'countryman' : imgSrc=CountrymanImg; break;
        default : break;
    }

    return <img src={imgSrc} alt={`${paramsName}`} className='mb_lg' />
}

export default ModelImg;