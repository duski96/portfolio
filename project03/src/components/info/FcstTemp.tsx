import { useWeatherInfoContext } from "../../App";

const FcstTemp=()=>{
    const {weatherInfo}=useWeatherInfoContext();

    return (
        <div>
            {weatherInfo.T1H.map(item=>item)}
        </div>
    );
}

export default FcstTemp;