import convertibleImg from '../../../assets/sub/model_convertible.jpg';

const Convertible=()=>{
    return (
        <section className="ModelContent">
            <div className="inner_1280">
                <h4 className='mb_sm'>MINI CONVERTIBLE</h4>
                <h5 className='fs_lg mb_lg'>A fun, open-top Mini with an electric soft-top roof for an exciting driving experience.</h5>
                <img src={convertibleImg} alt="미니 컨버터블" className='mb_lg' />
                <p className='mb_md'>
                    미니 컨버터블은 미니 고유의 디자인과 개성을 유지하면서도 오픈탑의 자유로움을 즐길 수 있는 모델이다. 전동식 소프트톱을 탑재해 버튼 하나로 손쉽게 지붕을 열고 닫을 수 있으며, <b>약 18초 만에 완전 개폐</b>가 가능하다. 기본적인 주행 성능은 미니 특유의 <b>고카트 필링</b>을 유지하면서도, 컨버터블 특유의 개방감 덕분에 더욱 특별한 드라이빙 경험을 선사한다. <br />
                    가솔린 엔진이 기본이며, 쿠퍼, 쿠퍼 S, JCW(존 쿠퍼 웍스) 등 다양한 트림이 제공된다. 특히 JCW 모델은 고성능 터보 엔진을 장착해 더욱 강력한 퍼포먼스를 발휘한다.
                </p>
                <p>
                    인테리어는 원형 디스플레이와 감각적인 LED 조명 등 미니 특유의 감성을 유지하면서도, 컨버터블 전용 요소들이 추가되어 차별화를 이룬다. 최신 모델은 디지털 계기판과 업그레이드된 인포테인먼트 시스템을 탑재해 편의성이 향상되었다. <br />
                    차체 강성을 보강했지만, 지붕이 접히는 구조로 인해 <b>트렁크 공간이 3도어 모델보다 좁은 점</b>은 단점으로 꼽힌다. 또한 컨버터블 특성상 차체가 약간 무거워지고, 단단한 승차감이 유지되어 호불호가 갈릴 수 있다. 하지만 감각적인 디자인과 오픈에어 드라이빙의 매력을 동시에 원하는 운전자들에게 꾸준한 인기를 끌고 있다.
                </p>
            </div>
        </section>
    );
}

export default Convertible;