'use strict';

import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';

import NeighborhoodsPage from './Neighborhoods/NeighborhoodsPage';
import FrontPage from './Front/FrontPage';

class BurgerMenu extends React.Component {
  render() {
    return (
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="navbar-dropdown">
              <a className="navbar-item">Test</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Burger extends React.Component {
  render() {
    const button = (
      <button className={`button navbar-burger ${this.props.burgerActive && 'is-active'}`} onClick={this.props.handleBurgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    );
    return button;
  }
}

class Menu extends React.Component {
  render() {
    if (this.props.burgerActive) {
      return (
        <div className="navbar-menu is-active">
          <div className="navbar-start">
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/neighborhoods" className="navbar-item">Neighborhoods</Link>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/neighborhoods" className="navbar-item">Neighborhoods</Link>
        </div>
      </div>
    );
  }
}

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerActive: false
    };
  }
  handleBurgerClick() {
    this.setState({
      burgerActive: !this.state.burgerActive
    });
  }
  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">SF Housing Guide</Link>
          <Burger burgerActive={this.state.burgerActive} handleBurgerClick={this.handleBurgerClick.bind(this)}/>
        </div>
        <Menu burgerActive={this.state.burgerActive}/>
      </nav>
    );
  }
}

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={FrontPage}/>
        <Route path="/neighborhoods" component={NeighborhoodsPage}/>
      </div>
    );
  }
}

export default class Navbar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Links/>
          <Routes/>
        </div>
      </BrowserRouter>
    );
  }
}
