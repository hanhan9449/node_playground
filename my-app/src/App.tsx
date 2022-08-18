import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CRouter } from './Router';
import { BrowserRouter, Link, Router, useLocation } from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import 'animate.css/animate.min.css'

function App() {
  const location = useLocation()
  return (
    <TransitionGroup>
      <CSSTransition
      key={location.key}
      timeout={300}
      classNames={{
        enter: 'animated',
        exit: 'animated',
        enterActive: 'slideInLeft',
        exitActive: 'slideOutRight'
      }}
      >
        <CRouter/>
      </CSSTransition>
    </TransitionGroup>
    
  );
}

export default App;
