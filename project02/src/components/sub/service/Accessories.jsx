import { useEffect } from "react";
import { imgArrange } from "../../../util/img-arrange";
import accessoriesImg01 from "../../../assets/sub/service_accessories_img01.jpg";
import accessoriesImg02 from "../../../assets/sub/service_accessories_img02.jpg";
import accessoriesImg03 from "../../../assets/sub/service_accessories_img03.jpg";
import accessoriesImg04 from "../../../assets/sub/service_accessories_img04.jpg";
import accessoriesImg05 from "../../../assets/sub/service_accessories_img05.jpg";

const Accessories=()=>{
    useEffect(()=>{
        imgArrange();
    });

    return (
        <section className="ServiceContent Accessories NotoSansKR">
            <div className='inner_1280'>
                <article>
                    <h4 className='fs_lg mb_lg'><b>미니 차량용 악세서리</b></h4>
                    <p>
                        <b>
                            미니 차량을 한층 더 돋보이게 만들고 싶으신가요? 여기, 당신의 차량을 특별하게 변신시켜줄 미니 전용 악세서리가 준비되어 있습니다. <br />
                            강렬한 레드 포인트와 세련된 디자인으로 제작된 다양한 악세서리들이 미니의 독특한 스타일을 극대화해 줍니다. 각각의 악세서리는 높은 내구성과 완벽한 핏을 자랑하며, 간편한 설치로 누구나 쉽게 적용할 수 있습니다. 지금 바로 미니 차량용 악세서리를 만나보세요.
                        </b>
                    </p>
                </article>
                <article>
                    <h5 className="fs_md mb_sm"><b>GP 리어윙</b></h5>
                    <p className='mb_sm'>
                        <b>레드 포인트가 들어간 GP 리어윙은 미니 차량의 외관을 한층 더 스포티하고 세련되게 만들어줍니다.</b> 이 리어윙은 뛰어난 에어로다이내믹 디자인으로 설계되어, 고속 주행 시 차량의 안정성을 향상시키며, 동시에 매력적인 외관을 자랑합니다. 독창적인 레드 컬러 포인트는 차량에 강렬한 개성을 더해줍니다.                         
                    </p>
                    <p className='mb_md'>
                        <b>강력한 내구성과 완벽한 핏으로 제작된 GP 리어윙은 설치가 간편하며, 차량의 성능과 스타일 모두를 향상시킵니다.</b> 프리미엄 소재로 제작되어 오랜 시간 동안 변색이나 손상 없이 사용 가능합니다. GP 리어윙은 미니 차량을 더욱 특별하게 만들어 줄 필수 아이템입니다.
                    </p>
                    <div className='img_arrange mb_sm'>
                        <img src={accessoriesImg01} alt="GP 리어윙 장착 모습" />
                        <img src={accessoriesImg02} alt="GP 로고" />
                    </div>
                    <img src={accessoriesImg03} alt="GP 리어윙" />
                </article>
                <article>
                    <h5 className="fs_md mb_sm"><b>GP 포인트 그릴</b></h5>
                    <p className='mb_sm'>
                        <b>레드 라인으로 포인트가 들어간 GP 포인트 그릴은 미니 차량의 전면부에 독특한 개성과 강렬한 인상을 부여합니다.</b> 그릴의 레드 라인은 고품격 디자인과 완벽한 조화를 이루며, 다른 차량들과 차별화된 독창적인 외관을 제공합니다. 
                    </p>
                    <p className='mb_md'>
                        <b>고성능 소재로 제작된 GP 포인트 그릴은 내후성을 가지며, 오랜 시간 동안 깔끔한 상태를 유지할 수 있습니다.</b> 쉬운 설치 과정으로 누구나 간편하게 차량의 외관을 업그레이드할 수 있으며, 차량 전체의 디자인 통일성을 높이는 데 기여합니다. GP 포인트 그릴은 미니 차량의 전면부를 한층 더 매력적으로 만들어 줄 것입니다.
                    </p>
                    <img src={accessoriesImg04} alt="GP 포인트 그릴" />
                </article>
                <article>
                    <h5 className="fs_md mb_sm"><b>GP 후드와 고뱃지</b></h5>
                    <p className='mb_sm'>
                        <b>GP 후드와 고뱃지는 미니 차량의 후드에 독창적인 스타일과 클래스를 더해줍니다.</b> 후드의 디자인은 레드 포인트와 함께 세밀한 디테일이 돋보이며, 차량의 외관을 더욱 완벽하게 완성해줍니다. 고뱃지는 미니만의 아이덴티티를 반영한 디자인으로, 차량의 독창성을 더욱 두드러지게 합니다. 
                    </p>
                    <p className='mb_md'>
                        내구성 높은 소재로 제작된 GP 후드와 고뱃지는 외부 환경으로부터 차량을 보호하면서도 강렬한 인상을 유지합니다. 설치가 간편하여 누구나 손쉽게 차량을 커스터마이즈할 수 있으며, 차량의 격조와 스타일을 한 단계 높여줍니다. GP 후드와 고뱃지는 미니 차량 소유자를 위해 디자인된 최고의 선택입니다.
                    </p>
                    <img src={accessoriesImg05} alt="GP 후드와 고뱃지" />
                </article>
                <article>
                    <h5 className="fs_md mb_sm"><b>다양한 치장 악세서리</b></h5>
                    <p className='mb_sm'>
                        <b>GP 부품 외에도 미니 차량을 위한 다양한 치장 악세서리가 준비되어 있습니다.</b> 다양한 색상과 디자인으로 구성된 사이드 미러 커버, 도어 핸들 커버, 스포일러 등은 미니 차량을 더욱 독창적이고 개성 있게 꾸밀 수 있는 최적의 선택입니다.
                    </p>
                    <p>
                        <b>또한, 인테리어 악세서리 역시 미니의 개성을 한층 더 돋보이게 합니다.</b> 맞춤형 시트 커버, 대쉬보드 트림, 조명 장치 등은 차량 내부를 럭셔리하고 편안한 공간으로 바꿔줍니다. 이 모든 악세서리는 높은 품질과 내구성을 보장하며, 고객님의 취향에 맞추어 개인화된 차량을 완성할 수 있게 도와드립니다. 지금 바로 다양한 미니 차량용 치장 악세서리를 만나보세요.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default Accessories;