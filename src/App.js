import React , {useState, useRef, useEffect}from 'react';
import Lottie from 'react-lottie'
import './App.css';
import Component1 from './Components/Component1/Component1'
import { Button, Pane, Text, Heading, Tablist, Tab, Paragraph } from 'evergreen-ui'

import Home from './views/Home/Home'
import About from './views/About/About'
import Events from './views/Events/Events'
import DesignTeam from './views/DesignTeam/DesignTeam'
import ContactUs from './views/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'


const App = (props) => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  let state = {
    names: ['Home', 'About', 'Events',  'Design Team', 'Contact Us'],
    tabs: [<Home/>, <About/>, <Events/>, <DesignTeam/>, <ContactUs/>]
  }

  let width = useCurrentWitdh();


  const Navbar = () => {
    console.log(width);
    if (width > 600)
      return(
        <Pane width = {'100%'} display="flex" padding={'1%'}  position= 'fixed' zIndex= {2}>
          <Pane flex={1} height ="0px">
            <Button height={state.value} appearance="minimal" onClick = {() => setSelectedIndex(0)} >
          <img height = '40px' src={require("./vectors/TPEDFlatLogo.svg")}/>
          </Button>
          </Pane>
          <Pane>
            {/* Below you can see the marginRight property on a Button. */}
            <Tablist  flexBasis={240} marginRight={24}>
              {state.names.map((tab, index) => (
                <Tab
                  key={tab}
                  id={tab}
                  onSelect={() => setSelectedIndex(index)}
                  isSelected={index === state.selectedIndex}
                  aria-controls={`panel-${tab}`}
                >
                  <Heading size = {600} >{tab} </Heading>
                </Tab>
              ))}
            </Tablist>



            {/* <Button marginRight={16}>About</Button>
            <Button marginRight={16}>Events</Button>
            <Button marginRight={16}>Design Team</Button>
            <Button marginRight={16}>Contact Us</Button>
            <Button appearance="primary">Primary Button</Button> */}
          </Pane>
        </Pane>
      )
    else
        return(
          <Pane width = {'100%'} display="flex" padding={'.5%'} background="#EDEBE9" borderRadius={0} position= 'fixed'>
            <Pane flex={1} alignItems="center" display="flex">
              <img height = '35px' src={require("./vectors/TPEDFlatLogo.svg")}/>
            </Pane>
            <Pane>
              {/* Below you can see the marginRight property on a Button. */}
              <Button marginRight={16}>About</Button>
            </Pane>
          </Pane>
        )

  }

  return (
    <Pane className ='App'>
      {Navbar()}
      
      <Pane  flex="1">
        {state.tabs.map((tab, index) => (
          <Pane
            key={tab}
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={tab}
            aria-hidden={index !== selectedIndex}
            display={index === selectedIndex ? 'block' : 'none'}
          >
            {tab}
          </Pane>
        ))}
      </Pane>
      <Footer/>
    </Pane>
  );
}

export default App;




const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

function useCurrentWitdh() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 50);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}
