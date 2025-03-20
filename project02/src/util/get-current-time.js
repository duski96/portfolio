export function getCurrentTime(){
    // 현재 시간을 YYYY-MM-DD HH:MM:SS 형식으로 반환
    const getYear=new Date().getFullYear();
    const getMonth=`0${new Date().getMonth()+1}`.slice(-2);
    const getDate=`0${new Date().getDate()}`.slice(-2);
    const getHours=`0${new Date().getHours()}`.slice(-2);
    const getMinutes=`0${new Date().getMinutes()}`.slice(-2);
    const getSeconds=`0${new Date().getSeconds()}`.slice(-2);

    return `${getYear}-${getMonth}-${getDate} ${getHours}:${getMinutes}:${getSeconds}`;
}