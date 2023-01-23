import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';
import React from 'react';
import SideBar from './Pages/SideBar/SideBar';
function App() {
  return (
    <>
      <React.Fragment>
        <BrowserRouter>
          <SideBar />
        </BrowserRouter>
      </React.Fragment>
    </>
  );
}

export default App;
