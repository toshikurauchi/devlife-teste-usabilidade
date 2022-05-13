import React from "react";
import Head from "next/head";

interface IProjeto1Props {
  styles: any;
}

const Projeto1 = ({ styles }: IProjeto1Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto Individual</title>
        <meta name="description" content="Projeto Individual" />
      </Head>

      <main className={styles.main}>
        <h1>Aventura em alto mar!</h1>

        <div className={styles.avisos}>
          <div className={styles.avisos}>
            <strong>Data de Entrega:</strong> 29/03 (terça-feira) até 21hrs
          </div>
          <div className={styles.avisos}>
            A entrega do projeto deverá ser feita{" "}
            <strong>via Blackboard</strong>
          </div>
        </div>

        <section>
          <h2>
            Introdução{" "}
            <img
              alt="🌊"
              className="twemoji"
              src="https://twemoji.maxcdn.com/v/latest/svg/1f30a.svg"
              title=":ocean:"
            />
          </h2>

          <div className={styles.multiImageContainer}>
            <img
              src="img/deep_sea_adventure_01.jpeg"
              alt="Jogo Deep Sea Adventure"
            />
            <img
              src="img/deep_sea_adventure_02.jpeg"
              alt="Jogo Deep Sea Adventure"
            />
          </div>

          <p>
            Neste projeto individual o seu objetivo é desenvolver uma versão
            adaptada e simplificada do jogo{" "}
            <a
              href="https://oinkgames.com/en/games/analog/deep-sea-adventure/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deep Sea Adventure
            </a>
            . Neste jogo, o jogador é um mergulhador em busca de tesouros
            escondidos no fundo do mar. Porém, o tanque de oxigênio não é grande
            o suficiente para possibilitar um mergulho tranquilo. Com a fonte de
            oxigênio escassa, os mergulhadores precisam gerenciar bem o tempo
            debaixo da água. Quanto mais fundo o mergulhador for, maior é a
            chance de encontrar tesouros mais valiosos. Além disso, a quantidade
            de tesouros que o mergulhador carrega afeta sua mobilidade. O
            objetivo do jogo é conseguir trazer para o submarino o maior valor
            em tesouros.
          </p>
        </section>

        <section>
          <h2>Regras</h2>

          <p>A cada rodada o jogo deve seguir os passos descritos a seguir:</p>

          <ol>
            <li>
              <div className={styles.textAndImg}>
                <img
                  src="img/respirar.gif"
                  alt="Deep Sea Adventure - Etapa de respirar"
                  className={styles.figure}
                />
                <strong>Respirar:</strong> Jogo verifica se há a necessidade de
                reduzir o oxigênio. O oxigênio deve ser reduzido de acordo com a
                quantidade de tesouros que o mergulhador estiver carregando. Ou
                seja, se o jogador estiver carregando <code>2</code> tesouros o
                nível do oxigênio deve diminuir <code>2</code> níveis. Se o
                mergulhador não estiver carregando nenhum tesouro então não há a
                necessidade de reduzir o oxigênio. Se o oxigênio alcançar o
                nível <code>0</code> ou menor, o jogador da vez termina a rodada
                e o jogo acaba.
              </div>
            </li>
            <li>
              <div className={styles.textAndImg}>
                <img
                  src="img/avancar_ou_retroceder.gif"
                  alt="Deep Sea Adventure - Avançar ou Retroceder"
                  className={styles.figure}
                />
                <strong>Avançar ou Retroceder?:</strong> No início da partida o
                jogador começa dentro do submarino. Depois de sair do submarino
                ele deve escolher continuar avançando para o fundo do mar ou
                voltar para o submarino.
                <ul>
                  <li>
                    O mergulhador não pode voltar para o submarino sem tesouros.
                  </li>
                  <li>
                    O mergulhador só pode voltar para o submarino uma única vez.
                  </li>
                  <li>
                    Quando o mergulhador decidir retornar para o submarino ele
                    não pode avançar de volta para o fundo do mar.
                  </li>
                  <li>
                    Depois que o jogador decidir retroceder o jogador não
                    precisa passar por este passo, pois a única opção agora será
                    retroceder.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.textAndImg}>
                <img
                  src="img/nadar.gif"
                  alt="Deep Sea Adventure - Nadar"
                  className={styles.figure}
                />
                <strong>Nadar:</strong> Jogador rola dois dados <code>d3</code>{" "}
                (dado de três faces) para verificar o avanço. A soma dos dois
                resultados do dado <code>d3</code> representa a profundidade em
                que o mergulhador vai nadar.
                <img
                  src="img/carrying_treasures.gif"
                  alt="Deep Sea Adventure - Aumentando o peso"
                  className={styles.figure}
                />
                Se o jogador estiver carregando tesouros, então a quantidade de
                tesouros carregados deve ser subtraído do valor do avanço. (
                <strong>Exemplo:</strong> Se um dado sorteou o valor{" "}
                <code>1</code> e o outro dado sorteou o valor
                <code>3</code> e o jogador está carregando <code>3</code>{" "}
                tesouros, então o jogador vai avançar somente uma casa). Note
                que se o valor for negativo o jogador deve ficar parado. Esse
                passo se aplica tanto para avançar para o fundo do mar quanto
                para retornar para o submarino.
              </div>
            </li>
            <li>
              <div className={styles.textAndImg}>
                <img
                  src="img/caca_ao_tesouro.png"
                  alt="Deep Sea Adventure - Encontrando Tesouros"
                  className={styles.figure}
                />
                <strong>Caça ao tesouro:</strong> Neste passo o jogador pode
                fazer uma busca por tesouros ou decidir soltar um dos tesouros
                que ele carrega (<strong>Obs.:</strong> Este passo pode ser
                realizado independente da direção que o mergulhador estiver
                indo. Então se o mergulhador estiver retornando para o submarino
                ele pode vasculhar a área em busca de tesouros).
                <ul>
                  <li>
                    Se o mergulhador decidir soltar um tesouro, ele pode
                    escolher qual tesouro deve ser descartado. Note que se o
                    mergulhador estiver retornando ao submarino ele não pode
                    soltar o tesouro se for o único que ele carrega.
                  </li>
                  <li>
                    Se o mergulhador decidir vasculhar a área:
                    <ul>
                      <li>
                        O jogo deve informar o valor da recompensa. O valor da
                        recompensa é um número aleatório que depende da
                        profundidade do mar em que o mergulhar se encontra.
                      </li>
                      <li>
                        O jogador decide se ele deseja ficar ou não com o
                        tesouro. Note que o jogador só pode carregar no máximo 4
                        tesouros. Então se ele já estiver com 4 tesouros, o
                        jogador escolhe qual tesouro deve ser descartado.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ol>

          <p>
            O jogo acaba quando o mergulhador voltar para o submarino ou se o
            oxigênio do tanque se esgotar. O mergulhador só receberá a
            recompensa dos tesouros se conseguir voltar para o submarino. Caso o
            oxigênio se esgote antes do mergulhador chegar ao submarino os
            tesouros serão perdidos e os pontos não são computados.
          </p>

          <div className={styles.multiImageContainer}>
            <img
              src="img/chegando_ao_submarino_deep_sea_adventure.gif"
              alt="Deep Sea Adventure - Chegando no submarino"
            />
            <img
              src="img/acabando_oxigenio.gif"
              alt="Deep Sea Adventure - Acabando o oxigênio"
            />
          </div>

          <h3>Oxigênio</h3>

          <p>
            O jogo começa com o oxigênio cheio, marcando o nível em{" "}
            <code>25</code>. Conforme o jogo avança, o nível do oxigênio irá
            reduzindo conforme as ações do jogador. Se o nível de oxigênio
            alcançar o valor <code>0</code> o jogador da vez termina a rodada e
            o jogo acaba.
          </p>

          <h3>Profundidade</h3>

          <p>
            A profundidade máxima que o mergulhador pode alcançar em direção ao
            fundo do mar é representada pelo valor
            <code>32</code>. Onde a profundidade de nível <code>1</code>{" "}
            representa a profundidade mais próxima do submarino e a profundidade
            de nível <code>32</code> representa a profundidade mais distante do
            submarino. E a posição de valor
            <code>0</code> representa o submarino.
          </p>

          <h3>Tesouro</h3>

          <p>
            O valor da recompensa de cada tesouro varia de acordo com o nível de
            profundidade em que o tesouro se encontra. A tabela a seguir
            descreve os possíveis valores para cada nível:
          </p>

          <table>
            <thead>
              <tr>
                <th>Níveis</th>
                <th>Possíveis valores</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 - 8</td>
                <td>0 - 3 pontos</td>
              </tr>
              <tr>
                <td>9 - 16</td>
                <td>4 - 7 pontos</td>
              </tr>
              <tr>
                <td>17 - 24</td>
                <td>8 - 11 pontos</td>
              </tr>
              <tr>
                <td>25 - 32</td>
                <td>12 - 15 pontos</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Simulando o jogo</h2>

          <p>
            Para auxiliá-lo no desenvolvimento deste jogo, vamos simular algumas
            etapas e apresentar um exemplo de como ficaria a implementação deste
            jogo para a versão para terminal. (<strong>Obs.:</strong> O exemplo
            dos vídeos utiliza um print diferente para facilitar a compreensão
            do exemplo. Desta forma, o seu programa <strong>não</strong> precisa
            seguir o mesmo comportamento.)
          </p>

          <p>
            A seguir vamos apresentar apenas um exemplo para guiá-lo neste
            projeto, mas você tem a liberdade de fazer alterações no modo que o
            jogo e o jogador se interagem.
          </p>

          <h3>Iniciando o Jogo</h3>

          <p>
            Ao iniciar o jogo, podemos apresentar uma mensagem de recepção ao
            jogar e até apresentar as regras do jogo.
          </p>

          <img
            src="img/comecando_o_jogo.gif"
            alt="Deep Sea Adventure - Iniciando o jogo"
            className={styles.figure}
          />

          <h3>Etapa para RESPIRAR</h3>

          <ul>
            <li>
              Temos o caso em que o jogador não carrega nenhum tesouro e o
              consumo de oxigênio é <code>0</code>:
              <img
                src="img/respirando_0.gif"
                alt="Deep Sea Adventure - Não consumindo oxigênio"
                className={styles.figure}
              />
            </li>
            <li>
              Temos o caso em que o jogador já carrega alguns tesouros e ocorre
              o consumo de oxigênio. No exemplo a seguir, o jogador carrega{" "}
              <code>4</code> tesouros e consequentemente ocorre o consumo de{" "}
              <code>4</code> unidades de oxigênio:
              <img
                src="img/respirando_4.gif"
                alt="Deep Sea Adventure - Consumindo oxigênio"
                className={styles.figure}
              />
            </li>
          </ul>

          <h3>Avançar ou Retroceder?</h3>

          <p>
            Se o jogador não carregar nenhum tesouro a única opção aqui é
            avançar, caso contrário o jogo deve perguntar se o jogador deseja{" "}
            <strong>Avançar ou voltar para o submarino</strong>. Lembrando que
            uma vez escolhido retroceder, o mergulhador não pode mudar o sentido
            do avanço, ou seja, o jogador não pode mergulhar em direção ao fundo
            do mar.
          </p>

          <img
            src="img/avancar_ou_retroceder_terminal.gif"
            alt="Deep Sea Adventure - Avançar ou Retroceder?"
            className={styles.figure}
          />

          <h3>Etapa para NADAR</h3>

          <p>
            Esta etapa ocorre da mesma forma se o jogador estiver avançando ou
            retrocedendo. A única diferença está no sentindo que o jogador está
            nadando.
          </p>

          <p>A seguir ilustramos alguns cenários:</p>

          <ul>
            <li>
              Neste exemplo, o mergulhador está carregando <code>2</code>{" "}
              tesouros e tirou <code>4</code> na rolagem dos dados, resultando
              no avanço de <code>2</code> casas (<code>4 - 2</code>).
              <img
                src="img/avancando.gif"
                alt="Deep Sea Adventure - Avançando com sucesso"
                className={styles.figure}
              />
            </li>
            <li>
              Mergulhador não avança nenhuma casa por conta do peso dos
              tesouros:
              <img
                src="img/sem_sucesso_ao_avancar.gif"
                alt="Deep Sea Adventure - Sem sucesso ao avançar"
                className={styles.figure}
              />
            </li>
            <li>
              Mergulhador não consegue avançar em direção ao submarino por conta
              do peso:
              <img
                src="img/voltando_ao_submarino_sem_sucesso.gif"
                alt="Deep Sea Adventure - Sem sucesso ao retornar"
                className={styles.figure}
              />
            </li>
          </ul>

          <h3>Etapa da CAÇA AO TESOURO</h3>

          <p>
            Nesta etapa o mergulhador pode explorar a área em busca de tesouros.
            Esta etapa pode ser realizada tanto se o mergulhador estiver
            avançando ou retrocedendo:
          </p>

          <ul>
            <li>
              Mergulhador faz busca por tesouros e possui espaço disponível:
              <img
                src="img/vasculhando_com_slot_disponivel.gif"
                alt="Deep Sea Adventure - Vasculhando tesouro"
                className={styles.figure}
              />
            </li>
            <li>
              Mergulhador faz busca e não possui espaço disponível:
              <img
                src="img/slot_cheio.gif"
                alt="Deep Sea Adventure - Sem espaço para novos tesouros"
                className={styles.figure}
              />
            </li>
            <li>
              Mergulhador deseja somente largar tesouro
              <img
                src="img/soltando_tesouro.gif"
                alt="Deep Sea Adventure - Soltando tesouro"
                className={styles.figure}
              />
            </li>
          </ul>

          <h3>Fim da rodada</h3>

          <p>
            Nesta etapa é interessante apresentar um resumo do status do jogo
            para o jogador:
          </p>

          <img
            src="img/avancando.gif"
            alt="Deep Sea Adventure - Avançando com sucesso"
            className={styles.figure}
          />

          <h3>FIM DE JOGO</h3>

          <ul>
            <li>
              Mergulhador chega no submarino
              <img
                src="img/chegando_ao_submarino.gif"
                alt="Deep Sea Adventure - Chegando ao submarino"
                className={styles.figure}
              />
            </li>
            <li>
              Oxigênio esgotando:
              <img
                src="img/acabou_o_oxigenio.gif"
                alt="Deep Sea Adventure - Acabando o oxigênio"
                className={styles.figure}
              />
            </li>
          </ul>

          <div className={styles.admonition}>
            <div className={styles.admonitionTitle}>Atenção</div>
            <div className={styles.admonitionContent}>
              A simulação acima tem o intuito de auxiliar no desenvolvimento do
              jogo através de <strong>alguns</strong> exemplos. Ou seja, podem
              existir cenários que não foram ilustrados através dos gifs.
            </div>
          </div>
        </section>

        <section>
          <h2>Rubrica</h2>

          <p>
            O seu jogo vai interagir com o jogador através do terminal, então é
            importante sempre manter o jogador informado com relação aos
            momentos em que o oxigênio é consumido, quais valores o jogador
            rolou nos dados entre outros detalhes. Além disso, ao final de cada
            rodada o jogo deve mostrar o nível de oxigênio atual e a
            profundidade atual do jogador.
          </p>

          <h3>CONCEITO I</h3>

          <ul>
            <li>Não implementou nenhum dos 4 passos principais do jogo.</li>
            <li>
              O jogo não possui um loop principal onde é possível jogar rodadas
              consecutivas.
            </li>
          </ul>

          <h3>CONCEITO D</h3>

          <ul>
            <li>
              Foram implementados algumas funcionalidades do jogo, porém algumas
              regras do jogo não foram implementadas.
            </li>
            <li>
              O jogo apresenta algum erro de execução que não possibilita
              testá-lo.
            </li>
            <li>
              O jogo apresenta comportamentos indesejados. (exemplo: não
              respeitar alguma escolha do jogador, atualizar as informações do
              jogo de forma incorreta, ou apresentar algum outro comportamento
              inesperado).
            </li>
          </ul>

          <h3>CONCEITO C</h3>

          <ul>
            <li>Implementou todas as funcionalidades do jogo.</li>
            <li>
              Jogo descreve em detalhes o que está acontecendo em cada rodada,
              sempre mantendo o jogador informado acerca das informações
              relacionadas ao nível de oxigênio, profundidade atual do jogador,
              números dos dados sorteados, entre outras informações.
            </li>
            <li>
              Nos momentos em que o jogo pede para o jogador inserir alguma
              informação, o jogo sempre deixa claro as opção do jogador e o que
              o jogador deve digitar.
            </li>
          </ul>

          <h3>CONCEITO B</h3>

          <ul>
            <li>Atingiu o nível C e mais os itens listados abaixo.</li>
            <li>
              Código utiliza bons nomes de variáveis e funções facilitando a
              legibilidade do código.
            </li>
            <li>
              Código utiliza comentários para descrever alguns trechos de
              código.
            </li>
            <li>Faz a validação das entradas do usuário.</li>
            <li>
              Ao término do jogo, o jogador tem a opção de reiniciar a jogo.
              (Note que o passo de reiniciar o jogo deve ser feito sem parar a
              execução do código.)
            </li>
          </ul>

          <h3>CONCEITO A</h3>

          <ul>
            <li>Atingiu o nível B e mais os itens listados abaixo.</li>
            <li>
              Implementou o modo multiplayer para 2 jogadores. (Para o modo
              multiplayer, todos os jogadores compartilham do mesmo oxigênio.)
            </li>
          </ul>

          <h3>CONCEITO A+</h3>

          <ul>
            <li>Atingiu o nível A e mais os itens listados abaixo.</li>
            <li>
              Implementou algum item avançado, tal como:
              <ul>
                <li>
                  Implementou o modo multiplayer para mais jogadores. Para este
                  item, o jogo deve perguntar a quantidade de jogadores
                  desejada. (Para o modo multiplayer, todos os jogadores
                  compartilham do mesmo oxigênio.)
                </li>
                <li>
                  Utilizou recursos extras (exemplo: ASCII Art) para aprimorar a
                  interface do jogo.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2>Para INSPIRAR</h2>

          <p>
            Abaixo podemos ver um exemplo de jogo mostrando que mesmo com poucos
            recursos, é possível fazer uma interface divertida:
          </p>

          <img
            src="img/inspiracao.gif"
            alt="Aventura em alto mar!"
            className={styles.figure}
          />
        </section>
      </main>
    </div>
  );
};

export default Projeto1;
