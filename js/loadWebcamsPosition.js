function loadWebcamsPosition()
{      
    $.ajax(
		{url: 'https://fastspeedster.herokuapp.com/api/webcams/42', success: function(result)
            {
	             var webcamsRest = result.webcams;
	             for(i = 0; i < webcamsRest.length; i++)
	             {
	             	var posicion = webcamsRest[i].coordinate;
	             	var coordinate = new L.latLng(posicion.lat, posicion.lon);
                        var camara = new Webcam(webcamsRest[i].id,coordinate,webcamsRest[i].frecuency);
                        addWebcam(camara);
	             }

    		}	
		});
}

loadWebcamsPosition();