function getRandomColor()
{
    var color;
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    color = "rgb("+r+" ,"+g+","+ b+")";
    return color; 
}

function addStartingLine(coordinate)
{
    L.marker(coordinate, {icon: startIcon}).addTo(map);
}

function addFinalLine(coordinate)
{
	L.marker(coordinate, {icon: finalIcon}).addTo(map);
}

/*Mostrar mensaje de bienvenida en el view.html
function addPopup(contentText, popupLocation)
{
    popup1 = new L.Popup();
    popup1.setLatLng(popupLocation);
    popup1.setContent(contentText);
    map.addLayer(popup1);
}*/

function addTrack(track)
{
    randomColor = getRandomColor();
    track.polyline = L.polyline(track.coordinates);
    track.polyline.setStyle({color: randomColor});
    track.polyline.bindPopup('<b>ID: </b>'+track.id);
    track.polyline.addTo(map);
    addStartingLine(track.coordinates[0]);
    addFinalLine(track.coordinates[track.coordinates.length-1]);
}

function addRunner(runner)
{
    runner.markerMap = L.Marker.movingMarker(
                            runner.positions,
                            5000);
    runner.markerMap.bindPopup('<b>ID: </b>'+runner.id+"<br/><b>Nombre: </b>"+runner.name + ' ' + runner.surname + '<br/><b>Sponsor: </b>' + runner.sponsor.name);
    runner.markerMap.options.icon = runnerIcon;
    map.addLayer(runner.markerMap);

    runners.push(runner);
}

function addWebcam(webcam)
{
    webcam.markerMap = L.marker(webcam.coordinate, {icon: cameraIcon}).bindPopup("<b>ID: </b>" + webcam.idWebcam + "<br/>" + "<b>Frecuencia: </b>" + webcam.frecuency);
    webcam.markerMap.addTo(map);
    webcams.push(webcam);
}

/* Implementación anterior para la Animacion de los corredores (Implementación actual MovingMarker.js)
function updateRunnersPosition()
{
    for(i = 0; i < runners.length; i++)
    {
        if(runners[i].positionIndex <  runners[i].positions.length)
        {
            runners[i].markerMap.setLatLng(runners[i].positions[runners[i].positionIndex]);
            runners[i].positionIndex++;
        }
    }
}*/

