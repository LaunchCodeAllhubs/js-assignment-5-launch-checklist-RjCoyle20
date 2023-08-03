// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
const div = document.getElementById("missionTarget");
   // Here is the HTML formatting for our mission target div.
   div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `
   
}

function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0){
        return "Empty";
    } else if (!isNaN (testInput)) {
        return "Is a Number";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");

   

   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    //alert("All fields are required!");
   }
   if (validateInput(pilot) !== "Not a Number") {
    //alert("Pilot's name must be composed of letters!")
   } else { pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
   list.style.visibility = "hidden";
   }
   if (validateInput(copilot) !== "Not a Number") {
    //alert ("Copilot's name must be composed of letters!")
   } else { copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
   list.style.visibility = "hidden";
    }
    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
       // alert("Fuel Level and Cargo Level must be numbers!")
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
    //alert ("Fuel is too low and cargo load is too high for launch!")
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
    fuelStatus.innerHTML = `Fuel level too low for launch`;
    list.style.visibility = "visible";
    launchStatus.style.color = "rgb(199, 37, 78)";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    }
     else if (Number(fuelLevel) < 10000) {
        //alert ("Fuel is too low for launch!")
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        list.style.visibility = "visible";
        launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
     }
     else if (Number(cargoLevel) >= 10000 && Number(fuelLevel) >= 10000) {
        //alert ("Cargo mass is too high for launch!")
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        list.style.visibility = "visible";
        launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";

    } else if (Number(cargoLevel) <= 10000 && Number(fuelLevel)  < 10000) {
        //alert ("Cargo mass is too high for launch!")
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        list.style.visibility = "visible";
        launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    }  else if (Number(cargoLevel) < 10000 && Number(fuelLevel) >= 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
    }
    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        const jsonPromise = response.json();
        return jsonPromise;
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let chosenPlanet = planets[Math.floor(Math.random()*6)]
    return chosenPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
