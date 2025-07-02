import React from 'react'
import './About.css'

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <img
          src="/assets/fotos-sueli/sueli-img-sobre.jpg"
          alt="Sueli Repulho"
          className="about-photo"
        />
        <h3 className="about-title">SOBRE SUELI</h3>
      </div>

      <div className="about-content">
        <p>
          Psicóloga clínica com mais de 40 anos de experiência, especialista em Análise Transacional,
          Terapia Multidimensional, Rebirthing, Barras de Access e TVP.
        </p>
        <p>
          Realiza mentoria individual e em grupo, palestras e workshops como “Adeus aos medos”,
          “Renascimento” e “Liberdade Emocional”, sempre com foco em levar a uma vida de mais sucesso e leveza.
        </p>
        <p>
          Com presença acolhedora e firme, ajuda pessoas a saírem do piloto automático e viverem com autenticidade,
          sentido e liberdade emocional e cada vez mais sucesso, pessoal e profissional.
        </p>
        <p className="about-highlight">
          Se você vive cansado, frustrado ou em escassez…<br />
          <strong>Pode ser que ainda não tenha descoberto o que existe de mais potente dentro de si.</strong>
        </p>
      </div>
    </section>
  )
}

export default AboutSection
