import React from 'react';
import {
  docker,
  java,
  mongodb,
  mysql2,
  python,
  reactjs,
  sql,
  typescript,
} from '../images/index';

function Skills1() {
  return (
    <>
      <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
        <div id="ReactJs" className="a-quadradinhos">
          <img
            src={ reactjs }
            alt="imagem do ícone ReactJs"
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
            src={ mongodb }
            alt="imagem do ícone MongoDB"
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
            src={ mysql2 }
            alt="imagem do ícone Mysql"
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
            src={ sql }
            alt=" Imagem do ícone sql"
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
            src={ docker }
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
            src={ typescript }
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
              desenvolvida pela Microsoft. É um superconjunto sintático
              estrito de JavaScript e adiciona tipagem estática opcional
              à linguagem.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
        <div id="HTML" className="a-quadradinhos">
          <img
            src={ python }
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
            src={ java }
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
    </>
  );
}

export default Skills1;
