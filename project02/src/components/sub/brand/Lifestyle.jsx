import { Link } from 'react-router-dom';
import LifestyleWelcome from './LifestyleWelcome';
import LifestyleReview from './LifestyleReview';
import LifestylePost from './LifestylePost';

const Lifestyle=()=>{
    
    return (
        <section className='BrandContent Lifestyle NotoSansKR'>
            <div className='inner_1280'>
                <LifestyleWelcome />
                <div className='board review mb_lg'>
                    <h4 className='board_title fs_lg mb_md'>
                        <span>운전자 리뷰</span>
                        <button type="button" className='fs_xsm'><Link to={'/brand/lifestyle/review'}>+ 더보기</Link></button>
                    </h4>
                    <LifestyleReview visible={'part'} />
                </div>
                <div className='post_area'>
                    <div className='board post'>
                        <h4 className='board_title fs_lg mb_md'>
                            <span>정기 모임</span>
                            <button type="button" className='fs_xsm'><Link to={'/brand/lifestyle/meeting'}>+ 더보기</Link></button>
                        </h4>
                        <LifestylePost visible={'part'} tableName={'meeting'} />
                    </div>
                    <div className='board post'>
                        <h4 className='board_title fs_lg mb_md'>
                            <span>드라이빙 코스 추천</span>
                            <button type="button" className='fs_xsm'><Link to={'/brand/lifestyle/driving'}>+ 더보기</Link></button>
                        </h4>
                        <LifestylePost visible={'part'} tableName={'driving'} />
                    </div>
                    <div className='board post'>
                        <h4 className='board_title fs_lg mb_md'>
                            <span>정비 후기</span>
                            <button type="button" className='fs_xsm'><Link to={'/brand/lifestyle/maintenance'}>+ 더보기</Link></button>
                        </h4>
                        <LifestylePost visible={'part'} tableName={'maintenance'} />
                    </div>
                    <div className='board post'>
                        <h4 className='board_title fs_lg mb_md'>
                            <span>결함/리콜</span>
                            <button type="button" className='fs_xsm'><Link to={'/brand/lifestyle/defect'}>+ 더보기</Link></button>
                        </h4>
                        <LifestylePost visible={'part'} tableName={'defect'} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Lifestyle;