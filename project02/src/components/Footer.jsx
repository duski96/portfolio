import './Footer.css';
import logo from '../assets/logo.svg';

const Footer=()=>{
    return (
        <footer className='Footer'>
            <div className='inner_1280'>
                <h1 className='logo'><img src={logo}/></h1>
                <p className='fs_sm'>이 페이지는 포트폴리오 목적으로 제작되었습니다.</p>
            </div>
        </footer>
    );
}

export default Footer;