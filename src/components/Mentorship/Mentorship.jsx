import React from 'react'
import './Mentorship.css'

const MentoriaSection = () => {
  return (
    <section className="mentoria-section">
      <h2 className="mentoria-title">COMO POSSO TE AJUDAR</h2>
      <p className="mentoria-subtitle">
        Mentorias com Sueli Repulho<br />
        Transformação emocional, clareza e liberdade interior<br />
        — com escuta verdadeira e direção firme.
      </p>

      <div className="mentoria-content">
        <div className="mentoria-left">
          <img
            src="/assets/fotos-sueli/sueli-mentoria.png"
            alt="Sueli Repulho Mentoria"
            className="mentoria-img"
          />

          <div className="mentoria-box mentoria-individual">
            <h3>Mentoria Individual</h3>
            <p>
              Um caminho de autoconhecimento exclusivo, com escuta profunda,
              clareza emocional e apoio personalizado para quem quer parar de se
              colocar em segundo plano e começar a se escolher.
            </p>
            <a href="https://api.whatsapp.com/send/?phone=5519982427890&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="mentoria-btn">Mentoria Individual</a>
          </div>
        </div>

        <div className="mentoria-box mentoria-group">
          <h3>Mentoria em Grupo</h3>
          <p>
            Um espaço seguro para destravar resistências e aprender a se
            auto-validar, a fazer escolhas conscientes da realidade que quer
            viver, com toda liberdade e leveza.<br />
            Encontros quinzenais, com muita técnica e ferramentas profundas,
            partilhas acolhedoras, com leveza e respeito.<br />
            Acolhimento para quem quer se reconectar com sua verdade.
          </p>
          <a href="https://mentoria.suelirepulho.com.br/" target="_blank" rel="noopener noreferrer" className="mentoria-btn">Mentoria em Grupo</a>
        </div>
      </div>
    </section>
  )
}

export default MentoriaSection
