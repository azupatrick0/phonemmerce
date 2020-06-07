import React from 'react';
import Button from 'components/Button';

const Search = () => (
  <div className="search">
    <div className="sidebar__categories">
      <input type="text" placeholder="Enter Search Term (e.g iPhone x, 128GB or A1)" />
      <Button
        width={40}
        height={40}
      >
        Search &#8594;
      </Button>
    </div>
  </div>
);

export default Search;
