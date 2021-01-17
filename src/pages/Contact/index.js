import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../../components/Grid";


export default function Contact(){
    return(
        <Container>
            <div className="contact">     
            <h2 className="contactheader">
                Contact</h2>

            <hr />

            <h4> 
                Email
                <br/><br/>
                <a href="mailto:itsalexkelly@gmail.com"> <i className="far fa-envelope"> </i> </a>
            </h4>

            <hr/>

            <h4>
                Call/Text
                <br /><br />
            </h4>   
            <i className="fas fa-mobile-alt"></i>
            <br /><br />
            <p className="whitefont">716.579.3028</p>  
        
            <hr/>
      
            <h4>
                Github
                <br /><br />
                <a href="https://github.com/luvwitch" target="_blank" 
                    rel="noopener noreferrer"> <i class="fab fa-github fa-3x"></i> 
                </a>
            </h4>
      
            <hr/>
      
            <h4>
                Linkedin
          
                <br /><br />
                <a href="https://www.linkedin.com/in/alexandriakelly" target="_blank" 
                    rel="noopener noreferrer"> <i class="fab fa-linkedin fa-3x"></i> 
                </a>
            </h4>
            </div>

            <br />

       </Container>
       
    )
}