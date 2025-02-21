import pacemanImg from '../../../assets/sub/model_paceman.jpg';

const Paceman=()=>{
    return (
        <section className="ModelContent">
            <div className="inner_1280">
                <h4 className='mb_sm'>MINI PACEMAN</h4>
                <h5 className='fs_lg mb_lg'>A 3-door coupe-style SUV based on the Countryman, offering sporty design and ALL4 AWD.</h5>
                <img src={pacemanImg} alt="미니 페이스맨" className='mb_lg' />
                <p className='mb_md'>
                    미니 페이스맨은 <b>미니 컨트리맨을 기반으로 한 3도어 쿠페형 SUV</b>로, 스포티한 디자인과 실용성을 조화롭게 결합한 모델이다. 기존 컨트리맨보다 루프라인이 낮고 더욱 날렵한 실루엣을 갖추고 있어, 쿠페 스타일의 감성을 강조했다. 미니 특유의 <b>고카트 필링</b>을 유지하면서도 SUV 특유의 높은 시트 포지션과 넓은 공간을 제공해 안정적인 주행감을 갖추었다. <br />
                    엔진 라인업은 쿠퍼, 쿠퍼 S, JCW(존 쿠퍼 웍스) 등으로 구성되며, 특히 JCW 모델은 터보 엔진과 <b>ALL4 사륜구동 시스템</b>이 적용되어 더욱 강력한 퍼포먼스를 자랑한다.
                </p>
                <p>
                    인테리어는 미니 특유의 원형 디스플레이와 LED 조명을 갖추었으며, 2열 좌석은 <b>독립형 시트 구조</b>로 설계되어 차별화를 두었다. 3도어 구조로 인해 2열 접근성이 다소 제한적이지만, 트렁크 공간은 충분해 실용성도 고려되었다. <br />
                    SUV 특성과 쿠페 디자인을 결합한 독창적인 모델이었으나, 시장에서의 수요 부족으로 인해 단종되었다. 하지만 미니 컨트리맨보다 더 스포티한 디자인과 차별화된 스타일을 원하는 운전자들에게 여전히 매력적인 모델로 평가받고 있다.
                </p>
            </div>
        </section>
    );
}

export default Paceman;