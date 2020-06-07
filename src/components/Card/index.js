/* eslint-disable no-nested-ternary */
import React from 'react';
import { string } from 'prop-types';
import Button from 'components/Button';
import iPhoneXSMax from 'assets/iphone_xs_max.png';
import iPhoneXS from 'assets/iphone_xs.png';
import iPhoneXR from 'assets/iphone_xr.png';
import iPhoneX from 'assets/X.png';
import iPhone8Plus from 'assets/iphone_8_plus.png';
import iPhone8 from 'assets/iphone_8.png';
import iPhone7Plus from 'assets/iphone_7_plus.png';
import iPhone7 from 'assets/iphone_7.png';
import iPhone6SPlus from 'assets/iphone_6s_plus.png';
import iPhone6S from 'assets/iphone_6s.png';
import iPhone6Plus from 'assets/iphone_6_plus.png';
import iPhone6 from 'assets/iphone_6.png';
import iPhoneSE from 'assets/iphone_se.png';

const Card = ({
  name, price, grade, storageSize, id,
}) => (
    <div key={id} className="card">
      <div className="card__grade">
        { grade }
      </div>

      <div className="card__image">
       <img height="120" width="150" src={name === 'iPhone XS Max' ? iPhoneXSMax
         : name === 'iPhone XR' ? iPhoneXR
           : name === 'iPhone X' ? iPhoneX
             : name === 'iPhone 8 Plus' ? iPhone8Plus
               : name === 'iPhone 8' ? iPhone8
                 : name === 'iPhone 7 Plus' ? iPhone7Plus
                   : name === 'iPhone 7' ? iPhone7
                     : name === 'iPhone 6S Plus' ? iPhone6SPlus
                       : name === 'iPhone 6S' ? iPhone6S
                         : name === 'iPhone 6 Plus' ? iPhone6Plus
                           : name === 'iPhone 6' ? iPhone6
                             : name === 'iPhone SE' ? iPhoneSE
                               : iPhoneXS } alt="card" />
      </div>

      <div className="card__description">
        <div>
          { name }
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
          width={75}
          height={25}
        >
          BUY
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
