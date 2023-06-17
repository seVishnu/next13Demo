import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(`https://api.github.com/repos/sevishnu/${name}`);
  const repo = await response.json();
  return repo;
}
const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2>{name}</h2>
    </>
  );
};

export default Repo;
