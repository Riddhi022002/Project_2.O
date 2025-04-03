import React from 'react';
import '../StyleSheets/whychooseus.css';

const WhyChooseUs = () => {
  const reasons = [
    { image: '/assets/washingcarstation.jpg', title: 'Fast Service', desc: 'We ensure quick and reliable service within hours.' },
    { image: '/assets/washingcarstation.jpg', title: 'Affordable Pricing', desc: 'Get the best prices with no hidden charges.' },
    { image: '/assets/washingcarstation.jpg', title: 'Quality Assurance', desc: 'Certified professionals ensuring top-notch quality.' },
  ];

  return (
    <section id="why-choose-us" className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="container">
        {reasons.map((reason, index) => (
          <div key={index} className="card">
            <img src={reason.image} alt={reason.title} />
            <h3>{reason.title}</h3>
            <p>{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
