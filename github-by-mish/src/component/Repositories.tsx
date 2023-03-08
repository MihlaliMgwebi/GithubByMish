import { useEffect, useState } from "react";
import { searchRepositories } from "../api/api";

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
      <h1>Hello Repositories</h1>
      <div>
        <p>Incomplete Results: {repositories?.incomplete_results ?? "False"}</p>
        <p>Total Count: {repositories?.total_count ?? "False"}</p>
        {/* map repostories.repositories */}
      </div>
    </>
  );
};

export default Repositories;
