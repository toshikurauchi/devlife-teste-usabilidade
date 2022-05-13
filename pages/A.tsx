import type { NextPage, NextPageContext } from "next";
import Projeto1 from "../src/contents/Projeto1";
import styles from "../styles/V1.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Projeto1 styles={styles} />
    </>
  );
};

export default Home;
