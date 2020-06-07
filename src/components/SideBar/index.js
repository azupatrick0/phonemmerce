import React from 'react';
import PriceSlider from 'components/PriceSlider';
import { func, string } from 'prop-types';

const SideBar = ({
  setMin,
  setMax,
  minPrice,
  maxPrice,
  handleMinPriceChange,
  handleMaxPriceChange,
}) => (
  <div className="sidebar">
    <div className="sidebar__categories">
      <div>Categories</div>
      <div> <input type="checkbox" /> All</div>
      <div> <input type="checkbox" /> iPhone</div>
      <div> <input type="checkbox" /> Samsung</div>
      <div> <input type="checkbox" /> Macbook</div>
      <div> <input type="checkbox" /> Airpods</div>
    </div>

    <div className="sidebar__price-filter">
      <div>Price Filter</div>
      <div>
        <PriceSlider setMax={setMax} setMin={setMin} />
      </div>
      <div>
        <input type="text" placeholder="Min" value={minPrice} onChange={handleMinPriceChange} />
      </div>
      <div>
        <input type="text" placeholder="Max" value={maxPrice} onChange={handleMaxPriceChange} />
      </div>
    </div>

    <div className="sidebar__storage-sizes">
      <div>Storage</div>
      <div>
        <input type="checkbox" /> 32GB
      </div>
      <div>
        <input type="checkbox" /> 64GB
      </div>
      <div>
        <input type="checkbox" /> 128GB
      </div>
      <div>
        <input type="checkbox" /> 256GB
      </div>
    </div>
  </div>
);

SideBar.propTypes = {
  setMin: func,
  setMax: func,
  minPrice: string,
  maxPrice: string,
  handleMinPriceChange: func,
  handleMaxPriceChange: func,
};

export default SideBar;
