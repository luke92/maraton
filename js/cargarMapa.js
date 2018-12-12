function loadMap()
{
	$.ajax(
		{url: 'https://fastspeedster.herokuapp.com/api/tracks/42', success: function(result)
			{
	             var circuit = result;
	             var polygonPoints = new Array();
	             for(coordinate in circuit.tracks.coordinates)
	             {
	             	var coordLatLon = new L.latLng(coordinate.lat, coordinate.lon);
	             	polygonPoints.push(coordLatLon);
	             }
	             var polygon = new L.polygon(polygonPoints);
	             map.addLayer(polygon);
    		}	
		});
}

loadMap();
