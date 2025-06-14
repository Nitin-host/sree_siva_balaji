import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ClientLogosCarousel.css";

const ClientLogosCarousel = () => {
    const logos = [
      {
        name: "Microsoft",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      },
      {
        name: "Netflix",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      },
      {
        name: "Apple",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      },
      {
        name: "Google",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      },
      {
        name: "LinkedIn",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      },
      {
        name: "Facebook",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      },
      {
        name: "Instagram",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Instagram.svg",
      },
      {
        name: "PayPal",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
      },
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
