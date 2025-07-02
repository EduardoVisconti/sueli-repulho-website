import React from 'react'
import './GiftTexts.css'

const GiftTextsSection = () => {
  return (
    <section className="gift-texts-section">
      <div className="gift-texts-overlay">
        <h2 className="gift-texts-title">Presentes que facilitam sua jornada</h2>
        <h3 className="gift-texts-subtitle">Como pequenos textos podem facilitar grandes viradas.</h3>

        <p className="gift-texts-intro">Dentro dessa caixa, você vai encontrar textos como:</p>

        <ul className="gift-texts-list">
          <li>
            <strong>“Relacionamento Inteligente”</strong><br />
            – Descubra como pode ser mais fácil se relacionar bem com o outro… e com você mesmo.
          </li>
          <li>
            <strong>“Sentimentos Milagrosos”</strong><br />
            – Um lembrete de que você carrega dentro de si forças transformadoras… só precisa aprender a usá-las a seu favor.
          </li>
          <li>
            <strong>“Como você usa seu tempo?”</strong><br />
            – Um convite a repensar sua rotina a partir do emocional.
          </li>
        </ul>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzsCh_O5JVR_lnpE0SNP10Rt2CnIQWZvWvJxj1cnsf4lDggA/viewform" target="_blank" rel="noopener noreferrer" className="gift-texts-btn">QUERO MEUS PRESENTES</a>
      </div>
    </section>
  )
}

export default GiftTextsSection
