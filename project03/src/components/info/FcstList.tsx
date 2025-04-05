import { useWeatherInfoContext } from "../../App";
import { getPTY, getSKY } from '../../util/getAttrValue';
import { getWeatherIcon } from '../../util/getWeatherIcon'

type getTimeType=(value01: number)=>string;

const FcstList=()=>{
    const {weatherInfo}=useWeatherInfoContext();
    const currentHour=new Date().getHours();

    const getTime: getTimeType=(value)=>{
        switch(value){
            case 0 : return '지금';
            case 1 :
            case 2 :
            case 3 :
            case 4 :
            case 5 : {
                if(currentHour + value < 12){
                    return `오전 ${currentHour + value}시`;
                }
                else if(currentHour + value >= 24){
                    return `오전 ${currentHour + value - 24}시`;
                }
                else{
                    return `오후 ${currentHour + value -12}시`;
                }
            }
            default : return 'Invalid Time'
        }
    }

    return (
        <ul className='fcst_list fs_md'>
            {weatherInfo.T1H.map((item, idx)=>(
                <li key={idx}>
                    <p>{getTime(idx)}</p>
                    <div className='weather'>
                        <img src={getWeatherIcon(weatherInfo.PTY[idx], weatherInfo.SKY[idx], currentHour+idx)} alt="날씨 아이콘" />
                        <ul>
                            <li className='fs_lg'>{item}℃</li>
                            <li className='fs_md'>습도 {weatherInfo.REH[idx]}%</li>
                            <li className='fs_md'>{getPTY(weatherInfo.PTY[idx])} | {getSKY(weatherInfo.SKY[idx])}</li>
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default FcstList;