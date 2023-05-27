const drawerMenu = document.querySelector('.drawer-menu');
const drawerToggle = document.querySelector('.drawer-toggle');

drawerToggle.addEventListener('click', function() {
  console.log(drawerMenu)
  drawerMenu.classList.toggle('open');
});


//아래는 kakaomap
var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(35.88389261025553, 128.58642961643818),
     	level:6
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
  {
        title: '대구일중학교', 
        latlng: new kakao.maps.LatLng(35.88720165868838, 128.58509478903335)
    },
  {
        title: '경일중학교', 
        latlng: new kakao.maps.LatLng(35.88148754395694, 128.57626086398895)
    },
  {
        title: '경명여자중학교', 
        latlng: new kakao.maps.LatLng(35.88082239685244, 128.59862890053688)
    },
];

for (var i = 0; i < positions.length; i ++) {
  if( i === 0){
    	var imageSrc ="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    }
    else{
    	var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png";
    }
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage
    });
}
