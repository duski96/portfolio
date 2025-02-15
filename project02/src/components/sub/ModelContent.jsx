import './ModelContent.css';

import ModelTitle from "./ModelTitle";
import ModelImg from "./ModelImg";
import ModelTxt from "./ModelTxt";

const ModelContent=()=>{
    return (
        <section className="ModelContent">
            <div className="inner_1280">
                <ModelTitle />
                <ModelImg />
                <ModelTxt />
            </div>
        </section>
    );
}

export default ModelContent;