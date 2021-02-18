const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
    
}

function handleGeoSucess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
     navigator.geolocation.getCurrentPosition(handleGeoSucess, 
        handleGeoError);
}
function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }
    else{
        //getWeahter
    }
}

function init(){
    loadCoords();

}
init();
