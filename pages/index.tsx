import type { NextPage } from "next";
import { Layout } from "../components/allComponents";
import Breadcrumbs, { Page } from "../components/Breadcrumbs";

const Home: NextPage = () => {



  return (
    <Layout>
      <Breadcrumbs pageName={Page.Home} />
    </Layout>
  );
};

export default Home;
