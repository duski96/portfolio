import weatherIcon01Day from '../assets/weather_icon01-1.png';
import weatherIcon01Night from '../assets/weather_icon01-2.png';
import weatherIcon02 from '../assets/weather_icon02.png';
import weatherIcon03Day from '../assets/weather_icon03-1.png';
import weatherIcon03Night from '../assets/weather_icon03-2.png';
import weatherIcon04 from '../assets/weather_icon04.png';
import weatherIcon05 from '../assets/weather_icon05.png';
import weatherIcon06 from '../assets/weather_icon06.png';
import weatherIcon07 from '../assets/weather_icon07.png';
import weatherIcon08 from '../assets/weather_icon08.png';
import weatherIcon09 from '../assets/weather_icon09.png';

type getWeatherIconType=(value01: string, value02: string, value03: number)=>string;

export const getWeatherIcon: getWeatherIconType=(PTYCode, SKYCode, hour)=>{
    switch(PTYCode){
        case '0' : {
            if(SKYCode==='1'){
                if(hour>=6 && hour<18){
                    return weatherIcon01Day;
                }
                else{
                    return weatherIcon01Night;
                }
            }
            else if(SKYCode==='3'){
                return weatherIcon02;
            }
            else if(SKYCode==='4'){
                if(hour>=6 && hour<18){
                    return weatherIcon03Day;
                }
                else{
                    return weatherIcon03Night;
                }
            }
            else{
                return 'Icon Loading Failed'
            }
        } break;
        case '1' : return weatherIcon04;
        case '2' : return weatherIcon05;
        case '3' : return weatherIcon06;
        case '5' : return weatherIcon07;
        case '6' : return weatherIcon08;
        case '7' : return weatherIcon09;
        default : return 'Icon Loading Failed';
    }
}