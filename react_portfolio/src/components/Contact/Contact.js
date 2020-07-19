import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Javay Porter</h2>
                        <img
                        src="https://i.ibb.co/80P184y/IMG-0210.jpg"
                        alt="javay"
                        className="contact-img"
                        />
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Information</h2>
                        <List>
                        <ListItem>
                            <ListItemContent icon="mail">javayporter@gmail.com</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="phone">(202)-590-9878</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="house">Washington, D.C.</ListItemContent>
                        </ListItem>
                        </List>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact; 