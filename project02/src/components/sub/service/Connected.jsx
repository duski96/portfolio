import { useEffect } from 'react';
import ConnectedImg01 from '../../../assets/sub/service_connected_img01.jpg'
import ConnectedImg02 from '../../../assets/sub/service_connected_img02.jpg'
import { imgArrange } from '../../../util/img-arrange';

const Connected=()=>{
    useEffect(()=>{
        imgArrange();
    });
    
    return (
        <section className='Service Connected NotoSansKR'>
            <div className='inner_1280'>
                <article>
                    <h4 className='fs_lg mb_xsm'><b>미니 커넥티드</b></h4>
                    <h4 className='fs_md mb_lg'><b>스마트한 차량 연동 서비스</b></h4>
                    <p className='mb_md'>
                        <b>
                            스마트한 차량 연동 서비스, "미니 커넥티드"에 대해 소개해 드리겠습니다. <br />
                            미니 커넥티드는 차량과 스마트폰, 그리고 클라우드를 하나로 연결하여 보다 편리하고 안전한 운전을 가능하게 하는 혁신적인 서비스입니다.
                        </b>
                    </p>
                    <div className='img_arrange'>
                        <img src={ConnectedImg01} alt="앱 실행 이미지" />
                        <img src={ConnectedImg02} alt="센터페시아 이미지" />
                    </div>
                </article>
                <article>
                    <h5 className='fs_md mb_md'><b>주요 기능</b></h5>
                    <ol>
                        <li>
                            <b>실시간 차량 모니터링</b>
                            <p className='bullet'>
                                미니 커넥티드는 차량의 상태를 실시간으로 모니터링하여, 주행 중 발생할 수 있는 문제를 사전에 감지하고 알려줍니다. 엔진 상태, 타이어 압력, 오일 레벨 등의 정보를 언제 어디서나 확인할 수 있습니다.
                            </p>
                        </li>
                        <li>
                            <b>내비게이션과 경로 안내</b>
                            <p className='bullet'>
                                최신 지도 데이터와 실시간 교통 정보를 제공하여 최적화된 경로를 안내합니다. 목적지에 도착하기 전, 주변 주차장 정보와 주차 가능 여부를 미리 확인할 수 있는 기능도 포함되어 있습니다.
                            </p>
                        </li>
                        <li>
                            <b>원격 제어</b>
                            <p className='bullet'>
                                스마트폰을 통해 차량을 원격으로 제어할 수 있는 기능이 제공합니다. 차문 잠금/해제, 공조 시스템 제어, 경적 울리기 등을 원격으로 실행할 수 있어 차량 관리가 더욱 편리해집니다.
                            </p>
                        </li>
                        <li>
                            <b>긴급 지원 서비스</b>
                            <p className='bullet'>
                                사고 발생 시, 미니 커넥티드는 자동으로 긴급 서비스를 호출하여 신속한 구조를 받을 수 있도록 돕습니다. 차량의 위치 정보와 사고 상황을 실시간으로 전달하여 빠르고 정확한 지원이 가능합니다.
                            </p>
                        </li>
                    </ol>
                </article>
                <article>
                    <h5 className='fs_md mb_sm'><b>편리한 사용자 경험</b></h5>
                    <p>
                        미니 커넥티드는 직관적인 인터페이스와 사용자 친화적인 디자인으로 구성되어 있어, 누구나 손쉽게 사용할 수 있습니다. 미니 커넥티드 앱을 통해 모든 기능을 손쉽게 접근할 수 있으며, 정기적으로 업데이트되는 소프트웨어를 통해 항상 최신 기능을 누릴 수 있습니다.
                    </p>
                </article>
                <article>
                    <h5 className='fs_md mb_sm'><b>스마트한 연동</b></h5>
                    <p>
                        스마트폰과의 연동을 통해 내 음악, 연락처, 일정 등을 차량 내에서 손쉽게 관리할 수 있습니다. 음성 명령을 통해 전화 걸기, 메시지 보내기, 음악 재생 등 다양한 작업을 수행할 수 있어 운전 중에도 안전하게 스마트 기능을 사용할 수 있습니다.
                    </p>
                </article>
                <article>
                    <h5 className='fs_md mb_sm'><b>안전한 운전</b></h5>
                    <p>
                        미니 커넥티드는 차량의 안전성을 최우선으로 고려하여 설계되었습니다. 운전자의 습관을 분석하여 안전 운전 습관을 제안하고, 위험 상황을 미리 감지하여 경고를 제공합니다. 이를 통해 사고를 예방하고, 보다 안전한 운전을 실현할 수 있습니다.
                    </p>
                </article>
                <article>
                    <p>
                        미니 커넥티드는 차량과 사용자를 연결하여 새로운 차원의 편리함과 안전을 제공합니다. 지금 미니 커넥티드 서비스를 경험해 보세요. 보다 스마트한 운전 생활이 당신을 기다리고 있습니다. <br />
                        고객님의 문의와 관심에 항상 감사드리며, 추가로 궁금한 사항이 있으시면 언제든지 문의해 주세요. 감사합니다.
                    </p>
                </article>
            </div>
            
        </section>
    );
}

export default Connected;