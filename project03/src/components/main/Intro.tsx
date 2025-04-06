import './Intro.css';

const Intro=()=>{
    const time=new Date().getHours();
    const isNight=time<6 || time>=18;

    return (
        <section className={`Intro isNight_${isNight}`}>
            <div className='inner_1000'>
                <div className='box'>
                    <h2>바다의 오늘</h2>
                    <h3>해수욕장 실시간 기상 정보</h3>
                    <p>
                        지금 바다는 어떤 모습일까요? <br />
                        파도, 바람, 기온은 물론 해수욕장을 떠나는 날씨까지 실시간 정보로 확인해보세요. <br />
                        신뢰할 수 있는 최신 예보를 통해 남은 시간 동안의 바다 컨디션도 미리 살펴볼 수 있습니다. <br />
                        오늘 해수욕장 나들이를 더 알차고 안전하게 준비해보세요!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Intro;