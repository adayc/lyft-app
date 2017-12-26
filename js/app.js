


var map;
var gdir;
var geocoder = null;
var addressMarker;

function initialize() {
if (GBrowserIsCompatible()) { 
map = new GMap2(document.getElementById("maps"));
map.addControl(new GLargeMapControl());
map.addControl(new GMapTypeControl());
gdir = new GDirections(map, document.getElementById("direcciones"));
GEvent.addListener(gdir, "load", onGDirectionsLoad);
GEvent.addListener(gdir, "error", handleErrors);

setDirections("Lima", "Cusco", "es"); 

}
} 

function setDirections(fromAddress, toAddress, locale) {
document.getElementById('direcciones').innerHTML='';
gdir.load("from: " + fromAddress + " to: " + toAddress,
{ "locale": locale });
}

function handleErrors(){
if (gdir.getStatus().code == G_GEO_UNKNOWN_ADDRESS)
alert("Dirección no disponible.\nError code: " + gdir.getStatus().code);
else if (gdir.getStatus().code == G_GEO_SERVER_ERROR)
alert("A geocoding or directions request could not be successfully processed, yet the exact reason for the failure is not known.\n Error code: " + gdir.getStatus().code); 
else if (gdir.getStatus().code == G_GEO_MISSING_QUERY)
alert("The HTTP q parameter was either missing or had no value. For geocoder requests, this means that an empty address was specified as input. For directions requests, this means that no query was specified in the input.\n Error code: " + gdir.getStatus().code); 
else if (gdir.getStatus().code == G_GEO_BAD_KEY)
alert("The given key is either invalid or does not match the domain for which it was given. \n Error code: " + gdir.getStatus().code);
else if (gdir.getStatus().code == G_GEO_BAD_REQUEST)
alert("A directions request could not be successfully parsed.\n Error code: " + gdir.getStatus().code); 
else alert("An unknown error occurred."); 
}

function onGDirectionsLoad(){ 
}