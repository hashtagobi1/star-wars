import { useQuery } from "@apollo/client";
import Link from "next/link";
import React from "react";
import { AllPeople } from "../../graphql/queries";
import { MainLayout, Name, TD, TH } from "./styles";

type people = {
  name: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  gender: string;
  id: string;
  homeworld: {
    name: string;
  };
  filmConnection: filmConnection;
};

type filmConnection = {
  films: films[];
};

type films = {
  title: string;
  episodeID: number;
  director: string;
  producers: string[];
  releaseDate: string;
};
interface Data {
  allPeople: people[];
}

const MainSection = () => {
  const { loading, error, data } = useQuery<Data>(AllPeople);
  const people = data && data.allPeople;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:</p>;

  const renderRows = () => {
    return people.people.map((person: people, i: number) => {
      const renderName = (name: string) => {
        return name;
      };

      return (
        <tr key={i}>
          <TD>
            <Link passHref href={`/name/${renderName(person.name)}`}>
              <Name>{person.name}</Name>
            </Link>
          </TD>
          <TD>{person.hairColor}</TD>
          <TD>{person.skinColor}</TD>
          <TD>{person.eyeColor}</TD>
          <TD>{person.gender}</TD>
          <TD>{person.homeworld.name}</TD>
        </tr>
      );
    });
  };

  return (
    <MainLayout>
      <table>
        <thead>
          <TH>Name</TH>
          <TH>Hair Color</TH>
          <TH>Skin Color</TH>
          <TH>Eye Color</TH>
          <TH>Gender</TH>
          <TH>HomeWorld</TH>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </MainLayout>
  );
};

export default MainSection;
