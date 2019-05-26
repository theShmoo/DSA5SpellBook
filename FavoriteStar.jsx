import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import DSATooltip from '../controls/DSATooltip';

const styles = theme => ({
  button: {
    margin: 0.5*theme.spacing.unit,
  },
  icon: {
    margin: 0.5*theme.spacing.unit,
    fontSize: 20,
  },
});

function FavoriteStar(props) {
  const {fav, onClick, classes} = props;
  const glyph = fav ? <StarIcon className={classes.icon} />
    : <StarBorderIcon className={classes.icon} />

  let tt_text = "Klicke auf den Stern um diesen Zauberspruch ";
  if (fav)
    tt_text += "von deinen Favoriten zu entfernen";
  else
    tt_text += "zu deinen Favoriten hinzuzufügen";

  return(
      <DSATooltip title={tt_text}>
        <IconButton
          onClick={onClick}
          color="primary"
          className={classes.button}
          aria-label={tt_text}>
        {glyph}
        </IconButton>
      </DSATooltip>
  );
}

FavoriteStar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FavoriteStar);
