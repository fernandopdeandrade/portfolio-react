import React from 'react';
import { Link } from 'react-router-dom';
import {
  homeOffice,
} from '../images/index';
import '../styles/Main.css';
import Skills1 from './Skills1';
import Skills2 from './Skills2';

function Main() {
  return (
    <>
      <main>
        <div>
          <img
            className="imagem-home-principal"
            alt="imagem-principal"
            src={ homeOffice }
          />
          <div className="card-img-overlay">
            <div className="card-title">
              <em>Fernando Pereira de Andrade</em>
              <small className="small-developer">
                Web
                {' '}
                <strong className="strong-developer">
                  <em>Developer</em>
                </strong>
              </small>
            </div>
            <div className="div-card-texto">
              <p className="card-text">
                <strong>
                  <em>Graduado em Engenharia da Computação</em>
                </strong>
                .
              </p>
              <Link className="botao-titulo-card" to="/contact">
                Entrar em contato
              </Link>
            </div>
          </div>
        </div>

        <div className="clear" />

        <br />
        <div className="divisoria-home">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h1 className="widget-title">Algumas das minhas Skills.</h1>
                <div className="widget-separator" />
                <div className="separator" />
              </div>
            </div>
          </div>
        </div>

        <div className="clear" />

        <section className="section-module">
          <div className="container">
            <div className="row">
              <Skills1 />
              <Skills2 />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
