// returns true if the first string contains the second (in lower case)
function fuzzyStringCompare(str1, str2) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}

// checks if the local storage exists
function supportsLocalStorage() {
  var mod = "test";
  try {
    localStorage.setItem(mod, mod);
    localStorage.removeItem(mod);
    return true;
  } catch (e) {
    return false;
  }
}

export default class FilterState {
  constructor () {
    this._name = "";
    this._properties = {};
    this._spellClasses = [];
    this._favorite = false;
    this._favoriteSpells = [];

    this.hasLocalStorage = supportsLocalStorage();
    this.loadFromLocalStorage();
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
    this.saveToLocalStorage();
  }

  get properties() {
    return this._properties;
  }

  set properties(newProperties) {
    this._properties = newProperties;
    this.saveToLocalStorage();
  }

  get spellClasses() {
    return this._spellClasses;
  }

  set spellClasses(newSpellClasses) {
    this._spellClasses = newSpellClasses;
    this.saveToLocalStorage();
  }

  get favorite() {
    return this._favorite;
  }

  set favorite(bFilter) {
    this._favorite = bFilter;
    this.saveToLocalStorage();
  }

  get favoriteSpells() {
    return this._favoriteSpells;
  }

  set favoriteSpells(newFavoriteSpells) {
    this._favoriteSpells = newFavoriteSpells;
    this.saveToLocalStorage();
  }

  loadFromLocalStorage () {
    // load local state
    if(this.hasLocalStorage) {
      console.log("load local storage");
      console.log(localStorage.getItem("filter"));
      var storedFilter = JSON.parse(localStorage.getItem("filter"));
      if(storedFilter)
      {
        this._name = storedFilter._name;
        this._properties = storedFilter._properties;
        this._spellClasses = storedFilter._spellClasses;
        this._favoriteSpells = storedFilter._favoriteSpells;
        this._favorite = storedFilter._favorite;
      }
    }
  }

  saveToLocalStorage() {
    if(this.hasLocalStorage) {
      console.log("Save to local storage");
      localStorage.setItem("filter", JSON.stringify(this));
      console.log(JSON.stringify(this));
    }
  }

  /*
   * Here start the filter methods
   */

  filterForName(spellname) {
    return !fuzzyStringCompare(spellname,this.name);
  }

  filterForProperties(spellproperties) {
    var filtered = false;
    // iterate over all properties of the filter
    for (var k in this.properties) {
      // if a property is found (e.g. Merkmal)
      if(k in spellproperties && this.properties[k].length) {
        // check for the spell property if it is inside this list
        var spell_p = spellproperties[k];
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

  filterForSpellClasses(spellclass) {
    if(this.spellClasses.length)
      return !(this.spellClasses.indexOf(spellclass) > -1);
    else
      return false;
  }

  filterForFavorite(spellname) {
    if(this.favorite && this.favoriteSpells.indexOf(spellname) === -1) {
      return true;
    }
    return false;
  }

  filterSpell (spell) {
    if(this.filterForName(spell.props.name))
      return true;
    if(this.filterForProperties(spell.props.properties))
      return true;
    if(this.filterForSpellClasses(spell.props.spellclass))
      return true;
    if(this.filterForFavorite(spell.props.name))
      return true;
    return false;
  }
}
