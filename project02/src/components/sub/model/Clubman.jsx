import clubmanImg from '../../../assets/sub/model_clubman.jpg';

const Clubman=()=>{
    return (
        <section className="ModelContent">
            <div className="inner_1280">
                <h4 className='mb_sm'>MINI CLUBMAN</h4>
                <h5 className='fs_lg mb_lg'>A spacious Mini with a unique split rear door and a refined, premium interior.</h5>
                <img src={clubmanImg} alt="미니 클럽맨" className='mb_lg' />
                <p className='mb_md'>
                    미니 클럽맨은 미니의 개성을 유지하면서도 보다 넉넉한 공간과 실용성을 강조한 모델이다. 기존 5도어 모델보다 차체가 길고 휠베이스가 확장되어 <b>더욱 여유로운 2열 공간과 넓은 트렁크 용량</b>을 제공한다. <br />
                    주행 성능은 미니 특유의 <b>고카트 필링</b>을 유지하면서도, 보다 안정적이고 편안한 승차감을 갖춘 것이 특징이다. <br />
                    기본적으로 가솔린 엔진이 장착되며, 쿠퍼, 쿠퍼 S, JCW(존 쿠퍼 웍스) 등 다양한 트림이 존재한다. 특히 JCW 모델은 고성능 터보 엔진과 사륜구동 시스템(ALL4)이 적용되어 강력한 퍼포먼스를 발휘한다.
                </p>
                <p>
                    클럽맨의 가장 큰 특징은 <b>스플릿 도어 방식의 트렁크</b>로, 일반적인 해치백과 달리 양쪽으로 열리는 독특한 후면 도어 디자인을 갖추고 있다. <br />
                    인테리어는 원형 디스플레이와 LED 조명 등 미니 특유의 감각적인 요소를 유지하면서도, 넓어진 실내 공간과 최신 인포테인먼트 시스템이 적용되어 편의성이 더욱 향상되었다. <br />
                    차체가 확장되면서 주행 안정성이 높아졌지만, 상대적으로 미니 특유의 민첩함은 3도어나 5도어 모델에 비해 약간 줄어들었다. 그러나 개성 있는 디자인과 실용성을 동시에 원하는 운전자들에게 매력적인 선택지로 자리 잡고 있다.
                </p>
            </div>
        </section>
    );
}

export default Clubman;