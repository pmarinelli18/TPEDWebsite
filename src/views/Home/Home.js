import React , {useState, useRef, useEffect}from 'react';
import Lottie from 'react-lottie'
import './Home.css';
import animationData from '../../vectors/tracktest.json'
import ferrisWheele from '../../vectors/FarrisWheele.json'
import { Button, Pane, Text, Heading, Tablist, Tab, Paragraph } from 'evergreen-ui'


const Home = (props) => {

    
  const Banner = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const FerrisWheele = {
    loop: true,
    autoplay: true,
    animationData: ferrisWheele,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

    return (
        <Pane >

            {/* Banner Section */}
            <Lottie options={Banner}/>
            <Pane
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="none"
            >
            </Pane>
            <Pane className = 'continueDown'>
                <p><Heading size = {600} >Connect. Create. Explore. </Heading></p>
                <p><Heading size = {600}>Learn More!</Heading></p>
                <p>V</p>
            </Pane>

            {/* Home Content */}
            <Pane className = 'HomeSection'>
                {/* TPED Introduction */}
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
                        flex={2}
                        margin={24}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <img  width = {'100%'} src = "/Annotation 2020-04-25 182153.gif"/>
                    </Pane>
                    <Pane
                        flex={2}
                        margin={24}
                        display="flex"
                        justifyContent='left'
                        alignItems="left"
                        flexDirection="column"
                    >
                        <Heading size ={800}>
                        Theme Park Engineering and Disign Club
                        </Heading>
                        <Paragraph size = {500}>
                            Theme Park Engineering and Disign Club or TPED is 
                            Lorem ipsum dolor sit amut, consetetur sadipusina 
                            elitised diam nomumy cirmod timpor invidunt
                        </Paragraph>
                    </Pane>
                </Pane>
                {/* Meet the Team */}
                <Pane width = {'100%'} display="flex"  
                        borderRadius={0}>
                    <Pane flex={2} alignItems="center" display="flex" 
                        margin={48} padding={'.5%'} flexDirection="column"> 
                    <Heading size={800}>
                        Meet The Team
                    </Heading>
                        <Paragraph size = {500}>Meet the team is 
                        Lorem ipsum dolor sit amut, consetetur sadipusina 
                        elitised diam nomumy cirmod timpor invidunt</Paragraph>
                    
                    </Pane>
                    <Pane flex={1} alignItems="center" display="flex" paddingRight={'20px'}>
                    <Heading size={600} >
                    <Lottie options={FerrisWheele}/>
                    </Heading>
                    </Pane>
                </Pane>
            </Pane>                
        </Pane>
    )
}
export default Home;