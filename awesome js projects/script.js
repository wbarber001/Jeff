//Rate your stats from 1 to 3
//Access user input, output divs, stores data for use.
let int = document.getElementById("int");
let will = document.getElementById("will");
let phy = document.getElementById("phy");
let intText = document.getElementById('outputInt');
let willText = document.getElementById('outputWill');
let phyText = document.getElementById('outputPhy');
let abilityText = document.getElementById('outputAbilities');

function Character() {
  this.name = "";
  this.totalReflexDefense = "";
  this.totalSpiritDefense = "";
  this.totalWitsDefense = "";
  this.int = 0;
  this.will = 0;
  this.budget = 0;
  this.abilityList = [];
}

//User input calls function and list user picks on document.
int.addEventListener('change', function() {
  let intVal = int.options[int.selectedIndex].text;
  // Add that data to the <div>
  intText.innerHTML = 'INT: ' + intVal;
})

will.addEventListener('change', function() {
  let willVal = will.options[will.selectedIndex].text;
  willText.innerHTML = 'WILL: ' + willVal;
})

phy.addEventListener('change', function() {
  let phyVal = phy.options[phy.selectedIndex].text;
  phyText.innerHTML = 'PHY: ' + phyVal;
})

//This function prevents duplicate ability ratings and triggers ability picks.
function checkRates() {
    newCharacter = new Character();
  //If no selection have been made program stops.
    if ((int.value == '-') && (will.value == '-') && (phy.value == '-')) {
        return;
    } else if ((int.value != will.value) && (will.value != phy.value) && (int.value != phy.value)) {
      //Calls function that adds drop down to dv.
      abilityDropDown(newCharacter);
      //Catches duplicate selections.
    } else if ((int.value == will.value) || (will.value == phy.value) || (int.value == phy.value)) {
      // Gets div with id of abilitySelect
      var abilitySelect = document.getElementById('abilitySelect');
      // Creates text in the DOM
      var statsText = document.createTextNode('No two stats may share the same rating.');
       // Appends text to output div
      abilitySelect.appendChild(statsText);
      // Appends output div to body
      document.body.appendChild(abilitySelect);
  }
}

//Connect confirmation button to checkRates function.
let button = document.getElementById('confirmStats');
button.addEventListener('click', checkRates);
