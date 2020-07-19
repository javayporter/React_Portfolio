import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src="https://i.ibb.co/PwxLzLT/IMG-1054.png"
                        alt="avatar"
                        className="avatar-img"
                        />
                        
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <h2>JAVAY PORTER</h2>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | Javascript | Node.js | React | MongoDB</p>
                            <div className="social-links">
                                
                                {/*LinkedIn */}
                                <a href="https://www.linkedin.com/in/javay-porter" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i> 
                                </a>

                                {/*GitHub*/}
                                <a href="https://github.com/javayporter" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-github-square" aria-hidden="true"></i> 
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage; 