import './SubMain.css';
import subMainBg from './../../assets/sub/interest_main_img01.jpg';

const SubMain=({title, explanation})=>{
    return (
        <section className='Main sub'>
            <img src={subMainBg} alt='background' />
            <div className='inner_1280'>
                <h2 className='fs_lg mb_sm NotoSansKR'>{title}</h2>
                <h3 className='fs_md NotoSansKR'>{explanation}</h3>
            </div>
        </section>
    );
}

export default SubMain;