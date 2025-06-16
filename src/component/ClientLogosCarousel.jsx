import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ClientLogosCarousel.css";

const ClientLogosCarousel = () => {
    const logos = [
      {
        name: "K Raheja Corp",
        url: "/images/Client/a-raheja.png",
      },
      {
        name: "General Electric",
        url: "/images/Client/General_Electric.svg",
      },
      {
        name: "GSK",
        url: "/images/Client/gsk.svg",
      },
      {
        name: "Google",
        url: "/images/Client/google.svg",
      },
      {
        name: "next-rack",
        url: "/images/Client/next-rack.svg",
      },
      {
        name: "Oakridge International School",
        url: "/images/Client/Oakridge.png",
      },
      {
        name: "PhonePe",
        url: "/images/Client/PhonePe.svg",
      },
      {
        name: "TechMahindra",
        url: "/images/Client/TM.svg",
      },
      {
        name: "Verizon",
        url: "/images/Client/Verizon.svg",
      }
    ];
      

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="client-carousel-wrapper">
      <h3 className="text-center mb-4">Our Clients</h3>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <div className="logo-box">
              <img src={logo.url} alt={logo.name} className="client-logo" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientLogosCarousel;
