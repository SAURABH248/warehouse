var map = null;
var arrayPartners = [
	{lat: 19.469391, lng: -99.180013},
	{lat: 25.733350, lng: -100.361414},
	{lat: 24.017827, lng: -104.653228},
	{lat: 20.718606, lng:  -103.325503},
	{lat: 20.718606, lng:  -103.325503}
];

var arrayTitlesPartners = [
	'Pascola Soluciones Avanzadas S.A de C.V.',
	'Qas Tech, S.A. de C.V.',
	'Imprenta Express',
	'Paradigma Empresarial',
	'Paradigma Empresarial'
];

window.onload = function() {
	//var myLatlng = new google.maps.LatLng(19.3960362,-99.2270672);

	var myOptions = {
		//center: myLatlng,
		center: new google.maps.LatLng(21.977964, -101.753477),
		zoom: 6,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,

		styles: [{"stylers":[{"hue":"#16a085"}]},{"elementType":"geometry","stylers":[{"color":"#272727"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#1c1c1c"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#555555"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#555555"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#292929"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#333333"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#111111"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#1d1e1c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}]
	};

	map = new google.maps.Map(document.getElementById("map"), myOptions);

	var img = 'http://next-cloud.mx/img/pin.svg';

	var partner1 = new google.maps.Marker({
		position: arrayPartners[0],
		map: map,
		animation: google.maps.Animation.DROP,
		icon: img
	});

	var partner2 = new google.maps.Marker({
		position: arrayPartners[1],
		map: map,
		animation: google.maps.Animation.DROP,
		icon: img
	});

	var partner3 = new google.maps.Marker({
		position: arrayPartners[2],
		map: map,
		animation: google.maps.Animation.DROP,
		icon: img
	});

	var partner4 = new google.maps.Marker({
		position: arrayPartners[2],
		map: map,
		animation: google.maps.Animation.DROP,
		icon: img
	});

	var partner5 = new google.maps.Marker({
		position: arrayPartners[4],
		map: map,
		animation: google.maps.Animation.DROP,
		icon: img
	});

	var markers = {
		'partner-1': partner1,
		'partner-2': partner2,
		'partner-3': partner3,
		'partner-4': partner4,
		'partner-5': partner5
	};

	// Editable string with html markup for tooltip content
	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'<h3 id="firstHeading" class="mapHeading">Mishcon de Reya</h3>'+
		'</div>'+
		'<div id="mapContent">'+
		'<p>Summit House,<br />'+
		'12 Red Lion Square</p>'+
		'</div>'+
		'</div>';

	var infowindow1 = new google.maps.InfoWindow({
		content: '<h3 class="mapHeading">' + arrayTitlesPartners[0] + '</h3>'
	});


	var infowindow2 = new google.maps.InfoWindow({
		content: '<h3 class="mapHeading">'+ arrayTitlesPartners[1] +'</h3>'
	});
	var infowindow3 = new google.maps.InfoWindow({
		content: '<h3 class="mapHeading">'+ arrayTitlesPartners[2] +'</h3>'
	});
	var infowindow4 = new google.maps.InfoWindow({
		content: '<h3 class="mapHeading">' + arrayTitlesPartners[3] + '</h3>'
	});
	var infowindow5 = new google.maps.InfoWindow({
		content: '<h3 class="mapHeading">' + arrayTitlesPartners[4] + '</h3>'
	});

	google.maps.event.addListener(partner1, 'mouseover', function() {
		infowindow1.open(map,partner1);
	});

	google.maps.event.addListener(partner1, 'click', function() {
		partner(0);
	});
	google.maps.event.addListener(partner2, 'click', function() {
		partner(1);
	});
	google.maps.event.addListener(partner3, 'click', function() {
		partner(2);
	});
	google.maps.event.addListener(partner4, 'click', function() {
		partner(3);
	});

	google.maps.event.addListener(partner1, 'mouseout', function() {
		infowindow1.close(map,partner1);
	});

	google.maps.event.addListener(partner2, 'mouseover', function() {
		infowindow2.open(map,partner2);
	});


	google.maps.event.addListener(partner2, 'mouseout', function() {
		infowindow2.close(map,partner2);
	});
	google.maps.event.addListener(partner3, 'mouseover', function() {
		infowindow3.open(map,partner3);
	});
	google.maps.event.addListener(partner3, 'mouseout', function() {
		infowindow3.close(map,partner3);
	});
	google.maps.event.addListener(partner4, 'mouseover', function() {
		infowindow4.open(map,partner4);
	});
	google.maps.event.addListener(partner4, 'mouseout', function() {
		infowindow4.close(map,partner4);
	});
	google.maps.event.addListener(partner5, 'mouseover', function() {
		infowindow5.open(map,partner5);
	});
	google.maps.event.addListener(partner5, 'mouseout', function() {
		infowindow5.close(map,partner5);
	});
};

function partner(index){
	if (map) {
		if (index == 4) {
			$('#info-partner').removeClass('activo');
			$('#info-partner').addClass('inactivo');
			map.setCenter({lat: 21.977964, lng: -101.753477});
			map.setZoom(6);
		}else{
			$('#titulo-parter-info').text(arrayTitlesPartners[index]);
			$('#info-partner').removeClass('inactivo');
			$('#info-partner').addClass('activo');
			map.setCenter(arrayPartners[index]);
			map.setZoom(9);
		}
	}
}