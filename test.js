const drawerMenu = document.querySelector('.drawer-menu');
const drawerToggle = document.querySelector('.drawer-toggle');

drawerToggle.addEventListener('click', function() {
  console.log(drawerMenu)
  drawerMenu.classList.toggle('open');
});


//아래는 kakaomap
var container = document.getElementById('map');
var options = {
  center: new kakao.maps.LatLng(35.88720165868838, 128.58509478903335),
  level: 8
};
var map = new kakao.maps.Map(container, options);

var markerPositions = [
  new kakao.maps.LatLng(35.88720165868838, 128.58509478903335), // Blue marker position
  new kakao.maps.LatLng(35.88148754395694, 128.57626086398895), // Yellow marker position 1
  new kakao.maps.LatLng(35.88082239685244, 128.59862890053688), // Yellow marker position 2
];

for (var i = 0; i < markerPositions.length; i++) {
  var markerOptions = {
    position: markerPositions[i],
    map: map,
    image: {
      src: (i === 0) ? 'https://mapicons.mapsmarker.com/wp-content/uploads/mapicons/shape-default/color-3875d7.png' : 'https://mapicons.mapsmarker.com/wp-content/uploads/mapicons/shape-default/color-fdff5e.png',
      size: new kakao.maps.Size(40, 40),
      origin: new kakao.maps.Point(0, 0),
      anchor: new kakao.maps.Point(20, 40)
    }
  };

  var marker = new kakao.maps.Marker(markerOptions);
}
