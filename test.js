const drawerMenu = document.querySelector('.drawer-menu'); //querySelectorAll함수를 이용해 div안의 class 값 'drawer-menu' 값을 가져옴
const drawerToggle = document.querySelector('.drawer-toggle');

drawerToggle.addEventListener('click', function() { //addEventListener를 지정해 클릭시 function함수를 실행
  console.log(drawerMenu)
  drawerMenu.classList.toggle('open'); //classList.toggle: 기존 값이 ' '이었다면 'open'로 바뀌고 기존 값이 'open'이었다면, ' '으로 바뀜
});

var container = document.getElementById('map');
var options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3
};

var map = new kakao.maps.Map(container, options);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
