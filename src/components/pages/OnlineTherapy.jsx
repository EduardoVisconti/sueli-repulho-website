import React from "react";
import { useNavigate } from "react-router-dom";
import "./OnlineTherapy.css";

const OnlineTherapy = () => {
  const navigate = useNavigate();

  return (
    <section className="therapy-section">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Voltar
      </button>

      <div className="therapy-text-block center">
        <p className="highlight-phrase">
          A tecnologia encurta distâncias, mas foi a escuta profunda que aproximou pessoas.
          <br />
          <span className="highlight-bold">A terapia online não é apenas possível — ela é potente</span>
        </p>
      </div>

      <div className="therapy-text-block center">
        <p className="main-paragraph">
          A terapia online tem transformado vidas com a mesma eficácia da terapia presencial.
        </p>
        <p className="regular-text">
          Com sessões semanais seguras, você pode cuidar da sua saúde emocional de onde estiver — com privacidade e conexão real.
          <br /><br />
          Meus pacientes descobrem um espaço para crescer, cuidar, se expressar e enfrentar problemas pessoais e profissionais.
          <br /><br />
          Com a escuta profunda e sem julgamentos, criamos juntos uma nova rota — um novo caminho, um novo lugar.
        </p>
        <p className="quote">
          “Com cada sessão, me sinto mais em casa dentro de mim. Faço escolhas com mais consciência e liberdade.”
        </p>
      </div>

      <div className="therapy-box white-box">
        <p className="white-box-text">
          Quer dar esse passo com apoio profissional e experiência?
        </p>
        <button className="therapy-btn">Quero agendar agora</button>
      </div>

      <div className="therapy-box white-box">
        <p className="white-box-text">
          Mentoria em Grupo Online
          <br />
          <span className="white-box-subtext">
            Um espaço de escuta acolhedora e orientação, focado em autoconhecimento, relações e desenvolvimento pessoal.
            <br />
            Participe com outras mulheres em busca de transformação.
          </span>
        </p>
        <button className="therapy-btn">QUERO SABER MAIS</button>
      </div>
    </section>
  );
};

export default OnlineTherapy;
