import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { GetPerson } from "../../graphql/queries";

const Name = () => {
  const { loading, error, data } = useQuery<any>(GetPerson);
  console.log(data)

  const router = useRouter();
  console.log(router.query.name);
  return <div>Name: {router.query.name}</div>;
};

export default Name;
