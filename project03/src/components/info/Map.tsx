import { useEffect } from "react";
import beachInfo from '../../assets/beachInfo.json';
import { useParams } from "react-router-dom";

const { kakao }=window;

const Map=()=>{
    const param=Number(useParams().id);

    const latitude=beachInfo.filter(item=>item.id===param)[0].latitude;
    const longitude=beachInfo.filter(item=>item.id===param)[0].longitude

    useEffect(()=>{
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
    
        const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
        // 마커가 표시될 위치입니다 
        const markerPosition  = new kakao.maps.LatLng(latitude, longitude); 
    
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
    
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }, []);
    

    return (
        <article className='Map'>
            <p className='fs_md mb_sm'><b>날씨 예보는 아래 위치를 기준으로 제공됩니다.</b></p>
            <div id="map"></div>
        </article>
    );
}

export default Map;