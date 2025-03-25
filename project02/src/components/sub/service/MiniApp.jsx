import MiniAppImg01 from '../../../assets/sub/service_app_img01.jpg';

const MiniApp=()=>{
    return (
        <section className='ServiceContent MiniApp NotoSansKR'>
            <div className='inner_1280'>
                <article>
                    <h4 className='fs_lg mb_xsm'><b>미니 App</b></h4>
                    <h4 className='fs_md mb_lg'><b>당신의 스마트 드라이빙 동반자</b></h4>
                    <p className='mb_md'>
                        <b>
                            당신의 드라이빙 경험을 한층 더 스마트하게 만들어 줄 "미니 App"입니다. <br />
                            미니 App은 미니 차량 소유자를 위한 전용 앱으로, 차량과 스마트폰을 연결해 다양한 기능을 손쉽고 효율적으로 사용할 수 있게 도와줍니다. <br />
                            차량의 실시간 상태 모니터링, 최적의 내비게이션, 원격 제어 등의 기능을 통해 운전의 편의성과 안전성을 극대화합니다.
                        </b>
                    </p>
                    <img src={MiniAppImg01} alt='앱 이미지' />
                </article>
                <article>
                    <h5 className='fs_md mb_md'><b>주요 기능</b></h5>
                    <ol>
                        <li>
                            <b>차량 상태 모니터링</b>
                            <p className='bullet'>
                                미니 App은 차량의 상태를 종합적으로 분석하여 엔진 성능, 오일 수명, 배터리 상태 등을 실시간으로 체크해줍니다. 이로 인해 차량 관리가 더욱 용이해집니다.
                            </p>
                        </li>
                        <li>
                            <b>무선 소프트웨어 업데이트</b>
                            <p className='bullet'>
                                최신 소프트웨어가 필요할 때, 미니 App을 통해 간편하게 업데이트를 진행할 수 있습니다. 이를 통해 항상 최신 기술을 차량에서 경험할 수 있습니다.
                            </p>
                        </li>
                        <li>
                            <b>개인화된 드라이빙 경험</b>
                            <p className='bullet'>
                                운전 스타일 분석을 통해 개인화된 운전 팁과 개선 사항을 제안합니다. 이를 통해 더 효율적이고 안전한 운전을 할 수 있습니다.
                            </p>
                        </li>
                        <li>
                            <b>주차 지원 서비스</b>
                            <p className='bullet'>
                                주차 위치 기록 기능을 통해 차량을 어디에 주차했는지 쉽게 기억할 수 있으며, 근처 주차장 정보를 실시간으로 확인할 수 있습니다.
                            </p>
                        </li>
                        <li>
                            <b>미니 커뮤니티 연결</b>
                            <p className='bullet'>
                                다른 미니 소유자들과 커뮤니케이션할 수 있는 커뮤니티 기능을 제공합니다. 이벤트 정보, 팁 공유, 다양한 커뮤니티 활동에 참여할 수 있습니다.
                            </p>
                        </li>
                    </ol>
                </article>
                <article>
                    <p>
                        미니 App은 당신의 자동차 생활을 더욱 풍요롭고 편리하게 만들어 줍니다. 지금 바로 미니 App을 다운로드하여 스마트한 드라이빙을 경험해 보세요. 더 나은 운전 생활이 당신을 기다리고 있습니다.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default MiniApp;