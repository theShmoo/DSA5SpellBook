function fuzzyStringCompare(str1, str2) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}

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

  get property() {
    return this._properties;
  }

  set property(newProperty) {
    this._properties = newProperty;
  }

  filterForProperty(spell) {
    var filtered = false;
    for (var k in this.property) {
      filtered = filtered || !((k in spell.properties) && (fuzzyStringCompare(spell.properties[k],this.property[k])));
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
