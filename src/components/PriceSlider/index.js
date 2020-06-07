import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

const PriceSlider = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 60]);
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(0);

  const handleChange = (event, newValue) => {
    setMin(newValue[0] * 10);
    setMax(newValue[1] * 10);
    setValue(newValue);

    // use debounce to filter phones array and return phones with min max
  };

  return (
    <div className={classes.root}>
      <div className="slider__min-max">
        <div>{value ? value[0] * 10 : min}</div>
        <div>{value ? value[1] * 10 : max}</div>
      </div>
      <Slider
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default PriceSlider;
