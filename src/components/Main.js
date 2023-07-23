import React from "react";
import { Link } from "react-router-dom";
import homeOffice from "../images/homeOffice.jpg";
import "../styles/Main.css";

const Main = () => {
  return (
    <>
      <main>
        <div>
          <img
            className="imagem-home-principal"
            alt="imagem-principal"
            src={homeOffice}
          />
          <div className="card-img-overlay">
            <div className="card-title">
              <em>Fernando Pereira de Andrade</em>
              <small className="small-developer">
                Web{" "}
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

        <div className="clear"></div>

        <br />
        <div className="divisoria">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h1 className="widget-title">Algumas das minhas Skills.</h1>
                <div className="widget-separator"></div>
                <div className="separator"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="clear"></div>

        <section className="section-module">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="HTML" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/unix-removebg-preview.png"
                    alt=" Imagem do ícone HTML"
                  />
                  <div>
                    <h4 className=" titulo-quadradinhos">
                      <a
                        href="https://community.unix.com/search?expanded=true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Unix
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      Unix é um sistema operacional, multitarefas e
                      multiusuário, onde váriois usuários podem trabalhar ao
                      mesmo tempo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="HTML" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/windows-removebg-preview.png"
                    alt=" Imagem do ícone HTML"
                  />
                  <div>
                    <h4 className=" titulo-quadradinhos">
                      <a
                        href="https://www.w3schools.com/html/default.asp"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Windows
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      Microsoft Windows é uma família de sistemas operacionais
                      desenvolvidos, comercializados e vendidos pela Microsoft.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="HTML" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/bash-removebg-preview.png"
                    alt=" Imagem do ícone HTML"
                  />
                  <div>
                    <h4 className=" titulo-quadradinhos">
                      <a
                        href="https://pt.wikipedia.org/wiki/Bash"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Bash
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      GNU Bash ou simplesmente Bash é um interpretador de
                      comandos, um entre os diversos tradutores entre o usuário
                      e o sistema operacional conhecidos como shell..
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="HTML" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/html-removebg-preview.png"
                    alt=" Imagem do ícone HTML"
                  />
                  <div>
                    <h4 className=" titulo-quadradinhos">
                      <a
                        href="https://www.w3schools.com/html/default.asp"
                        target="_blank"
                        rel="noreferrer"
                      >
                        HTML
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      HTML é uma linguagem de marcação utilizada na construção
                      de páginas na Web, sua tecnologia é fruto da junção entre
                      os padrões HyTime e SGML.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="CSS" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/css-removebg-preview.png"
                    alt=""
                  />
                  <div>
                    <h4 className=" titulo-quadradinhos">
                      <a
                        href="https://www.w3schools.com/css/default.asp"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CSS
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      Cascading Style Sheets é um mecanismo para adicionar
                      estilo a um documento web.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="JavaScript" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/javscript-removebg-preview.png"
                    alt=""
                  />
                  <div>
                    <h4 className=" titulo-quadradinhos">
                      <a
                        href="https://www.w3schools.com/js/default.asp"
                        target="_blank"
                        rel="noreferrer"
                      >
                        JavaScript
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      Linguagem de programação, uma das mais usadas no mundo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="NodeJs" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/nodejs-removebg-preview.png"
                    alt=""
                  />
                  <div>
                    <h4 className="titulo-quadradinhos">
                      <a
                        href="https://nodejs.org/dist/latest-v16.x/docs/api/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        NodeJs
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      Software de código aberto, multiplataforma, baseado no
                      interpretador V8 do Google.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="Bootstrap" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/bootstrap2-removebg-preview.png"
                    alt=""
                  />
                  <div>
                    <h4 className="titulo-quadradinhos">
                      <a
                        href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Bootstrap
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      Framework web de código fonte aberto usado por
                      desenvolvedores.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="ReactJs" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/react2-removebg-preview.png"
                    alt=""
                  />
                  <div>
                    <h4 className="titulo-quadradinhos">
                      <a
                        href="https://pt-br.reactjs.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ReactJs
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      Biblioteca JavaScript com foco em criar interfaces de
                      usuário em páginas web.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="MongoDB" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/mongodb-removebg-preview.png"
                    alt=""
                  />
                  <div>
                    <h4 className="titulo-quadradinhos">
                      <a
                        href="https://www.mongodb.com/pt-br"
                        target="_blank"
                        rel="noreferrer"
                      >
                        MongoDB
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      MongoDB é um software de banco de dados orientado a
                      documentos livre.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="Mysql" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/mysql2-removebg-preview (2).png"
                    alt=""
                  />
                  <div>
                    <h4 className="titulo-quadradinhos">
                      <a
                        href="https://www.mysql.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Mysql
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      Um sistema de gerenciamento de banco de dados, que utiliza
                      a linguagem SQL como interface.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="HTML" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/sql-removebg-preview.png"
                    alt=" Imagem do ícone HTML"
                  />
                  <div>
                    <h4 className=" titulo-quadradinhos">
                      <a
                        href="https://www.w3schools.com/html/default.asp"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Sql
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      SQL é uma linguagem padrão para trabalhar com bancos de
                      dados relacionais e não relacionais.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="HTML" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/docker.png"
                    alt=" Imagem do ícone docker"
                  />
                  <div>
                    <h4 className=" titulo-quadradinhos">
                      <a
                        href="https://www.docker.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Docker
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      Docker é um conjunto de produtos de plataforma como
                      serviço que usam virtualização de nível de sistema
                      operacional para entregar software em pacotes chamados
                      contêineres.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="HTML" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/typescript.png"
                    alt=" Imagem do ícone typescript"
                  />
                  <div>
                    <h4 className=" titulo-quadradinhos">
                      <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        TypesCript
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      TypeScript é uma linguagem de programação de código aberto
                      desenvolvida pela Microsoft.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="HTML" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/python.jpeg"
                    alt=" Imagem do ícone python"
                  />
                  <div>
                    <h4 className=" titulo-quadradinhos">
                      <a
                        href="https://www.python.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Python
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      Python é uma linguagem de programação de alto nível,
                      interpretada de script, imperativa, orientada a objetos,
                      funcional, de tipagem dinâmica e forte.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
                <div id="HTML" className="a-quadradinhos">
                  <img
                    src="https://fernandopdeandrade.github.io/portfolio-github-io/public/images/java.png"
                    alt=" Imagem do ícone python"
                  />
                  <div>
                    <h4 className=" titulo-quadradinhos">
                      <a
                        href="https://www.java.com/pt-BR/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Java
                      </a>
                    </h4>
                  </div>
                  <div>
                    <p className="conect-mensagem">
                      Java é uma linguagem de programação orientada a objetos
                      desenvolvida na década de 90 por uma equipe de
                      programadores chefiada por James Gosling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
