// 강수 형태와 하늘 상태를 반환하는 ts파일

export type getAttrType=(value: string)=>string;

// loadedData의 PTY 속성 값을 통해 강수 형태를 반환
export const getPTY: getAttrType=(value)=>{
    switch(value){
        case '0' : return '강수 없음';
        case '1' : return '비';
        case '2' : return '비 / 눈';
        case '3' : return '눈';
        case '4' : return '소나기';
        case '5' : return '빗방울';
        case '6' : return '빗방울 / 눈날림';
        case '7' : return '눈날림';
        default : return '확인 불가';
    }
}

// loadedData의 SKY 속성 값을 통해 하늘 상태를 반환
export const getSKY: getAttrType=(value)=>{
    switch(value){
        case '1' : return '맑음';
        case '3' : return '구름 많음';
        case '4' : return '흐림';
        default : return '확인 불가';
    }
}

// loadedData의 VEC 속성 값을 통해 풍향을 반환
export const getVEC: getAttrType=(value)=>{
    const newVal=Number(value);

    if(newVal===0 || newVal===360){
        return '북풍';
    }
    else if(newVal>0 && newVal<45){
        return '북북동풍';
    }
    else if(newVal===45){
        return '북동풍';
    }
    else if(newVal>45 && newVal<90){
        return '북동동풍';
    }
    else if(newVal===90){
        return '동풍';
    }
    else if(newVal>90 && newVal<135){
        return '동남동풍';
    }
    else if(newVal===135){
        return '남동풍';
    }
    else if(newVal>135 && newVal<180){
        return '남동남풍';
    }
    else if(newVal===180){
        return '남풍';
    }
    else if(newVal>180 && newVal<225){
        return '남남서풍';
    }
    else if(newVal===225){
        return '남서풍';
    }
    else if(newVal>225 && newVal<270){
        return '남남서풍';
    }
    else if(newVal===270){
        return '서풍';
    }
    else if(newVal>270 && newVal<315){
        return '서북서풍';
    }
    else if(newVal===315){
        return '북서풍';
    }
    else if(newVal>315 && newVal<360){
        return '북서북풍';
    }
    else{
        return '확인 불가'
    }
}