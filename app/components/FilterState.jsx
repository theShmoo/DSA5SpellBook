function fuzzyStringCompare(str1, str2) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}

const DEFAULT_PROPERTIES = {
  Merkmal: "#####",
  Verbreitung: "Allgemein"
};

export default class FilterState {
  constructor () {
    this._name = "";
    this._properties = {};
    this._spellClasses = ["Zaubertrick","Ritual", "Zauberspruch"];
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
    for (var k in this.properties) {
      if(k in spell.properties) {
        if(fuzzyStringCompare(this.properties[k],DEFAULT_PROPERTIES[k]))
          filtered = false;
        else if(fuzzyStringCompare(spell.properties[k],DEFAULT_PROPERTIES[k]))
          filtered = false;
        else if(fuzzyStringCompare(spell.properties[k],this.properties[k]))
          filtered = false;
        else {
          filtered = true;
          break;
        }
      }
      if (filtered)
        break;
    }
    return filtered;
  }

  filterForSpellClasses(spell) {
    return !(this.spellClasses.indexOf(spell.spellclass) > -1);
  }

  filterSpell (spell) {
    if(this.filterForName(spell))
      return false;
    if(this.filterForProperties(spell))
      return false;
    if(this.filterForSpellClasses(spell))
      return false;
    return true;
  }
}
