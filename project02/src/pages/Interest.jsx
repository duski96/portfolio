import Header from '../components/Header';
import SubMain from '../components/sub/SubMain';
import InterestList from '../components/sub/InterestList';
import Footer from '../components/Footer';

const Interest=()=>{
    return (
        <>
            <Header isActive={true}/>
            <SubMain title={'관심 매물'} explanation={'관심 목록에 추가된 매물입니다.'}/>
            <InterestList />
            <Footer />
        </>
    );
}

export default Interest;