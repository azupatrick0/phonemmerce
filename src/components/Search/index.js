import React from 'react';
import Button from 'components/Button';
import { func, string } from 'prop-types';

const Search = ({ value, onChange, onClick }) => (
  <div className="search">
    <input type="text" placeholder="Enter Search Term (e.g iPhone x, 128GB or A1)" value={value} onChange={onChange} />
    <Button
      width={90}
      height={40}
      onClick={onClick}
    >
      SEARCH &#8594;
    </Button>
  </div>
);

Search.propTypes = {
  value: string,
  onChange: func,
  onClick: func,
};

export default Search;
