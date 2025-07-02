import React from 'react'
import './Gift.css'

const GiftSection = () => {
  return (
    <section className="gift-section">
      <div className="gift-left">
        <h2 className="gift-title">Presentes que facilitam sua jornada</h2>
        <h3 className="gift-subtitle">Como pequenos textos podem facilitar grandes viradas.</h3>

        <p className="gift-message">
          Mais abaixo você ganhará um presente, totalmente gratuito,<br />
          mas que já vai facilitar sua jornada
        </p>

        <h1 className="gift-you-deserve">VOCÊ MERECE !!!</h1>
      </div>

      <div className="gift-right">
        <img src="/assets/bg/bg-presente.png" alt="Presente iluminado" className="gift-img" />
        
        <p className="gift-cta">
          Receba <strong>gratuitamente</strong> conteúdos curtos e
          transformadores direto no seu e-mail e WhatsApp.
      </p>
      </div>
    </section>
  )
}

export default GiftSection
