import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import cropped_logoNando from "../images/cropped-logoNando.png";
import "../styles/Header.css";
import AlertDismissible from "./AlertDismissible";

const Header = () => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const botao_pesquisa = document.getElementById("pesquisa");
    const menu_li_a = document.querySelectorAll(".menu li a");
    const menu = document.getElementById("menu");
    const input_pesquisa = document.querySelector("#input_pesquisa");

    input_pesquisa.addEventListener("mouseover", function (e) {
      e.preventDefault();
      menu.style.display = "block";
    });

    document.addEventListener("click", function (e) {
      if (e.target.id !== "menu") {
        menu.style.display = "none";
      }
    });

    for (let i = 0; i < menu_li_a.length; i++) {
      menu_li_a[i].addEventListener("click", function (e) {
        e.preventDefault();
        input_pesquisa.value = this.innerHTML;
        menu.style.display = "none";
      });
    }

    botao_pesquisa.addEventListener("click", function (e) {
      e.preventDefault();
      const elemento = document.getElementById(input_pesquisa.value);

      if (elemento) {
        elemento.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 15000);
      }
    });
  }, []);

  return (
    <>
      {alert && <AlertDismissible />}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <Link rel="icon" to="/portfolio-react/">
            <img
              className="botao-menu-mobile"
              src={cropped_logoNando}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#conteudoNavbarSuportado"
            aria-controls="conteudoNavbarSuportado"
            aria-expanded="false"
            aria-label="Alterna navegação"
          >
            <span className="navbar-toggler-icon"></span>
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
                id="input_pesquisa"
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
};

export default Header;
