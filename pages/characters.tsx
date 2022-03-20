import axios from "axios";
import React, { useEffect, useState } from "react";
import Breadcrumbs, { Page } from "../components/Breadcrumbs";
import Layout from "../components/Layout";
import MainSection from "../components/MainSection";

const Characters = () => {
  const [quote, setQuote] = useState<string>("Quote Loading...");

  const renderScreen = () => (
    <Layout>
      <Breadcrumbs pageName={Page.Characters} />
      <h2>Characters</h2>
      <h3>Description</h3>
      <p>{quote}</p>

      <MainSection />
    </Layout>
  );

  useEffect(() => {
    axios
      .get("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
      .then(function ({ data }) {
        setQuote(data.content);
      });
  }, []);

  return renderScreen();
};

export default Characters;
