import React from 'react'
import './Mentorship.css'
import { Link } from 'react-router-dom'

const MentoriaSection = () => {
  return (
    <section className="mentoria-section">
  <div className="mentoria-top">
    <img
      src="/assets/fotos-sueli/sueli-mentoria.png"
      alt="Sueli Repulho Mentoria"
      className="mentoria-img"
    />

    <div className="mentoria-top-text">
      <h2 className="mentoria-title">COMO POSSO TE AJUDAR</h2>
      <p className="mentoria-subtitle">
        Mentorias com Sueli Repulho<br />
        Transformação emocional, clareza e liberdade interior<br />
        — com escuta verdadeira e direção firme.
      </p>
    </div>
  </div>

  <div className="online-therapy">
    <Link
      to="/online-therapy"
      className="mentoria-btn online-therapy-btn"
    >
      Terapia Online
    </Link>
  </div>


  <div className="mentoria-content">
    <div className="mentoria-box">
      <div className="mentoria-content-wrapper">
        <h3>Mentoria Individual</h3>
        <p>
          Uma jornada de autoconhecimento profundo, com escuta sensível, apoio acolhedor e orientação personalizada.
        </p>
        <p>
          Ideal para quem deseja sair do piloto automático, se reconectar com sua essência e fazer escolhas com mais consciência e amor por si.
        </p>
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=5519982427890&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="mentoria-btn"
      >
        Mentoria Individual
      </a>
    </div>

    <div className="mentoria-box">
      <div className="mentoria-content-wrapper">
        <h3>Mentoria em Grupo</h3>
        <p>
          Um espaço seguro para destravar resistências e aprender a se
          auto-validar, a fazer escolhas conscientes da realidade que quer
          viver, com toda liberdade e leveza.
        </p>
        <p>
          Encontros quinzenais, com muita técnica e ferramentas profundas,
          partilhas acolhedoras, com leveza e respeito.
        </p>
        <p>Acolhimento para quem quer se reconectar com sua verdade.</p>
      </div>
      <a
        href="https://mentoria.suelirepulho.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="mentoria-btn"
      >
        Mentoria em Grupo
      </a>
    </div>
  </div>
</section>

  )
}

export default MentoriaSection
