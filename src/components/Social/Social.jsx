import React from 'react'
import './Social.css'

const SocialSection = () => {
  return (
    <section className="social-section">
      <p className="social-bubble">
        E se algum dos meus presentes tocou você,
        me mande uma mensagem pelas redes.
        Vou adorar saber como essa jornada tem sido pra você!
      </p>

      <img src="/assets/fotos-sueli/sueli-img-contato.jpg" alt="Sueli sorrindo" className="social-photo" />

      <p className="social-tilted">
        Quer falar comigo ou acompanhar<br />
        meus conteúdos nas redes? Tem<br />
        muito material gratuito para você<br />
        começar seu processo!
      </p>

      <div className="social-buttons">
        <a href='https://www.instagram.com/suelirepulho' target="_blank" rel="noopener noreferrer" className="social-btn">Instagram</a>
        <a href='https://www.youtube.com/@SueliRepulho' target="_blank" rel="noopener noreferrer" className="social-btn">YouTube</a>
        <a href='https://www.facebook.com/SueliRepulho/' target="_blank" rel="noopener noreferrer" className="social-btn">Facebook</a>
      </div>
    </section>
  )
}

export default SocialSection
