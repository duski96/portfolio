import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle=createGlobalStyle`
    ${reset}
    
    :root{
        --font-xlg:5.3rem;
        --font-lg:1.78rem;
        --font-md:1.33rem;
        --font-sm:1rem;
        --font-xsm:0.8rem;

        --space-xlg:3.56rem;
        --space-lg:2.67rem;
        --space-md:1.78rem;
        --space-sm:0.89rem;
        --space-xsm:0.45rem;
    }

    html, body{
        font-family: "Cormorant", "Noto Serif KR";
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-size:18px;
        line-height:1.3;
        color:#333;
    }

    .NotoSansKR {
        font-family: "Noto Sans KR";
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    .inner_1280{width:100%; max-width:1280px; margin:0 auto;}
    .inner_1000{width:100%; max-width:1000px; margin:0 auto;}

    .mbr{display:none;}
    .pbr{display:block;}

    b{font-weight:600;}
    a{color:#333; text-decoration:none;}

    .fs_xlg{font-size:var(--font-xlg);}
    .fs_lg{font-size:var(--font-lg);}
    .fs_md{font-size:var(--font-md);}
    .fs_sm{font-size:var(--font-sm);}
    .fs_xsm{font-size:var(--font-xsm);}

    .mb_xlg{margin-bottom:var(--space-xlg);}
    .mb_lg{margin-bottom:var(--space-lg);}
    .mb_md{margin-bottom:var(--space-md);}
    .mb_sm{margin-bottom:var(--space-sm);}
    .mb_xsm{margin-bottom:var(--space-xsm);}

    .flex{display:flex; flex-wrap:wrap;}
    .flex.j-fs{justify-content:flex-start;}
    .flex.j-ct{justify-content:center;}
    .flex.j-fe{justify-content:flex-end;}
    .flex.j-sb{justify-content:space-between;}
    .flex.a-fs{align-items:flex-start;}
    .flex.a-ct{align-items:center;}
    .flex.a-fe{align-items:flex-end;}

    .img_arrange{display:flex; gap:var(--space-sm);}
    .img_arrange img{display:block; width:100%; height:100%;}

    @media screen and (max-width:1280px){
        .inner_1280, .inner_1000{padding:0 16px;}
    }

    @media screen and (max-width:768px){
        html, body{font-size:17px;}
        
        .mbr{display:block;}
        .pbr{display:none;}
    }
`;

export default GlobalStyle;