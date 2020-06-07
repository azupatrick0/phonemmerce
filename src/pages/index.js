/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import * as Sentry from '@sentry/browser';
import { debounce } from 'debounce';
import axios from 'axios';
import Card from 'components/Card';
import SideBar from 'components/SideBar';
import Search from 'components/Search';
import gadgets from 'assets/phone-mac-tablet.png';
import Loader from 'components/Loader';

const Home = () => {
  const [phones, setPhones] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState('');
  const [paginationSearchValue, setPaginationSearchValue] = useState('');
  const [buyRequest, setBuyRequest] = useState(false);
  const [loadRequest, setLoadRequest] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [minPrice, setMin] = useState('');
  const [maxPrice, setMax] = useState('');

  const fetchPhones = async (limit, page, search, min, max) => {
    setBuyRequest(!buyRequest);
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}limit=${limit}&page=${page}&search=${search}&min=${min}&max=${max}&type=${buyRequest ? 'buyrequest' : ''}`);

      setLoading(false);
      setPhones(response.data.data.phones.data);
      setPageCount(response.data.data.phones.metadata.pages);
      setSearchValue('');
    } catch (error) {
      Sentry.captureException(error);
    }
  };

  useEffect(() => {
    fetchPhones(20, 1, 'i', '', '');
  }, []);

  const handleSearch = () => {
    if (!searchValue) {
      setSearchError(true);
    } else {
      setSearchError(false);
      setPaginationSearchValue(searchValue);
      fetchPhones(20, 1, searchValue, '', '');
    }
  };

  const handleSearchValueChange = (e) => {
    setSearchError(false);
    setSearchValue(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMin(e.target.value);
  };


  const handleMaxPriceChange = (e) => {
    setMax(e.target.value);
  };

  const handlePagination = async (selected) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    fetchPhones(20, selected + 1, paginationSearchValue, minPrice, maxPrice);
  };

  useEffect(() => {
    if (minPrice && maxPrice) {
      debounce(fetchPhones(20, 1, '', minPrice, maxPrice), 1000);
    }
  }, [minPrice, maxPrice]);

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header-description">
          <div>Shop Our Latest <br /> Available Stocks Here</div>
          <div>
            <Search value={searchValue} onChange={handleSearchValueChange} onClick={handleSearch} />
            <span>{searchError && 'please enter search term'}</span>
          </div>
        </div>
        <div className="home__header-image">
          <img src={gadgets} alt="gadget" />
        </div>
      </div>

      <div className="home__body">
        <div className="home__sidebar">
          <SideBar
            setMin={setMin}
            setMax={setMax}
            minPrice={minPrice}
            maxPrice={maxPrice}
            handleMinPriceChange={handleMinPriceChange}
            handleMaxPriceChange={handleMaxPriceChange}
          />
        </div>
        <div className="home__cards">
          {
            loading ? <Loader />
              : phones && phones.length ? phones.map(({
                name, grade, price, storageSize, _id,
              }) => <Card
                  name={name}
                  price={`$${price}`}
                  grade={grade}
                  storageSize={storageSize}
                  id={_id}
                  key={_id}
                />) : 'No phones found'
          }
        </div>
      </div>

      <div className="pagination__block">
        {
          <ReactPaginate
            previousLabel="&#8592;"
            nextLabel="&#8594;"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={+pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={({ selected }) => handlePagination(selected)}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
          />
        }
      </div>

      <div className="load__iphones" onMouseLeave={() => setLoadRequest(false)} onMouseEnter={() => setLoadRequest(true)} onClick = {() => {
        fetchPhones(20, 1, 'i', '', '');
      }
      }>
        <div>Load</div>
        <div>{ loadRequest && buyRequest ? 'Buy Request' : loadRequest && !buyRequest ? 'Sell Request' : 'IPhones' }</div>
      </div>
    </div>
  );
};

export default Home;
