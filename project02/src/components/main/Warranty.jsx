import './Warranty.css';
import warrantyImg01 from '../../assets/main/warranty_img01.jpg';
import warrantyImg02 from '../../assets/main/warranty_img02.png';
import warrantyImg03 from '../../assets/main/warranty_img03.png';
import warrantyImg04 from '../../assets/main/warranty_img04.png';
import warrantyImg05 from '../../assets/main/warranty_img05.png';
import warrantyImg06 from '../../assets/main/warranty_img06.png';

const Warranty=()=>{
    return (
        <section className='Warranty'>
            <img src={warrantyImg01} className='bg' />
            <div className='inner_1280'>
                <ul className='warranty NotoSansKR'>
                    <li>
                        <img src={warrantyImg02} />
                        <p className='fs_md'>360° 서라운드 체크</p>
                    </li>
                    <li>
                        <img src={warrantyImg03} />
                        <p className='fs_md'>12개월 / 20,000km <br />책임보증 제공</p>
                    </li>
                    <li>
                        <img src={warrantyImg04} />
                        <p className='fs_md'>A/S 3종 쿠폰 포함 <br />웰컴패키지 제공</p>
                    </li>
                    <li>
                        <img src={warrantyImg05} />
                        <p className='fs_md'>투명한 수리 / 사고 <br />이력 공개 </p>
                    </li>
                    <li>
                        <img src={warrantyImg06} />
                        <p className='fs_md'>편리한 리스 승계</p>
                    </li>
                </ul>
                <h3 className='txt_area fs_lg'>MINI 공식 인증 중고차를 <br />믿고 구매할 수 있는 이유입니다.</h3>
            </div>
        </section>
    );
}

export default Warranty;