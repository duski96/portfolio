import { useEffect } from "react";
import { imgArrange } from "../../../util/img-arrange";
import partsImg01 from "../../../assets/sub/service_parts_img01.jpg";
import partsImg02 from "../../../assets/sub/service_parts_img02.jpg";
import partsImg03 from "../../../assets/sub/service_parts_img03.jpg";

const Parts=()=>{
    useEffect(()=>{
        imgArrange();
    });

    return (
        <section className='Service Parts NotoSansKR'>
            <div className='inner_1280'>
                <article>
                    <h4 className='fs_lg mb_xsm'><b>미니 파츠</b></h4>
                    <h4 className='fs_md mb_lg'><b>당신의 완벽한 부품 솔루션</b></h4>
                    <p className='mb_sm'>
                        <b>
                            미니 파츠는 단순한 중고 부품부터 고성능 튜닝 파츠까지, 다양한 부품을 제공하는 종합적인 솔루션을 제공합니다. 고객님의 니즈에 맞춘 폭넓은 선택지를 자랑하며, 차량 유지 보수 및 성능 향상에 필요한 모든 부품을 한 곳에서 쉽게 구할 수 있습니다. 중고 부품은 철저한 검수 과정을 거쳐 품질을 보장하며, 신뢰할 수 있는 제품만을 제공하여 고객님의 만족을 최우선으로 생각합니다.
                        </b>
                    </p>
                    <p className='mb_md'>
                        <b>
                            미니 파츠는 모든 차량 모델에 맞춤형 부품을 보유하고 있으며, 각종 소모품, 엔진 부품, 외장 파츠 등 다양한 종류의 부품을 제공합니다. 특히, 희소성이 높은 부품들도 다수 보유하고 있어 필요한 부품을 손쉽게 찾을 수 있습니다. 신속한 배송 서비스와 합리적인 가격 정책으로 고객님의 차량 유지 관리를 더욱 편리하게 도와드립니다.
                        </b>
                    </p>
                    <div className='img_arrange'>
                        <img src={partsImg01} alt='고성능 휠타이어' />
                        <img src={partsImg02} alt='올드 미니 푸품 수급' />
                        <img src={partsImg03} alt='고성능 튜닝 파츠' />
                    </div>
                </article>
                <article>
                    <h5 className='fs_md mb_sm'><b>중고 부품: 경제적이고 신뢰할 수 있는 선택</b></h5>
                    <p className='mb_sm'>
                        미니 차량의 유지 보수 비용을 절감하고 싶으신가요? 미니 파츠의 중고 부품은 경제적인 선택으로, 높은 퀄리티를 유지하면서도 비용을 절감할 수 있는 최고의 솔루션입니다. 엄격한 검수 과정을 거친 중고 부품들은 새 부품과 비슷한 성능과 신뢰성을 자랑합니다. 각 부품은 전문 기술자에 의해 정밀하게 검사되어, 고품질의 상태로 고객님께 전달됩니다.
                    </p>
                    <p>
                        미니 파츠는 고객님의 필요에 따라 다양한 중고 부품을 제공합니다. 다양한 모델과 연식에 맞는 부품을 손쉽게 찾을 수 있으며, 필요한 부품을 빠르고 정확하게 제공해드립니다. 이를 통해 차량 유지 보수 비용을 효과적으로 절감할 수 있습니다. 지속 가능한 선택으로, 환경 보호에도 기여하는 중고 부품을 통해 경제적이고 신뢰할 수 있는 차량 관리 방법을 경험해 보세요.
                    </p>
                </article>
                <article>
                    <h5 className='fs_md mb_sm'><b>고성능 튜닝 파츠: 최상의 드라이빙 경험</b></h5>
                    <p className='mb_sm'>
                        미니 파츠는 차량 성능을 극대화할 수 있는 고성능 튜닝 파츠도 다수 보유하고 있습니다. 각종 배기 시스템, 서스펜션, 브레이크, 터보 차저 등 다양한 튜닝 파츠는 미니 차량의 성능을 한 단계 업그레이드하여 최상의 드라이빙 경험을 제공합니다. 레이싱을 즐기는 분이나 성능 향상을 원하는 모든 미니 소유자를 위한 맞춤형 제품들을 만나보세요.
                    </p>
                    <p>
                        미니 파츠의 고성능 튜닝 파츠는 최고 품질의 소재와 최신 기술로 제작되어, 최고의 성능과 내구성을 보장합니다. 믿을 수 있는 브랜드와의 협력으로 제공되는 이 파츠들은 미니 차량의 잠재력을 최대한으로 끌어올리며, 더 빠르고, 더 강력하고, 더 안정적인 주행을 가능하게 합니다. 고성능 튜닝 파츠로 미니 차량의 숨겨진 능력을 발휘해 보세요.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default Parts