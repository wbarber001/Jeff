var budget = 30;
let currentAbility;
//This array houses the grade options.
grades = [
  {text: 'select', grade: '', pool: 0},
  {text:'omega', grade:'OM', pool: 7},
  {text:'alpha', grade:'Al', pool: 6},
  {text:'super', grade:'S', pool: 5},
  {text:'A', grade:'A', pool: 4},
  {text:'B', grade:'B', pool: 3},
  {text:'C', grade:'C', pool: 2},
  {text:'D', grade:'D', pool: 1}]

  //This function cconstructs Ability objects.
function Ability(name, defense, cost) {
  this.name = name;
  this.defense = defense;
  this.cost = cost;
}

//Current library of ability object literals.
const blank = new Ability('select', '', '');
const absorb = new Ability('absorb', 'none', 2);
const adhesion = new Ability('adhesion', 'none', 2);
const agility = new Ability('agility', 'reflex', 2);
const aim = new Ability('aim', 'none', 1);
const alert = new Ability('alert', 'wits', 1);
const antibody = new Ability('antibody', 'none', 2);
const armor = new Ability('armor', 'none', 1);
const brains = new Ability('brains', 'none', 1);
const bind = new Ability('bind', 'none', 2);
const buff = new Ability('buff', 'none', 2);
const danger = new Ability('danger sense', 'wits', 2);
const dodge = new Ability('dodge', 'reflex', 2);
const drain = new Ability('drain', 'none', 2);
const elasticity = new Ability('elasticity', 'reflex', 2);
const empathy = new Ability('empathy', 'none', 1);
const empower = new Ability('empower', 'none', 4);
const endurance = new Ability('endurance', 'none', 2);
const enhanced = new Ability('enhanced sense', 'wits', 2);
const field = new Ability('field', 'none', 1);
const fight = new Ability('fight', 'reflex', 2);
const flight = new Ability('flight', 'reflex', 2);
const growth = new Ability('growth', 'none', 4);
const healOthers = new Ability('heal others', 'none', 2);
const healSelf = new Ability('heal self', 'none', 2);
const induceFear = new Ability('induce fear', 'none', 1);
const immaterial = new Ability('immaterial', 'reflex', 2);
const impairMove = new Ability('impair move', 'none', 2);
const impairSense = new Ability('impair sense', 'none', 2);
const impervious = new Ability('impervious', 'none', 4);
const inspect = new Ability('inspect', 'none', 1);
const imtimidate = new Ability('imtimidate', 'none', 1);
const leap = new Ability('leap', 'reflex', 2);
const magic = new Ability('magic', 'spirit', 2);
const meleeAttack = new Ability('melee attack', 'none', 1);
const mindControl = new Ability('mind control', 'none', 4);
const might = new Ability('might', 'none', 2);
const multiAbility = new Ability('multi-ability', 'none', 4);
const multiply = new Ability('multiply', 'none', 4);
const mutualAttack = new Ability('mutual attack', 'none', 2);
const paralysis = new Ability('paralysis', 'none', 4);
const pocketDimension = new Ability('pocket dimension', 'none', 4);
const possession = new Ability('possession', 'none', 2);
const psiDefense = new Ability('psi-defense', 'spirit', 2);
const psychic = new Ability('psychic', 'spirit', 2);
const radar = new Ability('radar', 'wits', 2);
const rangedAttack = new Ability('ranged attack', 'none', 1);
const resolve = new Ability('resolve', 'spirit', 2);
const science = new Ability('science', 'none', 1);
const shrink = new Ability('shrink', 'none', 4);
const sneak = new Ability('sneak', 'none', 2);
const speed = new Ability('speed', 'reflex', 2);
const steal = new Ability('steal', 'none', 2);
const strike = new Ability('strike', 'none', 1);
const technology = new Ability('technology', 'none', 1);
const telekinesis = new Ability('telekinesis', 'none', 2);
const telepathy = new Ability('telepathy', 'none', 2);
const teleport = new Ability('teleport', 'reflex', 2);
const thrwart = new Ability('thrwart', 'wits', 2);
const ward = new Ability('ward', 'spirit', 2);

//This array houses the ability options.
const abilityLibrary = [blank, absorb, adhesion, agility, aim, alert, antibody, armor, brains, bind, buff, danger, dodge, drain, elasticity, empathy, empower, endurance, enhanced, field, fight, flight, growth, healOthers, healSelf, induceFear, immaterial, impairMove, impairSense, impervious, inspect, imtimidate, leap, magic, meleeAttack, mindControl, might, multiAbility, multiply, mutualAttack, paralysis, pocketDimension, possession, psiDefense, psychic, radar, rangedAttack, resolve, science, shrink, sneak, speed, steal, strike, technology, telekinesis, telepathy, teleport, thrwart, ward];

var abilityChoice = document.getElementById('abilitySelect');
abilityChoice.addEventListener('change', function() {
  currentAbility = abilityChoice.options[abilityChoice.selectedIndex].value;
  var newAbility;
  var newGrade;
  for (var i = 0; i < abilityLibrary.length; i++) {
      if (currentAbility == abilityLibrary[i].name ){
        newAbility = abilityLibrary[i];
        console.log(newAbility);
      }
    }
    //Get grade selection.
    var gradeChoice = document.getElementById('gradeSelect');
    gradeChoice.addEventListener('change', function() {
      currentGrade = gradeChoice.options[gradeChoice.selectedIndex].value;
      for (var i = 0; i < grades.length; i++) {
        if (currentGrade == grades[i].text ){
          newGrade = grades[i];
          var newChoice = Object.assign(newAbility, newGrade);
          console.log(newChoice);
          newCharacter.abilityList.push(newChoice);
          purchase = newChoice.cost * newChoice.pool;
          outputCost = document.getElementById('outputCost');
          pointCost = document.createTextNode('cost: ' + purchase + ' points.');
          outputCost.appendChild(pointCost);
          budget -= purchase;
          outputBudget = document.getElementById('outputBudget');
          pointRemains = document.createTextNode(budget + ' points remaining');
          outputBudget.appendChild(pointRemains);
          outputAbilities = document.getElementById('outputAbilities');
          abilityText = document.createTextNode(newChoice.name + ' '+ newChoice.grade + ' ' + newChoice.pool);
          outputAbilities.appendChild(abilityText);
        }
      }
    })
  })



//This function creates a drop containing ability gradePicks and appends to the document.
/*function abilityDropDown(newCharacter) {

}*/
