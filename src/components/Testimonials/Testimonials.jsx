// src/components/Testimonials/TestimonialsSection.jsx
import React from 'react'
import './Testimonials.css'

const testimonials = [
  {
    text: '... depois da sessão de ontem, dormi super bem e acordei tão leve, foi maravilhoso, Su. Gratidão!!!',
    name: 'Eleonora G.',
    age: '35 anos',
    image: '/assets/testimonials/eleonora.png'
  },
  {
    text: 'Não sei porque não comecei antes, como é bom se conhecer e poder escolher... com essa liberdade...',
    name: 'Marco A.B.',
    age: '46 anos',
    image: '/assets/testimonials/marco.png'
  },
  {
    text: 'Se empoderar da própria vida, torna tudo mais fácil e mais leve, indico sua mentoria pra todo mundo.',
    name: 'Kátia B.',
    age: '51 anos',
    image: '/assets/testimonials/katia.png'
  }
]

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Quem passou por aqui, compartilhou...</h2>

      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">“{testimonial.text}”</p>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-photo" />
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-age">{testimonial.age}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
