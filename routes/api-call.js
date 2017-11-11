

var apiUrl = 'http://api.pugetsound.onebusaway.org/api/where/routes-for-location.xml?key=ec76e3f1-3c97-4f4a-a55e-447cfffa457b&lat=47.6120&lon=-122.335167'



//arrival and departure for a stop 
function busApiCall(){
   console.log(oneBusApi);
   fetch(apiUrl)
   .then(function(response) {
       console.log(response);
       if(response.ok) {
           return response;
       }
       throw new Error("You messed up man");
       // request call on the backend 
   });
}






export default busApiCall;