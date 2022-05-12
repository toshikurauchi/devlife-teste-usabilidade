import type { NextPage } from "next";
import Projeto1 from "../src/contents/Projeto1";
import stylesV1 from "../styles/V1.module.css";
import stylesV2 from "../styles/V2.module.css";

const Home: NextPage = () => {
  return <Projeto1 styles={stylesV1} />;
};

export default Home;
