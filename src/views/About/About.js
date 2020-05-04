import React , {useState, useRef, useEffect}from 'react';
import Lottie from 'react-lottie'
import './About.css';
import FreeFall from '../../vectors/FreeFall.json'
import { Button, Pane, Text, Heading, Tablist, Tab, Paragraph } from 'evergreen-ui'


const About = (props) => {

    const freeFall = {
        loop: true,
        autoplay: true,
        animationData: FreeFall,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return(
        <Pane 
                    className = 'introduction'
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="row"
                    paddingLeft = "10%"
                    paddingRight = "10%"
                >
                    <Pane
                        flex={6}
                        margin={24}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <p><Text>This is the about page</Text></p>
                        <p><Text>In Progress</Text></p>
                    </Pane>
                    <Pane
                        flex={1}
                        margin={24}
                        display="flex"
                        justifyContent='left'
                        alignItems="left"
                        flexDirection="column"
                    >
                        <Lottie options={freeFall}/>
                    </Pane>
            
            
        </Pane>
    )
}
export default About;