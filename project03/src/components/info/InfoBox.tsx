import CurrentWeather from './CurrentWeather';
import UpcommingWeather from "./UpcommingWeather";
import Map from './Map';

const InfoBox=()=>{
    // 낮, 밤에 따라 css를 다르게 적용
    const time=new Date().getHours();
    const isNight=time<6 || time>=18;

    return (
        <section className={`InfoBox isNight_${isNight}`}>
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