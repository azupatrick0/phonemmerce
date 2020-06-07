import React from 'react';
import { string } from 'prop-types';
import Button from 'components/Button';
import iPhoneXSMax from 'assets/iphone_xs_max.png';
import iPhoneXS from 'assets/iphone_xs.png';

const Card = ({
  name, price, grade, storageSize, id,
}) => (
    <div key={id}>
      <div className="card__grade">
        { grade }
      </div>

      <div className="card__image">
       <img src={name === 'iPhone XS Max' ? iPhoneXSMax : iPhoneXS } alt="card" />
      </div>

      <div className="card__description">
        <div>
          iPhone 7
        </div>
        <div>
          Unlocked | { storageSize }
        </div>
        <div>
          Unit price
        </div>
        <div>
          { price }
        </div>
        <div>
          1600 Available
        </div>
      </div>

      <div className="card__button">
        <Button
          width={30}
          height={30}
        >
          Buy
        </Button>
      </div>

    </div>
);

Card.propTypes = {
  name: string,
  price: string,
  grade: string,
  storageSize: string,
  id: string,
};

export default Card;
