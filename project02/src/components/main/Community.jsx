import './Community.css';
import { Link } from 'react-router-dom';

const Community=()=>{
    return (
        <section className="Community">
            <div className="inner_1280">
                <div className='txt_area'>
                    <h2 className="fs_xlg mb_xlg"><b>MINI <br />LIFE<br className='mdb' />STYLE</b></h2>
                    <h3 className='fs_lg mb_lg'>
                        미니 시리즈 오너들을 위한 특별한 커뮤니티입니다. <br />
                        미니를 타는 즐거움은 도로를 넘어 일상까지 이어집니다.
                    </h3>
                    <p className='fs_md NotoSansKR arrow'><Link to={'/brand/lifestyle'}>MINI LIFESTYLE 바로가기</Link></p>
                </div>
            </div>
        </section>
    );
}

export default Community;