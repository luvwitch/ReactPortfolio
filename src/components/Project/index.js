import React from "react";
import { Row, Col, Container } from "../Grid";

function Project(props) {
  return(
      <Col size="md-4">
          <a href={props.livelink} target="_blank" rel="noopener noreferrer">
            <img className="mb-3" src={props.image} alt={props.title} className="projectimage" />
          </a>

          < br />
          <a href={props.repolink} target="_blank" rel="noopener noreferrer" className="repolink">
            {props.title}
          </a>       
          <br />
          <br />
      </Col>
  )
}

export default Project;