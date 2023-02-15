import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route  path = "/" element = {<ProductListing />}></Route>
        <Route  path = "/product/:productId" element = {<ProductDetail />}></Route>
        <Route>404 NOT fOUND!</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
