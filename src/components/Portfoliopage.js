import React, {Component} from 'react';
import './Portfoliopage.css';
import ContactInfo from '../components/ContactInfo';
import mepic from '../images/me.jpg';
import commerce1 from '../images/commerce1.png';
import SchoolIcon from '@material-ui/icons/School';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import MaxWidthDialog from '../components/MaxWidthDialog'
import EmailIcon from '@material-ui/icons/Email';
export default class Portfoliopage extends Component {
    state = {isOpen: false};
    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    }
    render() {
        return (
            <div>
                <div className="intro">
                    <h1 className="intro-header">Jacob Gleinser</h1>
                    <h2 className="intro-description">Full-Stack Web Developer</h2>
                    <h3 className="intro-contact"> <EmailIcon/> Jagleinser@outlook.com</h3>
                </div>
                <Container>
                    <Row style={{padding: '1vw'}}></Row>
                <Row>
                    <Col>
                    <div className="about-text">
                                 <p>I enjoy working with Javascript whether its vanilla JS, React, Vue, Angular, Express, or Node. <br/><br/> I graduate with a Bachelors in Computer Science from the University of Missouri in December 2020.
                                <br/>
                                <br/>
                                Besides coding, I enjoy chess and piano.
                                <br/>
                                <br/>
                                Brief experience with: <br/> </p>
                                <ul>
                                    <li>MySQL</li>
                                    <li>PHP</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>C++</li>
                                </ul>
                        </div>
                        
                    </Col>
                    <Col><img className="about-picture headshot headshot-3" src={mepic} alt="Jacob Gleinser"></img></Col>
                </Row>
                </Container>

                <div style={{padding: '1.5vw'}}></div>

                <Container>
                    <Row></Row>
                    <Col style={{paddingBottom: '2vw'}}><h2 className="ProjectsTitle"> Personal Projects</h2> </Col>
                <Row>
                    <Col>
                    <div className="about-text">
                                <p><SchoolIcon/> Senior Project with Commerce Bank<br/> <br/>
                                A full-stack application utilizing Angular, Express, and MongoDB that simulated a banking experience.
                                Users were able to:</p>
                                <ul>
                                    <li>Make accounts</li>
                                    <li>Make transactions</li>
                                    <li>Create rules for transactions that would trigger notifications</li>
                                </ul>
                                <p>
                                <br/>
                                What I learned: </p>
                                <ul>
                                    <li>Persistent user authentication</li>
                                    <li>Back-end API testing with Postman</li>
                                    <li>The rxjs Observable/Observer model</li>
                                </ul></div>
   
                    </Col>
                    <Col>
                    <Row>
                    <Col><img className="project-picture" src={commerce1} alt="Jacob Gleinser"></img></Col>
                        </Row>
                        <Row style={{paddingTop: '.5vw'}}><MaxWidthDialog/></Row>
                    
                    </Col>
                </Row>
             
                </Container>
                <ContactInfo/>
                
                
                
            </div>
            
        )
    }
  
}
