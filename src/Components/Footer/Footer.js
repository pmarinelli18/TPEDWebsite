import React , {useState, useRef, useEffect}from 'react';
import './Footer.css';
import { Button, Pane, Text, Heading, Tablist, Tab, Paragraph } from 'evergreen-ui'

const Footer = (props) => {
        return(
            <div className="fixed-bottom"> 
                <Pane width = {'100%'} height = {'150px'}display ="flex" background = "darkgrey">
                    <Pane flex={1} className = 'lowerFooter'>
                        <Heading size={500}>
                            TPED
                        </Heading>
                        </Pane>
                        <Pane flex={1} className = 'lowerFooter'>
                        <Heading size={500}>
                            Instagram
                        </Heading>
                        <Heading size={500}>
                            Facebook
                        </Heading>
                        </Pane>
                    </Pane>
                <Pane width = {'100%'} display="flex" padding={'.5%'} background="grey" >
                    
                    <Pane className = 'lowerFooter' flex={1} >
                        <Heading size = {600}>Theme Park Engineering and Design Club</Heading>
                    </Pane>
                </Pane>
            </div>
        )
    }
    export default Footer;