// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
console.log("testing!")
const form = document.getElementById("launchForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();

let pilot = document.querySelector("[name='pilotName']").value;
let copilot = document.querySelector("input[name=copilotName]").value;
let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
let cargoLevel = document.querySelector("input[name=cargoMass]").value;
let list = document.getElementById("faultyItems");
console.log(list)
console.log(document.getElementById("faultyItems"))
list.style.visibility = 'hidden';
console.log(list)
formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) 
});
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   //console.log(listedPlanetsResponse);
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       //console.log(listedPlanets);
   }).then(function () {
       //console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planetChosen = pickPlanet(listedPlanets);
      // console.log(planetChosen);
       addDestinationInfo(document , planetChosen.name, planetChosen.diameter, planetChosen.star, planetChosen.distance, planetChosen.moons, planetChosen.image);
   })
   
});