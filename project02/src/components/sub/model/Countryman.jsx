import CountrymanImg from '../../../assets/sub/model_countryman.jpg';

const Countryman=()=>{
    return (
        <section className="ModelContent">
            <div className="inner_1280">
                <h4 className='mb_sm'>MINI COUNTRYMAN</h4>
                <h5 className='fs_lg mb_lg'>The largest Mini, offering SUV-like practicality with available ALL4 all-wheel drive.</h5>
                <img src={CountrymanImg} alt="미니 컨트리맨" className='mb_lg' />
                <p className='mb_md'>
                    미니 컨트리맨은 미니 라인업 중 가장 크고 실용성이 뛰어난 모델로, <b>소형 SUV</b> 콘셉트로 설계된 것이 특징이다. 기존 미니 모델들보다 차체가 크고 휠베이스가 길어 <b>넉넉한 2열 공간과 더욱 넓은 트렁크 용량</b>을 제공한다. <br />
                    주행 성능은 미니 특유의 <b>고카트 필링</b>을 유지하면서도 SUV다운 안정감과 승차감을 갖췄다. 기본적으로 가솔린 엔진이 탑재되며, 쿠퍼, 쿠퍼 S, JCW(존 쿠퍼 웍스) 등의 다양한 트림이 존재한다. 특히 <b>ALL4 사륜구동 옵션</b>이 제공되어 다양한 도로 환경에서도 뛰어난 주행 성능을 발휘한다.
                </p>
                <p>
                    인테리어는 원형 디스플레이와 LED 조명 등 미니의 감각적인 요소를 유지하면서도, SUV다운 여유로운 공간과 최신 인포테인먼트 시스템이 적용되었다. 차체가 커지면서 안정적인 주행이 가능하지만, 기존 미니 모델보다 무게가 증가해 약간 둔탁한 느낌이 있을 수 있다. <br />
                    하지만 높은 시트 포지션과 넓어진 실내 덕분에 <b>패밀리카로도 적합한 모델</b>로 자리 잡았다. 미니 특유의 개성과 디자인을 유지하면서도 실용성을 원하는 운전자들에게 꾸준히 사랑받고 있다.
                </p>
            </div>
        </section>
    );
}

export default Countryman;