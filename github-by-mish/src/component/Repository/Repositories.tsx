import { useEffect, useState } from "react";
import { listPublicRepositories as listOfPublicRepositories } from "../../api/api";
import SearchRepository from "../Search/SearchRepository";
import Repository from "./Repository";

const Repositories = () => {
  const [publicRepositories, setPublicRepositories] =
    useState<IPublicRepository[]>();

  useEffect(() => {
    getRepositories();
  }, []);

  async function getRepositories() {
    const publicRepositories = await listOfPublicRepositories();
    setPublicRepositories(publicRepositories);
  }

  return (
    <>
      <h1>List of Repositories</h1>
      <SearchRepository />
      {publicRepositories
        ? publicRepositories.map((publicRepository) => (
            <Repository
              key={publicRepository.id}
              repository={publicRepository}
            />
          ))
        : "No Public Repositories available"}
    </>
  );
};

export default Repositories;
