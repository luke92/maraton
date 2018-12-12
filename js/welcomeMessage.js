function welcome()
{
	$.ajax(
		{url: 'https://fastspeedster.herokuapp.com/api', success: function(result)
			{
				console.log(result);
				var popupContent1 = result.welcome +
				'<br>urls</br><br>GET</br><br>/api/tracks/</br><br>descripción</br>'
				 + result.urls.GET['/api/tracks/'].descripción;
				addPopup(popupContent1,ungsLocation);
    		}	
		});
}

welcome();