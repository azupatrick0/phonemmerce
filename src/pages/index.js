import React from 'react';
import Card from 'components/Card';
import SideBar from 'components/SideBar';
import Search from 'components/Search';
import gadgets from 'assets/phone-mac-tablet.png';


const Home = () => (
  <div className="home">
    <div className="home__header">
      <div className="home__header-description">
        <div>Shop Our Latest Available Stocks Here</div>
        <div>
          <Search />
        </div>
      </div>
      <div className="home__header-image">
        <img src={gadgets} height="300" width="500" alt="gadget" />
      </div>
    </div>

    <div className="home__body">
      <div className="home__sidebar">
       <SideBar />
      </div>
      <div className="home__cards">
        <Card name={'iPhone XS Max'} price={'$450'} grade={'A1'} storageSize={'128gb'} />
        <Card name={'iPhone XS Max'} price={'$450'} grade={'A1'} storageSize={'128gb'} />
        <Card name={'iPhone XS Max'} price={'$450'} grade={'A1'} storageSize={'128gb'} />
      </div>
    </div>
  </div>
);

export default Home;
