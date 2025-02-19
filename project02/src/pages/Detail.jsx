import Header from '../components/Header';
import SubMain from '../components/sub/SubMain';
import DetailContent from '../components/sub/detail/DetailContent';
import QuickMenu from '../components/QuickMenu';
import Footer from '../components/Footer';

import subMainBg from './../assets/sub/interest_main_img01.jpg';

const Detail=()=>{
    return (
        <>
            <Header isActive={true}/>
            <SubMain title={'매물 정보'} explanation={'선택한 매물 정보입니다.'} background={subMainBg} addClassName={'Detail'} />
            <DetailContent />
            <QuickMenu />
            <Footer />
        </>
    );
}

export default Detail;