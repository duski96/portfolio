import coupeImg from '../../../assets/sub/model_coupe.jpg';

const Coupe=()=>{
    return (
        <section className="ModelContent">
            <div className="inner_1280">
                <h4 className='mb_sm'>MINI COUPE</h4>
                <h5 className='fs_lg mb_lg'>A sporty 2-door Mini with a low roofline and agile handling for a dynamic driving experience.</h5>
                <img src={coupeImg} alt="미니 쿠페" className='mb_lg' />
                <p className='mb_md'>
                    미니 쿠페는 미니 브랜드 최초의 <b>2도어 스포츠 쿠페 모델</b>로, 낮은 루프라인과 역동적인 디자인이 특징이다. 기존 미니 해치백 모델보다 더욱 날렵하고 공격적인 스타일을 갖추었으며, 공기역학을 고려한 리어 스포일러가 기본 장착되어 있다. <br />
                    미니 특유의 <b>고카트 필링</b>을 유지하면서도, 보다 단단한 서스펜션과 낮아진 무게중심 덕분에 주행 성능이 더욱 향상되었다. 엔진 라인업은 쿠퍼, 쿠퍼 S, JCW(존 쿠퍼 웍스) 등으로 구성되며, 특히 JCW 모델은 강력한 터보 엔진을 탑재해 스포티한 주행이 가능하다.
                </p>
                <p>
                    인테리어는 미니 특유의 원형 디스플레이와 감각적인 디자인 요소를 유지하면서도, 쿠페 모델답게 <b>2인승 구조로 설계</b>되어 실내 공간이 더욱 컴팩트하다. 루프라인이 낮아 전고가 다소 제한적이지만, 트렁크 공간은 기존 3도어 모델보다 넉넉한 편이다. 주행 성능과 디자인에서는 높은 점수를 받지만, 2인승이라는 점과 상대적으로 단단한 승차감이 호불호가 갈릴 수 있다. <br />
                    2011년 출시되어 독창적인 스타일과 운전의 즐거움을 제공했지만, 한정된 시장성과 실용성 문제로 인해 단종되었다. 하지만 여전히 개성 있는 스포츠 쿠페를 원하는 미니 팬들에게 매력적인 모델로 남아 있다.
                </p>
            </div>
        </section>
    );
}

export default Coupe;