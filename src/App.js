import React from 'react'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Page from './contents/Page';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
