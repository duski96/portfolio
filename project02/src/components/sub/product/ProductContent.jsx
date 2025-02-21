import './ProductContent.css';

import { useContext } from 'react';
import { MockDataContext } from '../../../App.jsx';
import { useParams } from 'react-router-dom';


import ProductInfo from './ProductInfo';
import Estimate from './Estimate';
import WarrantyInfo from './WarrantyInfo';
import LifestyleInfo from './LifestyleInfo';

const ProductContent=()=>{
    const {mockData}=useContext(MockDataContext);
    const currentData=mockData[useParams().id];

    return (
        <section className='ProductContent'>
            <div className='inner_1280'>
                <div className='content_area'>
                    <div className='articles_area'>
                        <ProductInfo currentData={currentData} />
                        <WarrantyInfo />
                        <LifestyleInfo />
                    </div>
                    <div className='estimate_area'>
                        <Estimate currentData={currentData} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductContent;