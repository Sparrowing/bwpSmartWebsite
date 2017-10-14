function mapInit() {
	var example = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
		center: example
	});
	var marker = new google.maps.Marker({
		position: example,
		map: map
	});
}
