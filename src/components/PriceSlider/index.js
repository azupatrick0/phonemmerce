import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { func } from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: '80%',
  },
});

const PriceSlider = ({ setMin, setMax }) => {
  const classes = useStyles();
  const [value, setValue] = useState([20, 60]);

  const handleChange = (event, newValue) => {
    setMin(newValue[0] * 100);
    setMax(newValue[1] * 100);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className="slider__min-max">
        <div>${value && value[0] * 100}</div>
        <div>${value && value[1] * 100}</div>
      </div>
      <Slider
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

PriceSlider.propTypes = {
  setMax: func,
  setMin: func,
};

export default PriceSlider;
