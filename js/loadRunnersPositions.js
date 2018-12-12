var runnersPositions = new Array();
var corredores = new Array();

function loadPositions()
{
	$.ajax(
	{
		url: 'https://fastspeedster.herokuapp.com/api/positions/', async: false, success: function(result)
		{
			
			var runners = result.positions;
			for(r = 0; r < runners.length; r++)
			{
				var listaPosiciones = new Array();
				var positions = runners[r].positions;
				for(i = 0; i < positions.length; i++)
				{
					var posicion = positions[i];
					listaPosiciones.push(new L.latLng(posicion.lat, posicion.lon));
				}
				var runnerPositions = new RunnerPositions(runners[r].runner,listaPosiciones);
				runnersPositions.push(runnerPositions);
			}
		}	
	});
}

function loadRunners()
{
	$.ajax(
	{
			url: 'https://fastspeedster.herokuapp.com/api/runners/', async: false, success: function(result)
            {
            	var runners = result.runners;
            	
            	for(r = 0; r < runners.length; r++)
            	{
            		var unCorredor = null;
            		var sponsor = new Sponsor(runners[r].sponsor.id, runners[r].sponsor.name);
            		unCorredor = new Runner(runners[r].id,runners[r].name,runners[r].surname,sponsor);
            		corredores.push(unCorredor);
            	}
	            	
	        }
    });   
}

function enableBtnStartRace()
{
	document.getElementById("btnStartRace").disabled = false;
}

function loadRunnersPositions()
{
	loadPositions();
	loadRunners();

	for(i = 0; i < corredores.length; i++)
	{
		var result = $.grep(runnersPositions, function(e){ return e.id == corredores[i].id; });
		corredores[i].positions = result[0].positions;
		addRunner(corredores[i]);
	}
	setTimeout(enableBtnStartRace, 1000);

}

loadRunnersPositions();
