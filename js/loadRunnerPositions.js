function loadRunnerPositions(id)
{
	var unCorredor = null;

	$.ajax(
		{
			url: 'https://fastspeedster.herokuapp.com/api/runners/' + id, success: function(result)
            {
            	var runner = result.runner;
            	var sponsor = new Sponsor(runner.sponsor.id, runner.sponsor.name);
            	unCorredor = new Runner(runner.id,runner.name,runner.surname,sponsor);

            	$.ajax(
				{
					url: 'https://fastspeedster.herokuapp.com/api/positions/' + id, success: function(result)
		            {
			            var listaPosiciones = new Array();
			            var positions = result.position.positions;
			            for(i = 0; i < positions.length; i++)
			            {
			             	var posicion = positions[i];
			             	listaPosiciones.push(new L.latLng(posicion.lat, posicion.lon));
			            }
		                     
		                unCorredor.positions = listaPosiciones;
		    
		                addRunner(unCorredor);

		    		}	
				});

            }
        });   
}

loadRunnerPositions(780);

