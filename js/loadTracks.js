function loadTracks()
{
	$.ajax(
		{url: 'https://fastspeedster.herokuapp.com/api/tracks/', success: function(result)
            {
	             var tracks = result.tracks;
	             for(j = 0; j < tracks.length; j++)
	             {
	             	var polyLines = new Array();
	             	var coordinates = tracks[j].coordinates;
	             	for(i = 0; i < coordinates.length; i++)
	             	{
	             		polyLines.push(new L.latLng(coordinates[i].lat, coordinates[i].lon));
	             	}
	             	var track = new Track(tracks[j].id,polyLines);
                 	addTrack(track);
	             }
	             
    		}	
		});
}

loadTracks();