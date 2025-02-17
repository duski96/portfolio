import './SubMain.css';

const SubMain=({title, explanation, background, addClassName})=>{
    return (
        <section className={`Main sub ${addClassName}`}>
            <img src={background} alt='background' />
            <div className='inner_1280'>
                <h2 className='fs_lg mb_sm NotoSansKR'>{title}</h2>
                <h3 className='fs_md NotoSansKR'>{explanation}</h3>
            </div>
        </section>
    );
}

export default SubMain;