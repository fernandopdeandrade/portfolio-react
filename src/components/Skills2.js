import React from 'react';
import {
  bash,
  bootstrap,
  css,
  html,
  javascript,
  nodejs,
  unix,
  windows,
} from '../images/index';

function Skills2() {
  return (
    <>
      <div className="col-md-6 col-sm-6 col-xs-12 quadradinhos-imagem-texto">
        <div id="HTML" className="a-quadradinhos">
          <img
            src={ unix }
            alt=" Imagem do ícone Unix"
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
            src={ windows }
            alt=" Imagem do ícone windows"
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
            src={ bash }
            alt=" Imagem do ícone bash"
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
            src={ html }
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
            src={ css }
            alt="imagem do ícone CSS"
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
            src={ javascript }
            alt="imagem do ícone JavaScript"
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
            src={ nodejs }
            alt="imagem do ícone NodeJs"
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
            src={ bootstrap }
            alt="imagem do ícone Bootstrap"
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
    </>
  );
}

export default Skills2;
