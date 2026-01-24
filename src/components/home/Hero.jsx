import { useEffect, useState } from "react";

const slides = [
  "/images/syed.jpg",
  "/images/blg.jpg",
  "/images/syed.jpg",
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero">
      {slides.map((img, index) => {
        let className = "slide";
        if (index === active) className += " active";
        else if (index === (active + 1) % slides.length) className += " next";
        else if (index === (active - 1 + slides.length) % slides.length)
          className += " prev";

        return (
          <img
            key={index}
            src={img}
            alt="Hero Slide"
            className={className}
          />
        );
      })}

      {/* controls */}
      <div className="hero-controls">
        <div className="col-arrow arr left" onClick={prevSlide}>
          <i className="ri-arrow-left-s-line"></i>
        </div>

        {slides.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          ></div>
        ))}

        <div className="col-arrow arr right" onClick={nextSlide}>
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </div>
    </section>
  );
}
