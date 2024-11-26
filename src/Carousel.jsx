import React, { useState, useEffect } from 'react';
import TheBandMicrophone from './assets/microphone.png'; // Update the path to your actual image file
import VectorLeft from './assets/vector_left.png'; // Update the path to your actual image file
import VectorRight from './assets/vector_right.png'; // Update the path to your actual image file

function Carousel() {
  const testimonials = [
    {
      id: 1,
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Tolga Kara",
      text: "Harika bir deneyimdi. Bu bootcamp ile birlikte çok güzel deneyimler elde ettim.",
      position: "Sigortam.net Software QA Bootcamp",
    },
    {
      id: 2,
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Perin Kılıç",
      text: "Harika bir deneyimdi. Bu bootcamp ile birlikte çok güzel deneyimler elde ettim.",
      position: "Tech Recruitment Bootcamp",
    },
    {
      id: 3,
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Ozan Çeltikçi",
      text: "Harika bir deneyimdi. Bu bootcamp ile birlikte çok güzel deneyimler elde ettim.",
      position: "Hangikredi UI/UX Hiring Challenge",
    },
    {
      id: 4,
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Ezgi Turan",
      text: "Eğitim süreci boyunca birçok bilgi edindim ve öğrendiklerimi uygulama fırsatı buldum.",
      position: "Software QA Bootcamp",
    },
    {
      id: 5,
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Ali Yılmaz",
      text: "Bu platform sayesinde harika insanlarla tanışma fırsatı yakaladım.",
      position: "Tech Bootcamp Katılımcısı",
    },
    {
      id: 6,
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Ezgi Turan",
      text: "Eğitim süreci boyunca birçok bilgi edindim ve öğrendiklerimi uygulama fırsatı buldum.",
      position: "Software QA Bootcamp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonials'ı gruplandır (her grupta 2 kart olacak)
  const groupedTestimonials = testimonials.reduce((result, item, index) => {
    const groupIndex = Math.floor(index / 2); // Her 2 eleman için yeni bir grup oluştur
    if (!result[groupIndex]) result[groupIndex] = [];
    result[groupIndex].push(item);
    return result;
  }, []);

  // Otomatik kaydırma işlevi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % groupedTestimonials.length);
    }, 5000); // 5000ms = 5 saniye
    return () => clearInterval(interval); // Bellek sızıntısını önler
  }, [groupedTestimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % groupedTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + groupedTestimonials.length) % groupedTestimonials.length);
  };

  return (
    <div className="carousel-container">
      <div className="heading-with-image">
        <h2>Bizi Katılımcılarımızdan Dinle</h2>
        <img
          src={TheBandMicrophone}
          alt="The Band Microphone"
          className="microphone-image"
        />
      </div>
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {groupedTestimonials.map((group, index) => (
            <div className="carousel-item" key={index}>
              {group.map((testimonial, idx) => (
                <div className="testimonial-card" key={testimonial?.id || idx}>
                  {testimonial && (
                    <>
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="testimonial-image"
                      />
                      <p className="testimonial-text">"{testimonial.text}"</p>
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.position}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button className="prev-button" onClick={prevSlide}>
        <img src={VectorLeft} alt="Previous" />
      </button>
      <button className="next-button" onClick={nextSlide}>
        <img src={VectorRight} alt="Next" />
      </button>
    </div>
  );
}

export default Carousel;
