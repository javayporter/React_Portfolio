import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Projects from '../Projects/projects';
import Resume from '../Resume/Resume';
import LandingPage from '../LandingPage/LandingPage';
import Overview from '../Overview/Overview';
import Contact from '../Contact/Contact';
// import AboutMe from '../AboutMe/AboutMe';
// import Contact from '../Contact/Contact';
// import Projects from '../Projects/Projects';
// import Resume from '../Resume/Resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} /> 
    <Route path="/overview" component={Overview} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
    {/* <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    //  */}
  </Switch>
)

export default Main;