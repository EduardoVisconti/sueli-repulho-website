import React from 'react'
import './Hero.css'

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-top">
        <div className="hero-left">
          <div className="sueli-photo-wrapper">
            <img src="/assets/fotos-sueli/sueli-hero.png" alt="Sueli Repulho" className="sueli-photo" />
          </div>
          <h2>Transformando ações em resultado - sem se anular no processo</h2>
          <p>Sim. É possível viver a vida que deseja.</p>
        </div>

        <div className="hero-right">
          <img src="/assets/fotos-sueli/quadros-img.png" alt="Ambiente Sueli" className="ambiente-img" />
        </div>
      </div>

      <div className="hero-missao">
        <h3>MISSÃO</h3>
        <p>
          Com mais de 40 anos de experiência, eu, Sueli Repulho, ajudo pessoas a
          dissolver bloqueios emocionais, despertar sua autenticidade e reencontrar
          a leveza de viver com LEVEZA.
        </p>
      </div>
    </section>

  )
}

export default HeroSection
