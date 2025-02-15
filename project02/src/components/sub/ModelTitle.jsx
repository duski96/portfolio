import { useContext } from 'react';
import { ParamsName } from '../../pages/Model';

const ModelTitle=()=>{
    let paramsName=useContext(ParamsName);

    switch(paramsName){
        case 'hatch' : 
            return (
            <>
                <h4 className='mb_sm'>MINI HATCH</h4>
                <h5 className='fs_lg mb_lg'>A compact hatchback with go-kart handling and a stylish, iconic design.</h5>
            </>
            );
        case '5door' :
            return (
            <>
                <h4 className='mb_sm'>MINI 5-DOOR</h4>
                <h5 className='fs_lg mb_lg'>A practical version of the classic Mini with extra space and enhanced accessibility.</h5>
            </>
            );
        case 'convertible' :
            return (
            <>
                <h4 className='mb_sm'>MINI CONVERTIBLE</h4>
                <h5 className='fs_lg mb_lg'>A fun, open-top Mini with an electric soft-top roof for an exciting driving experience.</h5>
            </>
            );
        case 'clubman' :
            return (
            <>
                <h4 className='mb_sm'>MINI CLUBMAN</h4>
                <h5 className='fs_lg mb_lg'>A spacious Mini with a unique split rear door and a refined, premium interior.</h5>
            </>
            );
        case 'countryman' :
            return (
            <>
                <h4 className='mb_sm'>MINI COUNTRYMAN</h4>
                <h5 className='fs_lg mb_lg'>The largest Mini, offering SUV-like practicality with available ALL4 all-wheel drive.</h5>
            </>
            );
        default : break;
    }
}

export default ModelTitle;