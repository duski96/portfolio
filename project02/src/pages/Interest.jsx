import Header from '../components/Header';
import SubMain from '../components/sub/SubMain';
import InterestList from '../components/sub/InterestList';
import QuickMenu from '../components/QuickMenu';
import Footer from '../components/Footer';

import subMainBg from './../assets/sub/interest_main_img01.jpg';

const Interest=()=>{    
    return (
        <>
            <Header isActive={true}/>
            <SubMain title={'관심 매물'} explanation={'관심 목록에 추가된 매물입니다.'} background={subMainBg} addClassName={'Interest'} />
            <InterestList />
            <QuickMenu />
            <Footer />
        </>
    );
}

export default Interest;