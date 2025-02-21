import fiveDoorImg from '../../../assets/sub/model_5door.jpg';

const FiveDoor=()=>{
    return (
        <section className="ModelContent">
            <div className="inner_1280">
                <h4 className='mb_sm'>MINI 5-DOOR</h4>
                <h5 className='fs_lg mb_lg'>A practical version of the classic Mini with extra space and enhanced accessibility.</h5>
                <img src={fiveDoorImg} alt="미니 5도어" className='mb_lg' />
                <p className='mb_md'>
                    미니쿠퍼 5도어는 미니의 아이코닉한 디자인을 유지하면서도 실용성을 강화한 모델이다. 기존 3도어 모델과 비교해 휠베이스가 늘어나면서 뒷좌석 공간이 넉넉해졌으며, 2열 승하차가 더욱 편리해졌다. 주행 성능은 미니 특유의 <b>고카트 필링</b>을 유지하면서도 보다 안정적인 승차감을 제공한다. <br />
                    기본적으로 가솔린 엔진이 장착되며, 쿠퍼와 쿠퍼 S 등 다양한 트림이 존재한다. 특히 쿠퍼 S 모델은 터보 엔진을 탑재해 더욱 스포티한 주행이 가능하다.
                </p>
                <p>
                    인테리어는 미니 특유의 원형 디스플레이와 LED 조명을 갖추고 있으며, 최신 모델은 디지털 계기판과 인포테인먼트 시스템이 업그레이드되어 편의성이 높아졌다. 차체가 확장되었음에도 여전히 도심 주행에 적합한 기동성을 갖추고 있으며, 주차도 용이하다. 연비는 효율적이며, 트렁크 공간도 3도어 모델 대비 넓어 실용성이 향상되었다. <br />
                    다만, 여전히 중형 해치백 대비 2열 공간이 넉넉한 편은 아니며, 미니 특유의 단단한 승차감이 호불호가 갈릴 수 있다. 하지만 미니의 개성 있는 디자인과 실용성을 동시에 원하는 운전자들에게 인기가 많다.
                </p>
            </div>
        </section>
    );
}

export default FiveDoor;