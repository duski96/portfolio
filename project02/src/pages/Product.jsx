import Header from '../components/Header';
import SubMain from '../components/sub/SubMain';
import ProductContent from '../components/sub/product/ProductContent';
import QuickMenu from '../components/QuickMenu';
import Footer from '../components/Footer';

import subMainBg from './../assets/sub/product_main.jpg';

const Product=()=>{
    return (
        <>
            <Header isActive={true}/>
            <SubMain title={'매물 정보'} explanation={'선택한 매물 정보입니다.'} background={subMainBg} addClassName={'Product'} />
            <ProductContent />
            <QuickMenu />
            <Footer />
        </>
    );
}

export default Product;