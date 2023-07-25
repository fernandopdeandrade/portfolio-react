import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SpinnerLoading from "../components/SpinnerLoading";
import {
  rostinhoFeliz,
} from "../images/index";
import "../styles/Formulario.css";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const validarFormulario = () => {
    const emailRegex =
      /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (nome.length < 3) {
      alert("Nome precisa ter mais de 3 caracteres!");
      return false;
    }

    if (!emailRegex.test(email)) {
      alert("Email precisa ter esse formato = user@email.com");
      return false;
    }

    if (cidade.length < 3) {
      alert("Cidade precisa ter mais de 3 caracteres!");
      return false;
    }

    if (data.length < 10) {
      alert("Data precisa ter 10 ou mais caracteres!");
      return false;
    }

    if (estado.length < 2) {
      alert("Estado precisa ter mais de 2 caracteres!");
      return false;
    }

    if (mensagem.length < 10) {
      alert("Mensagem precisa ter mais de 10 caracteres!");
      return false;
    }

    setTimeout(function () {
      document.querySelector("#nome").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#cidade").value = "";
      document.querySelector("#mensagem").value = "";
    }, 500);
  };

  return (
    <>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <>
          <Header />
          <section className="formulario-contato">
            <br />
            <h1 className="chamada-formulario-contato">
              Formulário de Contato
            </h1>
            <form
              className="formulario-contato-form"
              id="Contato"
              action="https://formsubmit.co/pupygreen@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/success_message"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Já recebi a sua mensagem, obrigadão!!!!"
              />
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome..."
                required
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail..."
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="cidade"
                id="cidade"
                placeholder="Cidade..."
                required
                onChange={(e) => setCidade(e.target.value)}
              />
              <label htmlFor="">Data</label>
              <input
                type="date"
                name="dataNascimento"
                id="data"
                placeholder="Data"
                required
                onChange={(e) => setData(e.target.value)}
              />
              <label className="estado" htmlFor="">
                Estado
              </label>
              <input
                type="text"
                name="estado"
                id="estado"
                placeholder="Estado"
                required
                onChange={(e) => setEstado(e.target.value)}
              />
              <label className="mensagem-text-area" htmlFor="">
                Deixe uma mensagem para mim!{" "}
                <img
                  className="carinha-sorrindo"
                  src={rostinhoFeliz}
                  alt="Emoji"
                />
              </label>
              <textarea
                name="mensagem"
                id="mensagem"
                cols=""
                rows="5"
                placeholder="Mensagem"
                required
                onChange={(e) => setMensagem(e.target.value)}
              ></textarea>
              <input
                id="btn"
                className="btn btn-success botao-formulario-contato"
                onClick={() => validarFormulario()}
                type="submit"
                defaultValue="Enviar"
              />
            </form>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default Contact;
