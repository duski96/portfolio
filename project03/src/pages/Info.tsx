import Background from '../components/Background';
import CurrentWeather from '../components/info/CurrentWeather';
import UpcommingWeather from '../components/info/UpcommingWeather';

const Info=()=>{
    return (
        <>
            <Background />
            <CurrentWeather />
            <UpcommingWeather />
        </>
    );
}

export default Info;