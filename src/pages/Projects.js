import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SpinnerLoading from '../components/SpinnerLoading';
import {
  appRecipes,
  fundoColorido,
  futebol,
  jogoQuiz,
  restaurantOrders,
  site1,
  site2,
  site3,
  site4,
  site5,
  siteMecanica,
  siteTransporte,
  siteVendas,
} from '../images/index';
import '../styles/Carousel.css';

function Projects() {
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
          <div
            className="space-separator"
            style={ { height: '150px', width: '100%', marginBottom: '20px' } }
          />

          <div className="divisoria-projects">
            <h5 className="card-title-sobre">Alguns modelos de sites replicados.</h5>
          </div>

          <div className="div-fundo-carousel">
            <img
              className="img-fundo-carousel"
              src={ fundoColorido }
              alt="fundo slide"
            />
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="imagem-slide"
                  src={ site1 }
                  alt="Primeiro Slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="imagem-slide" src={ site2 } alt="Segundo Slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="imagem-slide"
                  src={ site3 }
                  alt="Terceiro Slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="imagem-slide" src={ site4 } alt="Quarto Slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="imagem-slide" src={ site5 } alt="Quinto Slide" />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="clear" />

          <div id="Sites" className="divisoria mt-5">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header">
                  <h1
                    className="widget-title wow fadeInUp animated animated animated"
                    data-wow-duration="500ms"
                    data-wow-delay="0ms"
                  >
                    Outros modelos de Sites!
                  </h1>
                  <div className="widget-separator">
                    <span />
                  </div>
                  <p className="wow fadeInDown animated animated conect-mensagem">
                    Sites replicados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="portfolio-section">
            <div className="container">
              <div className="sites-portfolio">
                <div className="sites-portfolio-div">
                  <div className="sites-portfolio-div-fotos">
                    <img
                      className="img-responsive"
                      alt="img site mecanica"
                      src={ siteMecanica }
                    />
                    <h4 className="titulo-modelo-site">Mecânica automotiva</h4>
                    <div className="comentario-titulo-modelo-site">
                      <p className="conect-mensagem">
                        Réplica de um site encontrado na internet.
                      </p>
                    </div>
                  </div>

                  <div className="sites-portfolio-div-fotos">
                    <img
                      className="img-responsive"
                      alt="img site transporte"
                      src={ siteTransporte }
                    />
                    <h4 className="titulo-modelo-site">Transporte</h4>
                    <div className="comentario-titulo-modelo-site">
                      <p className="conect-mensagem">
                        Réplica de um site encontrado na internet.
                      </p>
                    </div>
                  </div>

                  <div className="sites-portfolio-div-fotos">
                    <img
                      className="img-responsive"
                      alt="img site vendas"
                      src={ siteVendas }
                    />
                    <h4 className="titulo-modelo-site">Vendas e Negócios</h4>
                    <div className="comentario-titulo-modelo-site">
                      <p className="conect-mensagem">
                        Réplica de um site encontrado na internet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div id="Projetos" className="clear" />

          <div className="divisoria">
            <h1>Alguns dos meus projetos</h1>
            <b>Meu github</b>
            {' '}
            <a
              href="https://github.com/fernandopdeandrade"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/fernandopdeandrade
            </a>
          </div>

          <section className="section-module mt-4 mb-4">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                  <div id="HTML" className="a-quadradinhos">
                    <img
                      src={ appRecipes }
                      alt=" Imagem do ícone app-recipes"
                    />
                    <div>
                      <h4 className="titulo-quadradinhos">
                        <a
                          href="https://front-end-app-recipes.vercel.app/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          App-de-receitas
                        </a>
                      </h4>
                    </div>
                    <div>
                      <p className="conect-mensagem">
                        Projeto fullstack, front-end e back-end... projeto todo
                        dockerizado, banco de dados mongodb, reactjs no
                        front-end, typescript no back-end, linguagen de
                        programação orientada a objetos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                  <div id="HTML" className="a-quadradinhos">
                    <img
                      src={ restaurantOrders }
                      alt="Imagem do ícone restaurant-orders"
                    />
                    <div>
                      <h4 className="titulo-quadradinhos">
                        <a
                          href="https://github.com/fernandopdeandrade/restaurant_orders"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Restaurant-orders
                        </a>
                      </h4>
                    </div>
                    <div>
                      <p className="conect-mensagem">
                        Projeto Restaurant-orders, api desenvolvida em python
                        com toda a parte de lógica desenvolvida simulando um
                        restaurante, seus produtos, pratos, ingredientes em
                        estoque etc, com os testes já implementados...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                  <div id="HTML" className="a-quadradinhos">
                    <img
                      src={ jogoQuiz }
                      alt=" Imagem do ícone jogo-quiz"
                    />
                    <div>
                      <h4 className=" titulo-quadradinhos">
                        <a
                          href="https://github.com/fernandopdeandrade/jogo-quiz-trivia/tree/master"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Jogo Quiz
                        </a>
                      </h4>
                    </div>
                    <div>
                      <p className="conect-mensagem">
                        Projeto de um jogo estilo Quiz, onde é possível logar
                        atravé de um Formulário, entrar no jogo com seu nome de
                        usuário, escolher a categoria de perguntas, a quantidade
                        e a forma de resposta, também é possível escolher a
                        dificuldade.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                  <div id="HTML" className="a-quadradinhos">
                    <img
                      src={ futebol }
                      alt=" Imagem do ícone Futebol-Club"
                    />
                    <div>
                      <h4 className=" titulo-quadradinhos">
                        <a
                          href="https://github.com/fernandopdeandrade/trybe-futebol-club"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Futebol-Club
                        </a>
                      </h4>
                    </div>
                    <div>
                      <p className="conect-mensagem">
                        Projeto Futebol-Club, back-end em typescript, front-end
                        desenvolvido em reactjs e banco de dados mysql... onde é
                        possível gerenciar um campeonato de futebol, alterando e
                        organizando os placares e resultados de jogos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}

export default Projects;
