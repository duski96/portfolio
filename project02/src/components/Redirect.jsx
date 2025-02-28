import './Redirect.css';
import { Link } from 'react-router-dom';

const Redirect=({message})=>{
    return (
        <section className='Redirect'>
            <h2 className='fs_lg NotoSansKR'>{message}</h2>
            <div className='button_area'>
                <button type="button">
                    <Link to={'/'}>홈으로</Link>
                </button>
                <button type="button">
                    <Link to={-1}>뒤로가기</Link>
                </button>
            </div>
        </section>
    );
}

export default Redirect;