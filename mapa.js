var map = L.map('map').setView([-0.225069,-78.5168959], 8)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

	
L.control.scale().addTo(map);

var marker = L.marker([-0.225069,-78.5168959]).addTo(map)
.bindPopup('Aqui esta el instituto') //instituto
L.marker([-0.071850, -78.435068]).addTo(map)
.bindPopup('Casa de Francisco')//estudiante1Francisco
L.marker([-0.2235145,-78.5113281]).addTo(map)
.bindPopup('Casa de Jennifer')//estudiante2Jennifer
L.marker([-0.290397, -78.552108]).addTo(map)
.bindPopup('Casa del Quemag')//estudiante3Quemag
L.marker([-0.241768, -78.526977]).addTo(map)
.bindPopup('Casa del Pastrana')//estudiante4Pastrana
L.marker([-0.352055, -78.528046]).addTo(map)
.bindPopup('Casa de Mauricio')//estudiante5Mauricio
L.marker([-0.257128, -78.546270]).addTo(map)
.bindPopup('Casa de Kevin')//estudiante6Maistro
L.marker([-0.355708, -78.528793]).addTo(map)
.bindPopup('Casa de Jazmin')//estudiante7Jazz
L.marker([-0.249916, -78.538931]).addTo(map)
.bindPopup('Casa de Miguel')//estudiante8Miguel


// lineas
//instituto-francisco
var Linea = L.polyline([
	[-0.225069,-78.5168959],
	[-0.071850, -78.435068],
]).addTo(map);

//instituto-Jeniffer
var Linea = L.polyline([
	[-0.225069,-78.5168959],
	[-0.2235145,-78.5113281],
]).addTo(map);

//Instituto-Quemag
var Linea = L.polyline([
	[-0.225069,-78.5168959],
	[-0.290397, -78.552108],
]).addTo(map);

//Instituto-Pastrana
var Linea = L.polyline([
	[-0.225069,-78.5168959],
	[-0.241768, -78.526977],
]).addTo(map);

//Instituto-Mauricio
var Linea = L.polyline([
	[-0.225069,-78.5168959],
	[-0.352055, -78.528046],
]).addTo(map);

//Instituto-Kevin
var Linea = L.polyline([
	[-0.225069,-78.5168959],
	[-0.257128, -78.546270],
]).addTo(map);

//Instituto-Jazmin
var Linea = L.polyline([
	[-0.225069,-78.5168959],
	[-0.355708, -78.528793],
]).addTo(map);

// Instituto Miguel
var Linea = L.polyline([
	[-0.225069,-78.5168959],
	[-0.249916, -78.538931],
]).addTo(map);

//tiempo calculado

function prueba(params) {
	distancia_estudiante7Jazz(lat1,log2,-0.355708, -78.528793);
	cantidad_distancia.push(distancia_estudiante7Jazz);
	console.log("jazmin se encuentra a" )
	
}
//calculo de distancias
var from = turf.point([-0.225069,-78.5168959]);
var to = turf.point([-0.071850, -78.435068]);
var options = {units: 'kilometers'};

var distance = turf.distance(from, to, options);
alert("el estudiante que vie mas lejos es francisco a :" + distance+ " km"); 

/* opcion con radio cancelado (funcional)

var lat1 = -0.225069;
var lon1 = -78.5168959;
var lat2 = 0;
var lon2 =  0;
function Dist(lat1, lon1, lat2, lon2) {
     rad = function (x) {
         return x * Math.PI / 180;
     }
     var R = 6378.137;//Radio de la tierra en km
     var dLat = rad(lat2 - lat1);
     var dLong = rad(lon2 - lon1);
     var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
     var d = R * c;
     return d.toFixed(2);//Retorna dos decimales
}
*/