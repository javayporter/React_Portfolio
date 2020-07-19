import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                
                    <img
                    src="https://i.ibb.co/mBCNGqw/2020-07-19-19-42-19.png"
                    alt="resume-page1"
                    className="resume-img"
                    />
                </Cell>
                <Cell col={6}>
                    
                    <img
                    src="https://i.ibb.co/p0qS4kb/2020-07-19-19-42-26.png"
                    alt="resume-page2"
                    className="resume-img"
                    />
                </Cell>  
            </Grid>

        </div>
        )
    }
}

export default Resume; 