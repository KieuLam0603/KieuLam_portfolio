import React, { useState } from "react";
import "./Portfolio.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

const Porfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/images/meipaly.png",
      title: "Meipaly website",
      description:
        "A website to practice your HTML, CSS3 skills, libraries & animation",
      responsibility: "Development",
      technology:
        "HTML5, CSS3, Bootstrap 4, Jquery, waypoints, countup js, owl carousel, github",
      demoLink: "https://bcs-07-meipaly-lam-diem-kieu.vercel.app",
      githubLink: "https://github.com/KieuLam0603/BCS07_Meipaly_LamDiemKieu",
    },
    {
      src: "/images/bake.png",
      title: "Bake website",
      description:
        "A website to practice your HTML, CSS3, libraries and animation",
      responsibility: "Development",
      technology: "HTML5, CSS3, CSS, Animate, Wowjs",
      demoLink: "https://bake-beryl.vercel.app",
      githubLink: "https://github.com/KieuLam0603/bake",
    },
    {
      src: "/images/samar.png",
      title: "Samar website",
      description:
        "A website to practice your HTML, CSS3 skills, libraries and animation",
      responsibility: "Development",
      technology:
        "HTML5, CSS3, Jquery, wowjs, count up js, waypoints, owl carousel, github",
      demoLink: "https://bcs-07-samar-lam-diem-kieu.vercel.app",
      githubLink: "https://github.com/KieuLam0603/BCS07_Samar_LamDiemKieu",
    },
    {
      src: "/images/studios.png",
      title: "Studios website",
      description:
        "A clone UI website of Honda homepage with full responsive, dark theme",
      responsibility: "Development",
      technology:
        "HTML5, CSS3, Bootstrap 4, Jquery, waypoints, countup js, owl carousel, github",
      demoLink: "https://bcs-07-gr4-studious.vercel.app",
      githubLink: "https://github.com/TuanKhanh1910/BCS07_gr4_Studious",
    },
  ];
  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div id="portfolio">
      <div className="portfoContainer">
        <h1>
          <span>My </span>
          <span>Portfolio</span>
        </h1>
        <div className="portfoContent">
          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
          >
            {/* 4 tấm ảnh */}
            <div className="relative h-56 overflow-hidden rounded-2xl md:h-96">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`duration-700 ease-in-out ${
                    index === currentSlide ? "block" : ""
                  }`}
                  data-carousel-item
                >
                  <img
                    src={image.src}
                    className="absolute block w-full object-cover"
                    alt={`Slide ${index + 1}`}
                  />

                  {/* 4 khung mô tả */}
                  <div className="portfoBox">
                    <h4>{image.title}</h4>
                    <ul>
                      <li>
                        <span className="boxTitle">• Description: </span>
                        <span>{image.description}</span>
                      </li>
                      <li>
                        <span className="boxTitle">• Responsibility: </span>
                        <span>{image.responsibility}</span>
                      </li>
                      <li>
                        <span className="boxTitle">• Technology: </span>
                        <span>{image.technology}</span>
                      </li>
                    </ul>
                    <div className="portButton">
                      <button className="buttonDemo">
                        <a
                          href={image.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link Demo
                        </a>
                      </button>
                      <button className="buttonGithub">
                        <a
                          href={image.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link Github
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 4 nút tròn */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-orange-400" : "bg-gray-300"
                  }`}
                  aria-current={index === currentSlide}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            {/* 2 nút mũi tên */}
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={prevSlide}
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10">
                <svg
                  className="w-10 h-10 dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={nextSlide}
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10">
                <svg
                  className="w-10 h-10 dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Porfolio;
