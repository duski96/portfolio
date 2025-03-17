import roadsterImg from '../../../assets/sub/model_roadster.jpg';

const Roadster=()=>{
    return (
        <section className="ModelContent">
            <div className="inner_1280">
                <h4 className='mb_sm'>MINI ROADSTER</h4>
                <h5 className='fs_lg mb_lg'>A 2-seater open-top Mini with a manual soft-top roof and go-kart-like driving dynamics.</h5>
                <img src={roadsterImg} alt="미니 로드스터" className='mb_lg' />
                <p className='mb_md'>
                    미니 로드스터는 <b>미니 쿠페를 기반으로 한 2인승 오픈톱 스포츠카</b>로, 경쾌한 주행 감각과 개방감을 동시에 즐길 수 있는 모델이다. 전동식이 아닌 <b>수동 소프트톱 루프</b>를 장착해 가볍고 심플한 구조를 유지했으며, 기존 컨버터블 모델보다 더욱 낮고 날렵한 디자인이 특징이다. <br />
                    미니 특유의 <b>고카트 필링</b>을 유지하면서도, 낮아진 무게중심과 단단한 서스펜션 덕분에 코너링 성능이 뛰어나다. 엔진 라인업은 쿠퍼, 쿠퍼 S, JCW(존 쿠퍼 웍스) 등으로 구성되며, 특히 JCW 모델은 강력한 터보 엔진을 탑재해 스포티한 드라이빙을 제공한다.
                </p>
                <p>
                    인테리어는 미니 특유의 원형 디스플레이와 감각적인 디자인 요소를 유지하면서도, <b>2인승 구조로 실내가 더욱 컴팩트</b>하게 설계되었다. 루프를 접었을 때도 비교적 넉넉한 트렁크 공간을 제공해 실용성을 어느 정도 확보했다. 하지만 2인승이라는 점과 소프트톱 특유의 방음 한계, 다소 단단한 승차감은 호불호가 갈릴 수 있다. <br />
                    2012년 출시되어 독창적인 스타일과 운전의 즐거움을 제공했지만, 한정된 시장성과 수요 부족으로 인해 단종되었다. 그러나 여전히 개성 있는 오픈톱 스포츠카를 원하는 미니 팬들에게 매력적인 모델로 남아 있다.
                </p>
            </div>
        </section>
    );
}

export default Roadster;