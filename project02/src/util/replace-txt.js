export function replaceSpotTxt(spot){
    switch(spot){
        case 'spot01' : return '서울';
        case 'spot02' : return '경기/인천';
        case 'spot03' : return '충청/대전';
        case 'spot04' : return '경상/대구/부산/울산';
        case 'spot05' : return '전라/광주';
        default : return null;
    }
}

export function replaceFuelTxt(fuel){
    switch(fuel){
        case 'gasoline' : return '가솔린';
        case 'disel' : return '디젤';
        case 'hev' : return '하이브리드';
        case 'electric' : return '전기';
        case 'lpg' : return 'LPG';
        default : return null;
    }
}

export function replaceModelTxt(model){
    switch(model){
        case '3door' : return '3도어';
        case '5door' : return '5도어';
        case 'convertible' : return '컨버터블';
        case 'clubman' : return '클럽맨';
        case 'countryman' : return '컨트리맨';
        case 'paceman' : return '페이스맨';
        case 'coupe' : return '쿠페';
        case 'roadster' : return '로드스터'
        default : break;
    }
}