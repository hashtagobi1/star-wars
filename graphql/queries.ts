import { gql } from "@apollo/client";

export const AllPeople = gql`
query AllPeople {
  allPeople {
    people {
      name
      filmConnection {
        films {
          title
          episodeID
          director
          producers
          releaseDate
        }
      }
      skinColor
      homeworld {
        name
      }
      eyeColor
      gender
      hairColor
      id
    }
  }
}
`;

export const GetPerson = gql`
query Person($personId: ID, $personId2: ID) {
  person(personID: $personId, id: $personId2) {
    name
  }
}
`