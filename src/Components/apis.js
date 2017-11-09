import oneBusApi from "../cool.js";

var apiUrl = `http://api.pugetsound.onebusaway.org/api/where/arrival-and-departure-for-stop/1_75403.xml?key=${oneBusApi}&tripId=1_15551341&serviceDate=1291536000000&vehicleId=1_3521&stopSequence=42`
// 
//arrival and departure for a stop 
function busApiCall(){
    console.log(oneBusApi);
    fetch(apiUrl, {mode: 'no-cors'})
    .then(function(response) {
        if(response.ok) {
            return response;
        }
        throw new Error("You messed up man");
    });
}






export default busApiCall;