

//Lista Posiciones
const getTrack = () => {
	return [
		[-34.524309, -58.695315],
	    [-34.521865, -58.698213],
	    [-34.520437, -58.699889],	    
	    [-34.522388, -58.701957],
	    [-34.523579, -58.70035]
	];
};

//Parsear una posicion del array a coordenada Leaflet
const toTrackPosition = (position) => {
	return L.latLng(position[0], position[1]); 
};

/*
   //MovingMarker Options
                        var animationMarker = L.Marker.movingMarker(
                            [[48.8567, 2.3508],[50.45, 30.523333]],
                            20000, {autostart: false});
    // Custom Icon Object
                        var greenIcon = L.icon({
                            iconUrl: 'icon.png',
                        });
   // Set icon to movingMarker
                        animationMarker.options.icon = greenIcon;
   // Add marker to Map
                        map.addLayer(animationMarker );
				//Start movingMarker
                     animationMarker.start();
*/






//Obtiene la lista de posiciones y devuelve un nuevo array de cada coordenada	
//L.polygon(getTrack().map(toTrackPosition)).addTo(map);




