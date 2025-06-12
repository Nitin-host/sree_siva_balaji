import React, { Component } from "react";
import AOS from "aos";
import { Row, Col } from "reactstrap";
import "aos/dist/aos.css";
import "../styles/ProcessSteps.css";

export default class ProcessSteps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: false,
    });
  }

  steps = [
    {
      title: "MEET & AGREE",
      description:
        "Initial meeting to understand goals and agree on the process.",
    },
    {
      title: "IDEA & CONCEPT",
      description: "Brainstorming ideas and forming the design concept.",
    },
    {
      title: "DESIGN & CREATE",
      description: "Developing detailed designs and creative outputs.",
    },
    {
      title: "BUILD & INSTALL",
      description: "Final execution: building and installing the project.",
    },
  ];

  handleClick = (index) => {
    this.setState({ activeStep: index });
  };

  render() {
    const { activeStep } = this.state;

    return (
      <div className="process-sectioncontainer text-center">
        <h2>OUR PROCESS</h2>
        <Row
          data-aos="fade-up"
          className="justify-content-center mt-4 position-relative"
        >
          {this.steps.map((step, index) => (
            <Col key={index} xs="6" sm="6" md="3"className="d-flex justify-content-center mb-4">
              <div
                className={`step-circle ${
                  activeStep === index ? "active" : ""
                }`}
                onClick={() => this.handleClick(index)}
              >
                <span>{step.title}</span>
                {activeStep === index && <div className="vertical-line" />}
              </div>
            </Col>
          ))}
        </Row>

        {activeStep !== null && (
          <div className="step-description-container">
            <div className="horizontal-connector"></div>
            <div className="step-description fade-in">
              <p>{this.steps[activeStep].description}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
