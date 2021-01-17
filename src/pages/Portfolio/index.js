import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import Project from "../../components/Project";
import projects from "../../projects.json";

class Portfolio extends Component{
    state = {
        projects
    };

    render(){
        return(
            <div>
                <h1>Portfolio</h1> 

                <Container>
                    <div className="card" id="future">
                        Click an image to go to the live deployment. Click on the title below to view the repository.
                    </div>           
                </Container> 
                <Row>
                    {this.state.projects.map(project => (
                    <Project
                        id={project.id}
                        title={project.title}
                        image={project.image}
                        repolink={project.repolink}
                        livelink={project.livelink}
                    />
                    ))}
                </Row>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <div class="card" id="future">
                                And More Projects Coming Soon
                            </div>
                        </Col>   
                    </Row>    
                </Container>
            </div>
        )
    }
}

export default Portfolio;