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
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  filterForName(spell) {
    return !fuzzyStringCompare(spell.name,this.name);
  }

  get properties() {
    return this._properties;
  }

  set properties(newProperty) {
    this._properties = newProperty;
  }

  filterForProperty(spell) {
    var filtered = false;
    for (var k in this.properties) {
      if(k in spell.properties) {
        if(fuzzyStringCompare(spell.properties[k],DEFAULT_PROPERTIES[k]))
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

  filterSpell (spell) {
    if(this.filterForName(spell))
      return false;
    if(this.filterForProperty(spell))
      return false;
    return true;
  }
}
