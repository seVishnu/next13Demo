import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/sevishnu/repos");
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }); // wait 2 seconds
  const data = await response.json();
  return data;
}
const ReposPage = async () => {
  const data = await fetchRepos();
  console.log(data);
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`/code/repos/${item.name}`}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar />
                  {item.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch />
                  {item.forks_count}
                </span>
                <span>
                  <FaEye />
                  {item.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
