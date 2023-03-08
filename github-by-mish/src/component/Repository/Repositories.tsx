import { useEffect, useState } from "react";
import { searchRepositories } from "../../api/api";
import Repository from "./Repository";

const Repositories = () => {
  const [repositories, setRepositories] = useState<IRepositories>();

  useEffect(() => {
    getRepositories();
  }, []);

  async function getRepositories() {
    const repositories = await searchRepositories();
    console.log(repositories);
    setRepositories(repositories);
  }

  return (
    <>
      <h1>List of Repositories</h1>
      <div>
        <p>Incomplete Results: {repositories?.incomplete_results ?? "False"}</p>
        <p>Total Count: {repositories?.total_count ?? "False"}</p>
        {repositories?.items ? (
          repositories?.items.map((repository) => (
            <Repository
              key={repository.id}
              repository={repository}
            />
          ))
        ) : (
          <p>Unknown</p>
        )}
      </div>
    </>
  );
};

export default Repositories;
