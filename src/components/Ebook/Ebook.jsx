import React from 'react'
import './Ebook.css'

const EbookSection = () => {
  return (
    <section className="ebook-section">
      <h2 className="ebook-title">Transforme sua jornada com esses recursos</h2>

      <div className="ebook-cards">
        <div className="ebook-card">
          <img src="/assets/capas/capa-anular.png" alt="Ebook Chega de se Anular" />
          <div className="ebook-content-wrapper">
            <h4>CHEGA DE SE ANULAR</h4>
            <p>Um guia direto e efetivo pra quem cansou de agradar os outros e escolhe se colocar em primeiro lugar.</p>
          </div>
          <a href="https://suelirepulho.kpages.online/pagina-de-vendas-f22be18b-8ee3-4ef5-b904-802fb6ad330e" target="_blank" rel="noopener noreferrer" className="ebook-btn">Adquirir Ebook</a>
        </div>

        <div className="ebook-card">
          <img src="/assets/capas/capa-luto.png" alt="Ebook Virando a Página" />
          <div className="ebook-content-wrapper">
            <h4>VIRANDO A PÁGINA</h4>
            <p>Honre quem se foi. Elabore o luto com leveza e resgate a luz que há dentro de você.</p>
          </div>
          <a href="https://suelirepulho.kpages.online/virando-a-pagina-apos-o-luto-b358f6ac-5d8b-406e-b2d3-5e431b2231a8" target="_blank" rel="noopener noreferrer" className="ebook-btn">Adquirir Ebook</a>
        </div>

        <div className="ebook-card">
          <img src="/assets/capas/capa-raja.png" alt="Processo RAJA" />
          <div className="ebook-content-wrapper">
            <h4>PROCESSO RAJA</h4>
            <p>
              Método criado por Sueli Repulho para limpar os bloqueios emocionais, criar liberdade e direção. RAJA te ajuda a destravar sua vida pessoal e profissional com firmeza e clareza.
            </p>
          </div>
          <a href="https://mentoria.suelirepulho.com.br/processoraja/" target="_blank" rel="noopener noreferrer" className="ebook-btn">Adquirir Ebook</a>
        </div>
      </div>

      <p className="ebook-footer">
        Você merece viver com leveza, coragem e autenticidade. Escolha seu caminho…  
        Por onde você vai começar? Clique e inicie sua transformação pessoal!
      </p>
    </section>
  )
}

export default EbookSection
