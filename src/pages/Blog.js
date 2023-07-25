import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SpinnerLoading from '../components/SpinnerLoading';
import {
  metaVerso,
} from '../images/index';
import '../styles/Blog.css';

function Blog() {
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
          <main className="main-tecnologia">
            <div className="div-tecnologia">
              <h1>O que é o metaverso?</h1>
              <section className="primary">
                <article>
                  <p className="o-que-e">
                    O metaverso é um mundo virtual compartilhado que pode ser
                    acessado por pessoas de todo o mundo. Ele ainda está em
                    desenvolvimento, mas tem o potencial de revolucionar a forma
                    como interagimos com a tecnologia.
                  </p>
                  <p className="o-que-e">
                    No metaverso, você pode fazer coisas como jogar jogos, ir a
                    shows, fazer compras e até mesmo trabalhar. Você pode criar
                    seu próprio avatar e interagir com outras pessoas de uma
                    forma que não é possível no mundo real.
                  </p>
                  <div className="img-p">
                    <p>
                      O metaverso ainda está em sua infância, mas está crescendo
                      rapidamente. É possível que ele se torne uma parte
                      importante de nossas vidas nos próximos anos.
                    </p>
                    <img src={ metaVerso } alt="metaverso" />
                  </div>
                </article>
              </section>
              <section className="section-texto">
                <h3>O futuro da tecnologia</h3>
                <p>
                  O futuro da inteligência artificial é um tópico que tem sido
                  debatido por especialistas há muitos anos. Alguns acreditam
                  que a IA acabará se tornando tão avançada que superará a
                  inteligência humana, enquanto outros acreditam que a IA sempre
                  será limitada pelo seu design. Existem muitas maneiras
                  diferentes de pensar sobre o futuro da IA. Algumas pessoas
                  acreditam que a IA será usada para automatizar muitas tarefas
                  que atualmente são realizadas por humanos, enquanto outras
                  acreditam que a IA será usada para criar novas experiências e
                  possibilidades que não são possíveis para humanos. É
                  impossível dizer com certeza o que o futuro reserva para a IA,
                  mas é claro que é uma tecnologia poderosa que tem o potencial
                  de mudar o mundo de muitas maneiras. É importante continuar a
                  estudar e desenvolver a IA de uma forma responsável e ética,
                  para que possamos garantir que ela seja usada para o bem da
                  humanidade. Aqui estão alguns dos possíveis benefícios do
                  futuro da IA: A IA pode ser usada para automatizar tarefas que
                  atualmente são realizadas por humanos, o que pode liberar
                  tempo para que as pessoas se concentrem em outras coisas. A IA
                  pode ser usada para criar novas experiências e possibilidades
                  que não são possíveis para humanos, como novas formas de arte,
                  música e entretenimento. A IA pode ser usada para resolver
                  problemas complexos que atualmente são difíceis ou impossíveis
                  de resolver para os humanos, como o aquecimento global e a
                  doença. Aqui estão alguns dos possíveis riscos do futuro da
                  IA: A IA pode ser usada para criar armas autônomas que podem
                  matar sem intervenção humana. A IA pode ser usada para
                  controlar e manipular as pessoas. A IA pode levar ao
                  desemprego em massa, pois as máquinas se tornam mais capazes
                  de realizar tarefas que atualmente são realizadas por humanos.
                  É importante considerar os benefícios e os riscos do futuro da
                  IA ao desenvolver e usar essa tecnologia. É importante
                  garantir que a IA seja usada para o bem da humanidade e não
                  para prejudicá-la.
                </p>
              </section>
              <section className="section-texto">
                <h3>Os riscos da tecnologia</h3>
                <p>
                  A tecnologia é uma ferramenta poderosa que pode ser usada para
                  o bem ou para o mal. Ela tem o potencial de nos conectar com
                  outras pessoas, nos informar e nos ajudar a realizar tarefas
                  de forma mais eficiente. No entanto, a tecnologia também pode
                  ser usada para nos manipular, nos controlar e nos prejudicar.
                  Aqui estão alguns dos riscos da tecnologia: Dependência: A
                  tecnologia pode se tornar tão onipresente em nossas vidas que
                  podemos nos tornar dependentes dela. Isso pode nos levar a
                  negligenciar outras áreas de nossas vidas, como nossos
                  relacionamentos, nosso bem-estar físico e mental. Manipulação:
                  A tecnologia pode ser usada para nos manipular e controlar.
                  Isso pode ser feito por meio de publicidade, propaganda e
                  outras formas de mídia. A tecnologia também pode ser usada
                  para rastrear nossos movimentos, nossas atividades e nossos
                  hábitos de consumo. Prejuízo: A tecnologia pode ser usada para
                  nos prejudicar de várias maneiras. Isso pode incluir ataques
                  cibernéticos, roubo de identidade e violência. A tecnologia
                  também pode ser usada para nos expor a conteúdo prejudicial,
                  como discurso de ódio, pornografia e violência. É importante
                  estar ciente dos riscos da tecnologia e tomar medidas para
                  mitigar esses riscos. Podemos fazer isso sendo críticos com a
                  informação que consumimos, sendo cuidadosos com nossos dados
                  pessoais e usando a tecnologia de forma responsável. Além dos
                  riscos mencionados acima, a tecnologia também pode levar a:
                  Isolamento social: A tecnologia pode nos tornar mais isolados
                  socialmente, pois nos permite nos conectar com outras pessoas
                  online, mas não pessoalmente. Isso pode levar a sentimentos de
                  solidão, depressão e ansiedade. Dificuldade de concentração: A
                  tecnologia pode nos tornar mais difíceis de concentrar, pois
                  estamos constantemente bombardeados com informações e
                  estímulos. Isso pode dificultar a realização de tarefas e o
                  aprendizado. Vícios: A tecnologia pode ser viciante, pois
                  libera dopamina, um neurotransmissor que está associado ao
                  prazer. Isso pode levar a vícios em jogos, redes sociais,
                  pornografia e outras formas de tecnologia. É importante estar
                  ciente desses riscos e tomar medidas para evitá-los. Podemos
                  fazer isso usando a tecnologia de forma consciente e
                  estabelecendo limites para o nosso tempo de tela.
                </p>
              </section>
              <section className="section-texto">
                <h3>Os benefícios da tecnologia</h3>
                <p>
                  A tecnologia é uma ferramenta poderosa que tem o potencial de
                  melhorar nossas vidas de muitas maneiras. Ela pode nos ajudar
                  a: Comunicar-nos com outras pessoas de todo o mundo Aprender
                  coisas novas Trabalhar de forma mais eficiente Cuidar da nossa
                  saúde Divertir-nos Aqui estão alguns exemplos específicos de
                  como a tecnologia pode ser usada para melhorar nossas vidas:
                  Comunicação: A tecnologia pode nos ajudar a nos conectar com
                  outras pessoas de todo o mundo, independentemente da sua
                  localização. Podemos usar a internet para conversar com amigos
                  e familiares, fazer novos amigos, trabalhar em projetos
                  colaborativos e participar de comunidades online.
                  Aprendizagem: A tecnologia pode nos ajudar a aprender coisas
                  novas de forma rápida e fácil. Podemos usar a internet para
                  acessar informações sobre qualquer assunto, assistir a vídeos
                  educacionais, fazer cursos online e participar de comunidades
                  de aprendizagem online. Produtividade: A tecnologia pode nos
                  ajudar a trabalhar de forma mais eficiente. Podemos usar
                  aplicativos para gerenciar nossos projetos, organizar nossos
                  arquivos e colaborar com outras pessoas. Saúde: A tecnologia
                  pode nos ajudar a cuidar da nossa saúde. Podemos usar
                  aplicativos para monitorar nossa saúde, fazer exercícios,
                  aprender sobre nutrição e encontrar profissionais de saúde.
                  Entretenimento: A tecnologia pode nos ajudar a nos divertir.
                  Podemos usar a internet para assistir filmes, ouvir música,
                  jogar jogos e ler livros. A tecnologia é uma ferramenta
                  poderosa que pode ser usada para melhorar nossas vidas de
                  muitas maneiras. É importante usar a tecnologia de forma
                  consciente e responsável para aproveitar todos os seus
                  benefícios.
                </p>
              </section>
              <section>
                <h3>Outros posts</h3>
                <ul>
                  <li>
                    <a
                      href="https://news.microsoft.com/pt-br/conhecendo-o-momento-da-ia-avancando-no-futuro-por-meio-da-inteligencia-artificial-responsavel/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      O futuro da inteligência artificial
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://news.microsoft.com/pt-br/nova-pesquisa-global-da-microsoft-mostra-riscos-online-e-o-valor-das-ferramentas-de-seguranca-para-manter-criancas-mais-seguras-no-ambiente-digital/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Os riscos da tecnologia
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://news.microsoft.com/pt-br/os-beneficios-inesperados-da-transformacao-digital/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Os benefícios da tecnologia
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default Blog;
