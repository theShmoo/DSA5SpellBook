import data from "./spellclassinfo";

// returns true if the first string contains the second (in lower case)
function fuzzyStringCompare(str1, str2) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}

export default class FilterState {
  constructor () {
    this._name = "";
    this._properties = {};
    this._spellClasses = [];
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get properties() {
    return this._properties;
  }

  set properties(newProperties) {
    this._properties = newProperties;
  }

  get spellClasses() {
    return this._spellClasses;
  }

  set spellClasses(newSpellClasses) {
    this._spellClasses = newSpellClasses;
  }

  filterForName(spell) {
    return !fuzzyStringCompare(spell.name,this.name);
  }

  filterForProperties(spell) {
    var filtered = false;
    // iterate over all properties of the filter
    for (var k in this.properties) {
      // if a property is found (e.g. Merkmal)
      if(k in spell.properties && this.properties[k].length) {
        // check for the spell property if it is inside this list
        var spell_p = spell.properties[k];
        var isInList = false;
        for( var p of this.properties[k]) {
          isInList = fuzzyStringCompare(spell_p, p);
          if (isInList)
            break;
        }
        filtered = !isInList;
      }
      if (filtered)
        break;
    }
    return filtered;
  }

  filterForSpellClasses(spell) {
    if(this.spellClasses.length)
      return !(this.spellClasses.indexOf(spell.spellclass) > -1);
    else
      return false;
  }

  filterSpell (spell) {
    if(this.filterForName(spell))
      return true;
    if(this.filterForProperties(spell))
      return true;
    if(this.filterForSpellClasses(spell))
      return true;
    return false;
  }
}
