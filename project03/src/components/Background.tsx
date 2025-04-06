import './Background.css';
import backgroundDay from '../assets/background_day.mp4';
import backgroundNight from '../assets/background_night.mp4';

const Background=()=>{
    const bgTime=new Date().getHours();

    if(bgTime>=6 && bgTime<18){
        <div className='Background'>
            <video className='vid' autoPlay={true} loop muted playsInline>
                <source src={backgroundDay} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    }

    return (
        <div className='Background'>
            <video className='vid' autoPlay={true} loop muted playsInline>
                <source src={backgroundNight} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Background;