import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Sueli Repulho · Todos os direitos reservados.</p>
      <p className="footer-credit">
        Site desenvolvido com 💜 por Eduardo Visconti
      </p>
    </footer>
  )
}

export default Footer
