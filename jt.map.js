var jt = jt || {};

jt.map = (function($){
	
	var markersArray = [],	
		points = { markers: markersArray, zoom: 1};
	
	var init = function(){
		redrawMap();
	};
	
	var redrawMap = function(){
		$("#map").gMap(points);
	}
	
	var insertMarker = function(lat, lon, message){
		markersArray.push({latitude: lat, longitude: lon, html: message});
		redrawMap();
	};
	
	$(init);
	
	return{
		insertMarker: insertMarker
	}
	
}(jQuery));