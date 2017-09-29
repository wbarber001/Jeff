let int = document.getElementById("int");
let will = document.getElementById("will");
let phy = document.getElementById("phy");
let intText = document.getElementById('outputInt');
let willText = document.getElementById('outputWill');
let phyText = document.getElementById('outputPhy');
let abilityText = document.getElementById('outputAbilities');
var intStat;
var willStat;
var phyStat;

let startCharacter = document.getElementById('startCharacter');
startCharacter.addEventListener('click', nameCharacter);
//This function collects character data.
function Character() {
  this.name = name;
  this.totalReflexDefense = "";
  this.totalSpiritDefense = "";
  this.totalWitsDefense = "";
  this.int = intStat;
  this.will = willStat;
  this.phy = phyStat;
  this.abilityList = [];
}
//Names collects char name, calls Character func. prints name to dom.
function nameCharacter() {
  name = prompt("What is your character's name?");
  let outputName = document.getElementById('outputName');
  let nameText = document.createTextNode(name);
  outputName.appendChild(nameText);
  //Show stat drop down.
  toggleStatDrop();
  toggleStartButton();
}

function toggleStatDrop() {
    var x = document.getElementById('statOptions');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function toggleStartButton() {
    var x = document.getElementById('startCharacter');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function toggleAbilityDrop() {
    var x = document.getElementById('abilitySelect');
    toggleGradeDrop();
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function toggleGradeDrop() {
    var x = document.getElementById('gradeSelect');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

//User input calls function and list user picks on document.
int.addEventListener('change', function() {
  let intVal = int.options[int.selectedIndex].text;
  intStat = int.options[int.selectedIndex].value;
  // Add that data to the <div>
  intText.innerHTML = 'INT: ' + intVal;
})

will.addEventListener('change', function() {
  let willVal = will.options[will.selectedIndex].text;
  willStat = will.options[will.selectedIndex].value;
  willText.innerHTML = 'WILL: ' + willVal;
})

phy.addEventListener('change', function() {
  let phyVal = phy.options[phy.selectedIndex].text;
  phyStat = phy.options[phy.selectedIndex].value;
  phyText.innerHTML = 'PHY: ' + phyVal;
})

//This function prevents duplicate ability ratings and triggers ability picks.
function checkRates() {
  //If no selection have been made program stops.
    if ((int.value == '-') && (will.value == '-') && (phy.value == '-')) {
        return;
    } else if ((int.value != will.value) && (will.value != phy.value) && (int.value != phy.value)) {
      newCharacter = new Character();
      //Hides stat drop down.
      toggleStatDrop();
      //Show ability and grade drop down.
      toggleAbilityDrop();
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
let confirmStats = document.getElementById('confirmStats');
confirmStats.addEventListener('click', checkRates);
