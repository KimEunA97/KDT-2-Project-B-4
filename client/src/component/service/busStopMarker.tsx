import React, { useEffect, useState } from 'react';
/**
 * 버스 위치를 나타내는 마커 모듈입니다.
 *
 * @param lati 위도입니다.
 * @param long 경도입니다.
 * @param map 마커를 지도에 표시합니다. map이라고 꼭넣어주세요.
 */

const busLocationMarker = (lati:number,long:number,map:string|undefined) => {
  
  const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
  imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
  imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    
  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
      markerPosition = new window.kakao.maps.LatLng(lati,long); // 마커가 표시될 위치입니다

  // 마커를 생성합니다
  const marker = new window.kakao.maps.Marker({
      position: markerPosition, 
      image: markerImage // 마커이미지 설정 
  });
  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);  
}

export default busLocationMarker 
