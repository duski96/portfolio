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