import React, { useEffect, useState } from 'react';
import '../StyleSheets/testimonials.css';

const testimonialsData = [
  {
    quote: "Great service! My car was like new in no time.",
    name: "Pandu",
    image: '/assets/profile1.jpg',
  },
  {
    quote: "Affordable pricing and very polite staff. Highly recommended!",
    name: "Seniorita",
    image: '/assets/profile2.jpg',
  },
  {
    quote: "Reliable and quick! Best service in town.",
    name: "meow mimi",
    image: '/assets/profile3.jpg',
  },
];
const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="slider">
        {testimonialsData.map((item, i) => (
          <div key={i} className={`slide ${i === index ? 'active' : ''}`}>
            <img src={item.image} alt={item.name} className="profile-pic" />
            <div className="testimonial-content">
              <p>"{item.quote}"</p>
              <h4>- {item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
