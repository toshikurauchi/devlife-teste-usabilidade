import { useCallback, useState } from "react";
import Button from "../Button";
import styles from "./Pesquisa.module.css";

interface IPergunta {
  msg: string;
  button: string;
  hideBackground: boolean;
}

interface IPesquisaProps {
  perguntas: IPergunta[];
}

interface IBackgroundHiderProps {
  hide: boolean;
}

const BackgroundHider = ({ hide }: IBackgroundHiderProps) => {
  if (hide) return <div className={styles.hideBackground}></div>;
  else return null;
};

const Pesquisa = ({ perguntas }: IPesquisaProps) => {
  const [perguntaAtualIdx, setPerguntaAtualIdx] = useState(0);
  const perguntaAtual =
    perguntas.length > perguntaAtualIdx ? perguntas[perguntaAtualIdx] : null;
  const handleClickNext = useCallback(() => {
    setPerguntaAtualIdx((idx) => idx + 1);
  }, [setPerguntaAtualIdx]);

  if (!perguntaAtual) return null;
  return (
    <>
      <BackgroundHider hide={perguntaAtual.hideBackground} />
      <div className={styles.pesquisaContainer}>
        <div className={styles.pergunta}>{perguntaAtual.msg}</div>
        <div className={styles.buttonContainer}>
          <Button onClick={handleClickNext}>{perguntaAtual.button}</Button>
        </div>
      </div>
    </>
  );
};

export default Pesquisa;
