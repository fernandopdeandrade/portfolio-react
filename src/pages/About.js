import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SpinnerLoading from '../components/SpinnerLoading';
import {
  fernando,
} from '../images/index';
import '../styles/About.css';

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const thousand = 1000;

    setTimeout(() => {
      setLoading(false);
    }, thousand);
  }, []);

  return (
    <>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <>
          <Header />
          <div className="qualquer" />
          <div className="me-encontre">
            <h5 className="card-title-sobre">Me encontre no google maps</h5>
            <iframe
              title="Minha localização"
              className="col-sm-12"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867.8187468014627!2d-56.80880007076809!3d-29.53748513207342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945499dfeb5fb435%3A0xf27961660c327bba!2sFernando%20Desenvolvimento%20de%20sites%2C%20Software%2C%20Mobile%20etc...!5e0!3m2!1spt-BR!2sbr!4v1656253255807!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="d-flex flex-column">
              <p className="card-text align-self-center">
                Escritorio: Rua Apolôlio Rodrigues, nº 1190 Uruguaiana RS
              </p>
              <Link
                to="https://fernandopdeandrade.github.io/portfolio-react/contact"
                className="btn btn-primary"
              >
                Entrar em contato
              </Link>
            </div>
            <div className="container sobre-mim">
              <div className="row">
                <div className="col align-self-start">
                  <img
                    className="img-sobre"
                    src={ fernando }
                    alt="Fernando Pereira de Andrade"
                  />
                </div>
                <div className="col align-self-center">
                  <p>
                    <strong className="um-pouco-sobre-mim">
                      `Um pouco sobre mim`...
                    </strong>
                    <br />
                    <em>
                      Olá, me chamo
                      {' '}
                      <b>Fernando Pereira de Andrade.</b>
                      <br />
                      Neste `Portfólio` venho compartilhar um pouco do meu
                      conhecimento em algumas tecnologias.
                    </em>
                  </p>
                </div>
                <div className="col align-self-end" id="Sobre-mim">
                  <p>
                    <b>
                      Sou uma pessoa curiosa e atenta aos detalhes, sempre
                      procurando otimizar o processo de desenvolvimento de um
                      projeto.
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default About;
