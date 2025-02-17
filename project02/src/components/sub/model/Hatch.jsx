import HatchImg from '../../../assets/sub/model_hatch.jpg';

const Hatch=()=>{
    return (
        <section className="ModelContent">
            <div className="inner_1280">
                <h4 className='mb_sm'>MINI HATCH</h4>
                <h5 className='fs_lg mb_lg'>A compact hatchback with go-kart handling and a stylish, iconic design.</h5>
                <img src={HatchImg} alt="미니 해치" className='mb_lg' />
                <p className='mb_md'>
                    미니쿠퍼 3도어는 미니 브랜드의 대표적인 소형 해치백 모델로, 클래식한 디자인과 현대적인 감각이 조화를 이룬다. 작은 차체에도 불구하고 실내 공간이 효율적으로 설계되어 있으며, 운전의 재미를 극대화한 컴팩트한 구조가 특징이다. 특히 <b>고카트 필링</b>이라 불리는 경쾌한 핸들링과 민첩한 주행 성능을 제공하여 도심 주행에 최적화되어 있다. <br />
                    기본적으로 가솔린 엔진이 장착되며, 쿠퍼, 쿠퍼 S, JCW(존 쿠퍼 웍스) 등 다양한 트림이 존재한다. 이 중 쿠퍼 S와 JCW 모델은 터보 엔진을 탑재해 더 강력한 성능과 스포티한 주행감을 제공한다.
                </p>
                <p>
                    인테리어는 원형 디스플레이와 감각적인 LED 조명 등으로 개성 있고 미래지향적인 디자인을 갖추고 있다. 최신 모델은 디지털 계기판과 인포테인먼트 시스템이 업그레이드되어 편의성이 높아졌다. 차체가 작아 <b>주차가 쉽고 기동성이 뛰어나</b>, 좁은 골목길이나 도심 운전에 유리하다. <br />
                    연비는 효율적이지만, 작은 트렁크 공간과 2열 좌석의 협소함은 단점으로 꼽힌다. 그러나 귀여운 외관과 강렬한 주행 성능을 동시에 원하는 운전자들에게 꾸준한 사랑을 받고 있다.
                </p>
            </div>
        </section>
    );
}

export default Hatch;