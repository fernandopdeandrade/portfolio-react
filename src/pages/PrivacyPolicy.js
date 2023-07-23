import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SpinnerLoading from "../components/SpinnerLoading";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <>
          <Header />
          <div className="politica-privacidade">
            <div className="privacidade-text">
              <h1>Política de Privacidade</h1>
              <p>
                Esta Política de Privacidade descreve como a{" "}
                <b>NandoDev - LTDA</b> coleta, usa e compartilha suas
                informações pessoais quando você visita nosso site ou usa nossos
                serviços.
              </p>
              <p>
                Quando você visita nosso site, coletamos automaticamente certas
                informações sobre seu dispositivo, incluindo seu endereço IP,
                sistema operacional e tipo de navegador. Também coletamos
                informações sobre as páginas da web que você visita, os links em
                que clica e o conteúdo que você visualiza.
              </p>
              <p>
                Coletamos informações pessoais que você nos fornece, como seu
                nome, endereço de e-mail, número de telefone e informações de
                pagamento. Você nos fornece essas informações quando se registra
                em nosso site, faz um pedido, se inscreve em nossa newsletter ou
                entra em contato conosco.
              </p>
              <p>
                Usamos suas informações pessoais para fornecer e melhorar nossos
                serviços, para entrar em contato com você, para processar suas
                transações e para cumprir nossos contratos. Também podemos usar
                suas informações pessoais para enviar a você comunicações de
                marketing, se você tiver consentido em receber essas
                comunicações.
              </p>
              <p>
                Podemos compartilhar suas informações pessoais com nossos
                fornecedores de serviços para nos ajudar a fornecer e melhorar
                nossos serviços. Também podemos compartilhar suas informações
                pessoais com terceiros com seu consentimento ou se formos
                obrigados por lei a fazê-lo.
              </p>
              <p>
                Você pode optar por não compartilhar suas informações pessoais
                conosco. No entanto, se você optar por não compartilhar suas
                informações pessoais, poderá não ser capaz de usar todos os
                nossos serviços.
              </p>
              <p>
                Tomamos medidas de segurança para proteger suas informações
                pessoais contra acesso, uso e divulgação não autorizados.
              </p>
              <p>
                Você pode acessar, corrigir ou excluir suas informações
                pessoais. Você também pode optar por não receber comunicações de
                marketing de nossa parte. Para fazer isso, entre em contato
                conosco pelo <b>pupygreen@gmail.com - 55 (55) 99979-0568</b>.
              </p>
              <p>
                Esta Política de Privacidade pode ser alterada periodicamente.
                Se fizermos alterações significativas a esta Política de
                Privacidade, iremos notificá-lo por e-mail ou por meio de um
                aviso em nosso site.
              </p>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default PrivacyPolicy;
