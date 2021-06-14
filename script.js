// Write your JavaScript code here!


// let submit = document.getElementById("formSubmit");
// submit.addEventListener("click", function(event) {
//    event.preventDefault();
//    let pilotInput = document.querySelector("input[name=pilotName]");
//       if (pilotInput === "") {
//          alert("good job!");
//       }
// }

window.addEventListener("load", function() {
   let form = document.querySelector("launchForm");
   form.addEventListener("formSubmit", function(event) {
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
      }
      if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("Input must be a number!")
      }
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
