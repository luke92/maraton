var Track = function(id, coordinates)
{
    this.id = id;
    this.coordinates = coordinates;
    this.polyline = null;
}

var Sponsor = function(id, name)
{
    this.id = id;
    this.name = name;
}

var Runner = function(id,name, surname, sponsor)
{
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.sponsor = sponsor;
    this.positions = null;
    this.markerMap = null;
};

var RunnerPositions = function (id, positions)
{
    this.id = id;
    this.positions = positions;
}

var Webcam = function(idWebcam, coordinate, frecuency)
{
    this.idWebcam = idWebcam;
    this.coordinate = coordinate;
    this.frecuency = frecuency;
    this.markerMap = null;
}

//Tamaño de cada icono
var iconMap = L.Icon.extend(
{
    options: 
    {
	iconSize:   [30, 30],
        iconAnchor:   [10, 15],
	popupAnchor:  [10, -10]
    }
});

var runnerIcon = new iconMap({iconUrl: './images/sonic.gif'});
var cameraIcon = new iconMap({iconUrl: './images/camera.gif'});
var startIcon  = new iconMap({iconUrl: './images/start.png'});
var finalIcon = new iconMap({iconUrl: './images/final.ico'});

//Coordenada centrado en la posicion de la UNGS
var ungsLocation = [-34.521819, -58.700949];

//Objeto Mapa
var map = L.map('mapid').setView(ungsLocation, 15);

//Mostrar mapa desde el servidor tile.osm.org junto con el mensaje en la esquina
L.tileLayer(
	'http://{s}.tile.osm.org/{z}/{x}/{y}.png', 
	{
	    attribution: 'MARATON 5K A-TEAM'
		}
).addTo(map);

var tracks = new Array();
var runners = new Array();
var webcams = new Array();
