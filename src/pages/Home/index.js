import React from "react";
import { Container, Row, Col } from "../../components/Grid";
import Selfie from '../../assets/me.jpg';

export default function Home(){
    return(
        <Container>
            <h1 className="title"> About Me </h1>             
            <Row>  
            <Col size="md-6" id="photo">
                <img src={Selfie} alt="Alex Kelly" id="selfie" />
            </Col> 


            <Col size="md-6" id="welcome"> 
                <div className="jumbotron">
                    <h2> Welcome! </h2>
                    <br/>
                    <p>My name is Alexandria Kelly, though I prefer to be called Alex or AK.</p> 
                    <p>I'm originally from Buffalo, NY but as of July 2020 I moved to sunny Los Angeles!</p>
                    <p>Currently I'm a student of the UCLA Extention Coding Bootcamp. </p>
                    <i class="fas fa-heart"></i>    
                </div>     
            </Col>        
        </Row>

        <Row>
            <Col size="md-12">
                <div className="card" id="aboutcard">
                    <div className="card-body landing-about" id="about">
                        <h2> Passions, Resume, & Skills</h2>
                        <br/>
                        <p className="pcolor"><strong> Passions: </strong></p> 
                        <p>Knitting, Crocheting, Weaving, Gaming, Reading, Film and TV, Roller Skating, Caring for my rabbits (Boba and Miso), Learning everything I can, Trying every new vegan food on the market </p>          
                        <p className="pcolor"><strong> Skills: </strong></p> 
                        <p> HTML, Javascript, CSS, JQuery, Web APIs, NodeJS, and through my course I expand on my coding knowledge every day!</p>           
                        <p className="pcolor"><strong> Resume: </strong></p> 
                        <a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:8e7f17a3-dd67-42d0-b4e8-7df70979cbb6" target="_blank" rel="noopener noreferrer" className="pdf"><strong> Click to access PDF </strong> </a>
                        <br />
                        <br />                 
                    </div>          
                </div>
            </Col>
        </Row>   
    </Container>
    )
}