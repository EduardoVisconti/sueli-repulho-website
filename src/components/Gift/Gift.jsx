import React, { useEffect, useRef, useState } from 'react'
import './Gift.css'

const GiftSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`gift-section ${isVisible ? 'visible' : ''}`}
    >
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
