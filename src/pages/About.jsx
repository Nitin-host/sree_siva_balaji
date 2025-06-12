import React from "react";
import TeamMemberCard from "../utils/TeamCard";
import { Row, Col } from "reactstrap";
import Aos from "aos";
import '../styles/About.scss'

export default function About() {
  React.useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, // animate every time it enters the viewport
      mirror: true,
      easing: "ease-in-out",
    });
  }
  , []);
  
    const teamMembers = [
      {
        id: 1,
        name: "Vinay Guptha",
        role: "Architect & Interior Designer",
        // image:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
        image: "/images/team-members/vinay.jpg",
        bio: "Vinay Guptha is a renowned architect and interior designer crafting timeless, sustainable spaces that blend creativity, functionality, and human-centric design to inspire and connect.",
      },
      {
        id: 2,
        name: "Bob Smith",
        role: "Backend Developer",
        image:
          "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
        bio: "Bob specializes in building scalable backend services with Node.js and PostgreSQL.",
      },
      {
        id: 3,
        name: "Carla Green",
        role: "DevOps Engineer",
        image:
          "https://images.unsplash.com/photo-1628890927602-b5f93d3e181e?auto=format&fit=crop&w=400&q=80",
        bio: "Carla automates infrastructure and ensures smooth deployments using Docker and AWS.",
      },
      {
        id: 4,
        name: "David Lee",
        role: "Project Manager",
        image:
          "https://images.unsplash.com/photo-1544723495-432537d7342c?auto=format&fit=crop&w=400&q=80",
        bio: "David brings agile leadership to the team, keeping everyone aligned and delivering on time.",
      },
    ];
      
    return (
      <div className="about-container">
        <div className="image-container">
          <img
            src="/images/TECH-MAHINDRA-HYD/T (1).jpeg"
            alt="Nature Background"
            className="about-image"
          />
          <div className="text-overlay">
            <h1>About Us</h1>
          </div>
        </div>
        <div className="golden-line"></div>
        <p>This is the about page of our application.</p>
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <Row>
          {teamMembers.map((member) => (
            <Col data-aos="zoom-in" md="4" sm="6" xs="12" className="mb-5" key={member.id}>
              <TeamMemberCard member={member} />
            </Col>
          ))}
        </Row>
      </div>
    );
}