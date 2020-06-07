import React from 'react';
import PriceSlider from 'components/PriceSlider';

const SideBar = () => (
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
        <PriceSlider />
      </div>
      <div>
        <input type="text" placeholder="Min" />
      </div>
      <div>
        <input type="text" placeholder="Max" />
      </div>
    </div>

    <div className="sidebar__categories">
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

export default SideBar;
