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