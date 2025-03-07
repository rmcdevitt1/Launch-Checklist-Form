// Write your JavaScript code here!

window.addEventListener("load", function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json) {
            let div = document.getElementById("missionTarget");
            div.innerHTML += `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[5].name}</li>
                  <li>Diameter: ${json[5].diameter}</li>
                  <li>Star: ${json[5].star}</li>
                  <li>Distance from Earth: ${json[5].distance}</li>
                  <li>Number of Moons: ${json[5].moons}</li>
               </ol>
               <img src="${json[5].image}">
               
               `;

        });
    });

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/



   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      // alert the current value found in the username input
      // alert("copilotName: " + copilotInput.value);
      // alert("pilotName: " + pilotInput.value);
      if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "" ) {
         alert("All fields are required!");
         return;
      }
      if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("Input must be a number!")
         return;
      }


      let pilotName = document.getElementById("pilotStatus");
      pilotName.innerHTML = `${pilotInput.value} is ready for launch.`;

      let copilotName = document.getElementById("copilotStatus");
      copilotName.innerHTML = `${copilotInput.value} is ready for launch.`;

      if (fuelLevelInput.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         let fuelGiven = document.getElementById("fuelStatus");
         fuelGiven.innerHTML = "There is not enough fuel for the journey.";
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch";
         document.getElementById("launchStatus").style.color = "red";
      }

      if (cargoMassInput.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         let cargoGiven = document.getElementById("cargoStatus");
         cargoGiven.innerHTML = "There is too much cargo mass for the shuttle to take off.";
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch";
         document.getElementById("launchStatus").style.color = "red";
      }

      if (cargoMassInput.value < 10000 && fuelLevelInput.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").innerHTML = "Shuttle Is Ready For Launch";
         document.getElementById("launchStatus").style.color = "green";
      }

   });
});


