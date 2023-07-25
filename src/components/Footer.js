import React from 'react';
import '../styles/Footer.css';
import d from '../svg/d1.json';

function Footer() {
  return (
    <footer>
      <div className="NandoDev">
        <span>
          Copyright &copy; 2023 Nando
          <b>Dev</b>
        </span>
      </div>

      <div className="icones-ul-li-a">
        <ul className="ul-icones">
          <li className="li-icones">
            <a
              className="a-icones"
              href="https://github.com/fernandopdeandrade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="navbar-nav-svg"
                viewBox="0 0 512 499.36"
                role="img"
              >
                <title>GitHub</title>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d={ d.imgsvg[0].github }
                />
              </svg>
              <small className="">GitHub</small>
            </a>
          </li>
          <li className="li-icones">
            <a
              className="a-icones"
              href="https://www.facebook.com/pupygreen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d={ d.imgsvg[1].facebook } />
              </svg>
              <small className="">FaceBook</small>
            </a>
          </li>
          <li className="li-icones">
            <a
              className="a-icones"
              href="https://www.linkedin.com/in/fernando-pereira-de-andrade-07a45b116/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d={ d.imgsvg[2].linkedin } />
              </svg>
              <small className="">Linkedin</small>
            </a>
          </li>
          <li id="Redes-Sociais" className="li-icones">
            <a
              className="a-icones"
              href="https://www.instagram.com/fernando_pereira_andrade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d={ d.imgsvg[3].instagram } />
              </svg>
              <small className="">Instagram</small>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
