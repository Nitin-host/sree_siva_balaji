import React, { useEffect } from 'react';
import AutoCarousel from '../utils/AutoCarousel ';
import BackgroundImageHolder from '../utils/BackgroundImageHolder ';
import {Row, Col} from 'reactstrap';
import CountUp from 'react-countup-animate';
import Card from '../utils/Card'
import WeDoTyping from '../component/WeDoTyping';
import "../styles/Home.scss";
import Aos from 'aos';
import ProcessSteps from '../component/ProcessSteps ';
import ClientLogosCarousel from '../component/ClientLogosCarousel';

export default function Home() {
  useEffect(()=> {
    Aos.init({
      duration: 500,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);
    const carouselItems = [
      {
        src: "/images/TECH MAHINDRA-CHENNAI/TC (1).jpeg",
        altText: "Slide 1",
        caption: {
          title: "First Slide",
          text: "This is the first slide",
        },
      },
      {
        src: "/images/TECH MAHINDRA-CHENNAI/TC (2).jpeg",
        altText: "Slide 2",
        caption: {
          title: "Second Slide",
          text: "This is the second slide",
        },
      },
      {
        src: "/images/TECH MAHINDRA-CHENNAI/TC (3).jpeg",
        altText: "Slide 3",
        caption: {
          title: "Third Slide",
          text: "This is the third slide",
        },
      },
      {
        src: "/images/1-PROJECT/1st-main-image.jpeg",
        altText: "Project-1",
        caption: {
          title: "Project 1",
          text: "Project 1 description",
        },
      },
      {
        src: "/images/3RD -PROJECT/3rd-main-image.jpeg",
        altText: "Slide 3",
        caption: {
          title: "Third Slide",
          text: "This is the third slide",
        },
      },
      {
        src: "/images/4TH-PROJECT/4th-main-image.jpeg",
        altText: "Prpject-4",
        caption: {
          title: "Project 4",
          text: "This is Project 4",
        },
      },
    ];
    const services = [
      {
        title: "Turnkey Projects",
        description:"We specialize in ready-to-move projects that are highly cost-effective. Our team of experienced professionals work tirelessly for you to provide a better future.",
      },
      {
        title: "DESIGN",
        description:
          "Our unique methods are integrated with advanced technology to create a sophisticated and classy place to live.",
      },
      {
        title: "CIVIL",
        description:
          "We follow confident practices with a transparent approach. We have a competent construction process which enables higher growth.",
      },
      {
        title: "INTERIOR",
        description:
          "Our designs target the customers' needs and want with better quality and a scenic area.",
      },
      // You can easily add more items here
    ];
    
    return (
      <div className="home-container">
        <AutoCarousel items={carouselItems} />
        <div className="golden-line"></div>
        <BackgroundImageHolder
          imageUrl="/images/section-background.webp"
          parallaxSpeed={0.7}
          overlayColor="rgba(0,0,0,0.3)"
          contentPosition="center"
        >
          <Row>
            <Col data-aos="fade-up-right" xs="12" md="6">
              <div className="headline-wrapper text-start">
                <h3 className="bt_bb_headline_tag">
                  <span className="bt_bb_headline_superheadline">
                    PHILOSOPHY
                  </span>
                  <span className="bt_bb_headline_content">
                    <span>Welcome to Our Website</span>
                  </span>
                </h3>
              </div>
              <p>
                This is compelling content that appears over the background
                image
              </p>
              {/* <button className="cta-button">Learn More</button> */}
            </Col>
            <Col
              data-aos="fade-up-left"
              xs="12"
              md="6"
              className="image-container"
            >
              <div className="content-image">
                <img
                  src="/images/TECH MAHINDRA-CHENNAI/TC (7).jpeg"
                  alt="Company Logo"
                />
              </div>
            </Col>
          </Row>
          <Row data-aos="fade-up" className="g-4">
            <Col xs={12} md={4} className="text-center">
              <CountUp
                number={40}
                startDelay={0.5}
                style={{ fontSize: "60px", color: "#d59e1a" }}
              />
              <h6 className="text-start">NUMBER OF PROJECTS HANDLED</h6>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <CountUp
                number={1234}
                endDelay={1}
                style={{ fontSize: "60px", color: "#d59e1a" }}
              />
              <h6 className="text-start">MILLION SFT BUILT</h6>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <CountUp
                number={10}
                startDelay={0.5}
                endDelay={0.5}
                style={{ fontSize: "60px", color: "#d59e1a" }}
              />
              <h6 className="text-start md-2">YEARS OF EXPERIENCE</h6>
            </Col>
          </Row>
        </BackgroundImageHolder>
        <Row>
          <Col xs={12} md={3} className="text-center">
            <img
              src="/images/We-Do-Main-Image.jpg"
              alt="We Do Main"
              className="we-do-main-image"
              loading="lazy"
            />
          </Col>
          <Col xs={12} md={9} className="headline-wrapper">
            <h2 className="text-start bt_bb_headline_tag">
              {/* <span className="bt_bb_headline_superheadline">
              CHOOSE YOUR TYPE
            </span> */}
              <WeDoTyping />
            </h2>
            <Row xs={1} md={2} className="text-start g-4">
              {services.map((service, index) => (
                <Col
                  key={index}
                  className="service-item p-3"
                  data-aos='fade-left'
                  data-aos-delay={index * 100}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <ProcessSteps/>
        {/* <Row className="cards-container p-2">
          <Col data-aos="fade-up-right" xs={12} md={6} lg={6}>
            <Card
              title="Commercial Interior"
              imageUrl="/images/TECH MAHINDRA-CHENNAI/TC (1).jpeg"
              link="/commercial"
            />
          </Col>
          <Col data-aos="fade-up-left" xs={12} md={6} lg={6}>
            <Card
              title="Residential Interior"
              imageUrl="/images/TECH MAHINDRA-CHENNAI/TC (2).jpeg"
              link="/residential"
            />
          </Col>
        </Row> */}
        <Row className="construction-row">
          <Col data-aos="fade-up-right" xs={12} md={8}>
            <div className="construction-image-container">
              <img
                src="/images/commercial.jpg"
                alt="construction-image"
                loading="lazy"
              />
            </div>
          </Col>
          <Col
            data-aos="fade-up-left"
            xs={12}
            md={4}
            className="constructions-wrapper"
          >
            <h2 className="bt_bb_headline_tag">
              <span className="bt_bb_headline_superheadline">
                SETTING HIGH STANDARDS
              </span>
              <span className="bt_bb_headline_content">
                <span>A Company You Can Trust</span>
              </span>
            </h2>
            <p className="text-start">
              We are a company that is committed to delivering high-quality
              construction projects. Our team of experts is dedicated to
              ensuring that every project meets the highest standards of quality
              and safety.
            </p>
          </Col>
        </Row>
        <div className="golden-line mx-2"></div>
        <Row className="construction-row">
          <Col
            data-aos="fade-up-right"
            xs={12}
            md={4}
            className="constructions-wrapper"
          >
            <h2 className="bt_bb_headline_tag">
              <span className="bt_bb_headline_superheadline">
                WITNESS A PARADISE
              </span>
              <span className="bt_bb_headline_content">
                <span>Pioneering New Technologies</span>
              </span>
            </h2>
            <p className="text-start">
              We thrive on the diversity and dynamism of the latest technologies
              and bring a sense of luxury to your dream home!
            </p>
          </Col>
          <Col data-aos="fade-up-left" xs={12} md={8}>
            <div className="construction-image-container">
              <img
                src="/images/residential.jpg"
                alt="construction-image"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
        <BackgroundImageHolder
          imageUrl="/images/section-background.webp"
          parallaxSpeed={0.7}
          overlayColor="rgba(0,0,0,0.3)"
          contentPosition="center"
        >
          <div className="headline-wrapper text-start">
            <h3 className="bt_bb_headline_tag">
              <span className="bt_bb_headline_superheadline">
                OUR FRAMEWORK
              </span>
              <span className="bt_bb_headline_content">
                <span>Driving Values Through Sustainability</span>
              </span>
            </h3>
          </div>
        </BackgroundImageHolder>
        <ClientLogosCarousel/>
        <div className="contact-container">
          <Row>
            <Col xs={8} md={7}>
              <h1 className="contact-h1 text-start text-black">
                Contact us for more details
              </h1>
            </Col>
            <Col xs={4} md={4} className="text-end">
              <button
                className="contact-button"
                onClick={() => (window.location.href = "/contact")}
              >
                <span className="button-text">Contact Us</span>
                <span className="button-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Col>
          </Row>
        </div>
        {/* <BackgroundImageHolder
          imageUrl="/images/contact-us-background-jpg.webp"
          parallaxSpeed={0.1}
          overlayColor="rgba(0,0,0,0.3)"
          contentPosition="center"
          className="contact-us-background"
        >
          <Row>
            <Col xs={12} md={7}>
              <h1 className="contact-h1 text-start text-black">
                Contact us for more details
              </h1>
            </Col>
            <Col xs={12} md={4} className="text-end">
              <button
                className="contact-button"
                onClick={() => (window.location.href = "/contact")}
              >
                <span className="button-text">Contact Us</span>
                <span className="button-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Col>
          </Row>
        </BackgroundImageHolder> */}
      </div>
    );
}