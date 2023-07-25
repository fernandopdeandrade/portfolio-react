import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {
  croppedLogoNando,
} from '../images/index';
import '../styles/Header.css';
import AlertDismissible from './AlertDismissible';

function Header() {
  const [alert, setAlert] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    const menu = document.getElementById('conteudoNavbarSuportado');

    if (toggle) {
      menu.style.display = 'none';
      setToggle(false);
    } else {
      menu.style.display = 'block';
      setToggle(true);
    }
  };

  useEffect(() => {
    const botaoPesquisa = document.getElementById('pesquisa');
    const menuLiA = document.querySelectorAll('.menu li a');
    const menu = document.getElementById('menu');
    const inputPesquisa = document.querySelector('#inputPesquisa');

    inputPesquisa.addEventListener('mouseover', (e) => {
      e.preventDefault();
      menu.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
      if (e.target.id !== 'menu') {
        menu.style.display = 'none';
      }
    });

    for (let i = 0; i < menuLiA.length; i += 1) {
      menuLiA[i].addEventListener('click', (e) => {
        e.preventDefault();
        inputPesquisa.value = e.target.innerText;
        menu.style.display = 'none';
      });
    }

    botaoPesquisa.addEventListener('click', (e) => {
      e.preventDefault();
      const elemento = document.getElementById(inputPesquisa.value);
      const fifteenHundred = 1500;

      if (elemento) {
        elemento.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, fifteenHundred);
      }
    });
  }, []);

  return (
    <>
      {alert && <AlertDismissible />}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <Link rel="icon" to="/">
            <img src={ croppedLogoNando } alt="logo" />
          </Link>
          <button
            className="botao-menu-mobile"
            type="button"
            onClick={ toggleMenu }
          >
            <span className="span-menu-mobile">Menu</span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="conteudoNavbarSuportado"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projetos
                </Link>
              </li>
              <Container fluid>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Nav>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Mais opções"
                    menuVariant="light"
                  >
                    <div className="mais-opcoes-link">
                      <Link to="/blog"> Blog</Link>
                      <Link to="/about">Sobre</Link>
                      <Link to="/contact">Contato</Link>
                      <NavDropdown.Divider />
                      <Link to="/privacy_policy">Privacidade</Link>
                    </div>
                  </NavDropdown>
                </Nav>
              </Container>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                id="inputPesquisa"
                className="form-pesquisar mr-sm-2"
                type="search"
                placeholder="Pesquisar"
                aria-label="Pesquisar"
                title="Faça sua pesquisa"
              />
              <button
                id="pesquisa"
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Pesquisar
              </button>
              <ul className="menu" id="menu">
                <li>
                  <Link to="#Sobre-mim">Sobre-mim</Link>
                </li>
                <li>
                  <Link to="#Projetos">Projetos</Link>
                </li>
                <li>
                  <Link to="#Slides">Slides</Link>
                </li>
                <li>
                  <Link to="#Unix">Unix</Link>
                </li>
                <li>
                  <Link to="#Windows">Windows</Link>
                </li>
                <li>
                  <Link to="#Bash">Bash</Link>
                </li>
                <li>
                  <Link to="#Sql">Sql</Link>
                </li>
                <li>
                  <Link to="#HTML">HTML</Link>
                </li>
                <li>
                  <Link to="#CSS">CSS</Link>
                </li>
                <li>
                  <Link to="#JavaScript">JavaScript</Link>
                </li>
                <li>
                  <Link to="#Nodejs">NodeJs</Link>
                </li>
                <li>
                  <Link to="#Bootstrap">Bootstrap</Link>
                </li>
                <li>
                  <Link to="#ReactJs">ReactJs</Link>
                </li>
                <li>
                  <Link to="#MongoDB">MongoDB</Link>
                </li>
                <li>
                  <Link to="#Mysql">Mysql</Link>
                </li>
                <li>
                  <Link to="#Sites">Sites</Link>
                </li>
                <li>
                  <Link to="#Contato">Contato</Link>
                </li>
                <li>
                  <Link to="#Redes-sociais">Redes-Sociais</Link>
                </li>
              </ul>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
