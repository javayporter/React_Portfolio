import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './components/Nav/Nav'
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import  Main from './components/Main/Main';
import { Link } from 'react-router-dom';

// import Main from './components/Main/Main';
// import Home from './components/Projects/Home'
// import Main from './components/Main/Main';
// import { Link } from 'react-router-dom';
// import Router from 'react-router-dom';
// import Summary from './components/Projects/projects'
// import Jumbo from './components/Jumbotron/jumbotron';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="MY REACT PORTFOLIO" scroll>
              <Navigation>
                  <Link to="/overiew">Overview</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <Link to="/overiew">Overview</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/> 
          </Content>
      </Layout>
  </div>
    );
  }
}


export default App;
