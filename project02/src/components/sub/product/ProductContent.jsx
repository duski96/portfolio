import './ProductContent.css';

import ProductInfo from './ProductInfo';
import Estimate from './Estimate';
import WarrantyInfo from './WarrantyInfo';
import LifestyleInfo from './LifestyleInfo';

const ProductContent=()=>{
    return (
        <section className='ProductContent'>
            <div className='inner_1280'>
                <div className='content_area'>
                    <div className='articles_area'>
                        <ProductInfo />
                        <WarrantyInfo />
                        <LifestyleInfo />
                    </div>
                    <div className='estimate_area'>
                        <Estimate />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductContent;