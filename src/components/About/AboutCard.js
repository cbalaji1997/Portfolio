import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           I am <span className="purple"> Balaji Chavan </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />I have completed my graduation in MERN stack Web - Development from Masai School
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Game
            </li>
            <li className="about-activity">
              <ImPointRight /> Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
