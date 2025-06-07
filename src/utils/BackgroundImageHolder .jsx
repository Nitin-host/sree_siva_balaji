import { useEffect, useRef } from "react";
import "../styles/BackgroundImageHolder.scss";

const BackgroundImageHolder = ({
  imageUrl,
  parallaxSpeed = 0.7,
  className = "",
  overlayColor = "rgba(0,0,0,0.5)", // Optional overlay
  contentPosition = "center", // 'top', 'center', 'bottom'
  children,
}) => {
  const holderRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const element = holderRef.current;
    if (!element) return;

    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        // Disable transform for small screens
        element.style.transform = "translate3d(0, 0, 0)";
        if (contentRef.current) {
          contentRef.current.style.transform = "translate3d(0, 0, 0)";
        }
        return;
      }

      const rect = element.getBoundingClientRect();
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const elementPosition = rect.top + scrollPosition;
      const offset = (scrollPosition - elementPosition) * parallaxSpeed;

      element.style.transform = `translate3d(0, ${offset}px, 0)`;

      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${
          -offset * 0.3
        }px, 0)`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Recalculate on resize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [parallaxSpeed]);

  return (
    <div
      className={`background-image-holder-wrapper ${className}`}
    >
      <div
        ref={holderRef}
        className="background-image-holder parallax lazyloaded"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div
        className="background-overlay"
        style={{ backgroundColor: overlayColor }}
      />

      <div
        ref={contentRef}
        className={`background-content content-${contentPosition}`}
      >
        {children}
      </div>
    </div>
  );
};

export default BackgroundImageHolder;
