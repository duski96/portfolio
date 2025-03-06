import './Redirect.css';
import { Link } from 'react-router-dom';

const Redirect=({message})=>{
    return (
        <section className='Redirect'>
            <h2 className='fs_lg NotoSansKR'>{message}</h2>
            <div className='button_area'>
                <button type="button" className='back'>
                    <Link to={-1}>뒤로가기</Link>
                </button>
                <button type="button" className='home'>
                    <Link to={'/'}>홈으로 가기</Link>
                </button>
            </div>
        </section>
    );
}

export default Redirect;