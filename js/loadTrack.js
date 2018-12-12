function loadTrack(id)
{
	$.ajax(
		{url: 'https://fastspeedster.herokuapp.com/api/tracks/' + id, success: function(result)
            {
	             var polyLines = new Array();
	             var id = result.track.id;
	             var coordinates = result.track.coordinates;
	             for(i = 0; i < coordinates.length; i++)
	             {
	             	polyLines.push(new L.latLng(coordinates[i].lat, coordinates[i].lon));

	             }
	             var track = new Track(id,polyLines);
                 addTrack(track);
    		}	
		});
}

loadTrack(42);
