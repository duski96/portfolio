import './TempPage.css';

const TempPage=({paramsName})=>{
    return (
        <section className="TempPage">
            <div className='inner_1280'>
                <div className='temp_area'>
                    <p className="fs_lg">{paramsName} 페이지는 <br />준비중입니다.</p>
                </div>
            </div>
        </section>
    );
}

export default TempPage;