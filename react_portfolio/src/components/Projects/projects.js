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
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Eat-Da-Burger</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                        <a href="https://www.linkedin.com/in/javay-porter" rel="noopener noreferrer" target="_blank">   
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
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Team Generator</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                        <a href="https://www.linkedin.com/in/javay-porter" rel="noopener noreferrer" target="_blank">   
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
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Note Taker</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                        <a href="https://www.linkedin.com/in/javay-porter" rel="noopener noreferrer" target="_blank">   
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
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>User Directory</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                        <a href="https://www.linkedin.com/in/javay-porter" rel="noopener noreferrer" target="_blank">   
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
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Budget App</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                        <a href="https://www.linkedin.com/in/javay-porter" rel="noopener noreferrer" target="_blank">   
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
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Fitness Tracker</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                        <a href="https://www.linkedin.com/in/javay-porter" rel="noopener noreferrer" target="_blank">   
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