import './Background.css';
import backgroundDay from '../assets/background_day.mp4';
import backgroundNight from '../assets/background_night.mp4';

const Background=()=>{
    const time=new Date().getHours();

    return (
        <div className='Background'>
            <video className='vid' autoPlay={true} loop muted playsInline>
                <source src={time>=6 && time<18 ? backgroundDay : backgroundNight} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Background;