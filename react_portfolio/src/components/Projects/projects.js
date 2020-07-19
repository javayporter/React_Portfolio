import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardText, CardMenu, CardTitle, CardActions, Button, IconButton } from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState ({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

            <section className="projects-grid">
                <Grid>
                    <Cell col ={12}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '306px', background: 'url(https://i.ibb.co/T0Zh2hJ/2020-07-18-21-24-17.png) center / cover'}}>Eat-Da-Burger</CardTitle>
                        <CardText>
                        <p>Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.</p>
                        <p>Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.</p>
                        <p>Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.</p>
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/javayporter/Burger" rel="noopener noreferrer" target="_blank">   
                        <Button colored>GitHub Repo</Button>
                        </a>
                        </CardActions>
                        <CardActions border>
                        <a href="https://jpeat-da-burger.herokuapp.com/" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Deployed App</Button>
                        </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col ={12}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '306px', background: 'url(https://i.ibb.co/T8KybnC/2020-07-18-19-35-36.png) center / cover'}}>Team Generator</CardTitle>
                        <CardText>
                        Team Generator is a software engineering team generator command line application. The application prompts the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns.
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/javayporter/Team_Generator" rel="noopener noreferrer" target="_blank">   
                        <Button colored>GitHub Repo</Button>
                        </a>
                        </CardActions>
                        <CardActions border>
                        <a href="https://jpteam-generator.herokuapp.com/" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Deployed App</Button>
                        </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col ={12}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '176px', background: 'url(https://i.ibb.co/5hrf5B3/2020-07-19-19-13-49.png) center / cover'}}>Note Taker</CardTitle>
                        <CardText>
                        Note Taker is an application that can be used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a JSON file.
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/javayporter/Note_Taker" rel="noopener noreferrer" target="_blank">   
                        <Button colored>GitHub Repo</Button>
                        </a>
                        </CardActions>
                        <CardActions border>
                        <a href="https://www.linkedin.com/in/javay-porter" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Deployed App</Button>
                        </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col ={12}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '306px', background: 'url(https://i.ibb.co/VVc2dMZ/2020-07-18-16-02-30-copy.png) center / cover'}}>User Directory</CardTitle>
                        <CardText>
                        React Employee Directory
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/javayporter/User_Directory" rel="noopener noreferrer" target="_blank">   
                        <Button colored>GitHub Repo</Button>
                        </a>
                        </CardActions>
                        <CardActions border>
                        <a href="https://jpsuer-directory.herokuapp.com/" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Deployed App</Button>
                        </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col ={12}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Budget App</CardTitle>
                        <CardText>
                        Budget App allows users to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online. Offline Functionality:

                    <p>* Enter deposits offline</p>
                    <p>* Enter expenses offline</p>
                    <p>* When brought back online:</p>
                    <p>** Offline entries should be added to tracker.</p>

                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/javayporter/Budget_App" rel="noopener noreferrer" target="_blank">   
                        <Button colored>GitHub Repo</Button>
                        </a>
                        </CardActions>
                        <CardActions border>
                        <a href="https://jp-budget-app.herokuapp.com/" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Deployed App</Button>
                        </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col ={12}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Fitness Tracker</CardTitle>
                        <CardText>
                        Awesome Fitness Tracker
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/javayporter/Fitness_Tracker" rel="noopener noreferrer" target="_blank">   
                        <Button colored>GitHub Repo</Button>
                        </a>
                        </CardActions>
                        <CardActions border>
                        <a href="https://www.linkedin.com/in/javay-porter" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Deployed App</Button>
                        </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            </section>
            
            </div>
        )
    }
}

export default Projects;