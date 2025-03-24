import './Main.css';
import { Link } from 'react-router-dom';

const Main=()=>{
    return (
        <section className='Main main'>
            <div className='inner_1280'>
                <div className='txt_area'>
                    <h2 className='fs_xlg mb_md'>MINI USED CAR NEXT.</h2>
                    <h3 className='fs_lg mb_lg'>매입부터 판매까지 전 과정을 엄격한 기준에 따라 진행한 <br />MINI 공식 인증 중고차를 만나보실 수 있습니다.</h3>
                    <p className='fs_md NotoSansKR'><Link to={'/used-car/certified'}>인증중고차 한눈에 보기</Link></p>
                </div>
            </div>
        </section>      
    );
}

export default Main;