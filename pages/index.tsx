import type { NextPage, NextPageContext } from "next";
import Pesquisa from "../src/components/Pesquisa";
import Projeto1 from "../src/contents/Projeto1";
import stylesV1 from "../styles/V1.module.css";
import stylesV2 from "../styles/V2.module.css";
import perguntas from "../src/data/perguntas.json";

interface IHomeProps {
  version?: string | null;
}

const Home: NextPage = ({ version }: IHomeProps) => {
  const styles =
    (version &&
      {
        1: stylesV1,
        2: stylesV2,
      }[version]) ||
    stylesV1;
  return (
    <>
      <Projeto1 styles={styles} />
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      version: context.query.v || null,
    },
  };
}

export default Home;
