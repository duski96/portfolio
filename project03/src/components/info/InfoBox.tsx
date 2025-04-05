import CurrentWeather from './CurrentWeather';
import UpcommingWeather from "./UpcommingWeather";
import Map from './Map';

const InfoBox=()=>{
    return (
        <section className='InfoBox'>
            <div className='inner_1000'>
                <div className='func_box'>
                    <CurrentWeather />
                    <UpcommingWeather />
                    <Map />
                </div>
            </div>
        </section>
    );
}

export default InfoBox;