import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Button from '@material-ui/core/Button';
import { ThemeProvider} from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import './Contactinfo.css';

const theme1 = createMuiTheme({
    palette: {
      primary: {
        main: red[400],
      },
      secondary: {
        main: green[500],
      },
    },
  });


export default class ContactInfo extends Component {

    
    render() {
        return (
            <ThemeProvider theme = {theme1}>
            <div className = "contactInfo">
                <Row>
                    <Col> <p className="aboutSite">This website was built and designed by Jacob Gleinser</p></Col>
                </Row>
                <Row>
                    <div style={{paddingBottom: '.5vw'}}></div>
                </Row>
                <Row>
                    <Col> <Button onClick={() => {window.location.href = "https://github.com/jacobalang/PersonalWebsite"; }} variant ="outlined" color="primary"> View Source on Github</Button></Col>
                </Row>
                <Row>
                </Row>
                
            </div>

        
            </ThemeProvider>
        )
    }
}