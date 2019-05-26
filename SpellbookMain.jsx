import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import SpellBook from './SpellBook';

import {DSASpells} from "../data/DSASpells";

const styles = {
  root: {
    flexGrow: 1,
  }
};

function sortSpells(spells) {
  return spells.sort((a,b) => {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
  });
}

function SpellbookMain(props) {
  return <main className={props.classes.root}>
        <SpellBook spells={sortSpells(DSASpells)}/>
    </main>
}

SpellbookMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpellbookMain);
