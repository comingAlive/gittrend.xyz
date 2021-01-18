import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import Header from "../components/header";

import Skeleton from "../components/skeleton";
import Star from "../components/star";

const URI_ENDPOINT = "http://localhost:8888/repositories";

export default function IndexPage() {
  // let tempLanguages = [];
  const [languages] = useState([
    "javascript",
    "rust",
    "typescript",
    "python",
    "go",
  ]);
  const [showFilter, setShowFilter] = useState(false);
  const [input, setInput] = useState("");

  const toggleShowFilter = () => setShowFilter(!showFilter);

  const [repos, setRepos] = useState<Repo[]>([]);
  useEffect(() => {
    fetch(`${URI_ENDPOINT}?languages=${languages}`)
      .then((r) => r.json())
      .then((r) => {
        setRepos(r);
      });
  }, []);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  function handleAdd() {}

  return (
    <>
      <Header />
      <nav>nav</nav>
      <main>
        <button
          onClick={toggleShowFilter}
          className="z-10 mt-8 w-full h-12 text-lg font-semibold leading-loose text-white bg-gray-600 border-0"
        >
          Filter
        </button>
        {showFilter && (
          <div className="fixed top-0 right-0 bottom-0 left-0 z-40 w-auto bg-gray-100">
            <button
              className="z-10 mt-14 w-full h-12 text-lg font-semibold leading-loose text-white bg-gray-600 border-0"
              onClick={() => toggleShowFilter()}
            >
              Apply filters
            </button>
            <div className="component">
              <label htmlFor="search" className="mb-4">
                Search
              </label>
              <input
                value={input}
                onChange={handleSearch}
                className="px-6 w-full h-8 box-border"
                type="text"
                id="search"
                placeholder="Company, title..."
              />
              <button onClick={handleAdd}>Add</button>
            </div>
            <div className="component">
              <div className="subcomponent">
                <p className="filter-label">Location</p>{" "}
                <select name="location">
                  <option value="all">All locations</option>
                  <option value="san-francisco-ca-usa">
                    San Francisco, CA, USA (6)
                  </option>
                  <option value="usa">USA (3)</option>
                  <option value="sunnyvale-ca-usa">
                    Sunnyvale, CA, USA (2)
                  </option>
                  <option value="austin-tx-usa">Austin, TX, USA (1)</option>
                  <option value="san-mateo-ca-usa">
                    San Mateo, CA, USA (1)
                  </option>
                  <option value="santa-clara-ca-usa">
                    Santa Clara, CA, USA (1)
                  </option>
                  <option value="switzerland">Switzerland (1)</option>
                </select>
              </div>
              <div className="subcomponent">
                <label className="switch tooltip">
                  <input type="checkbox" id="remote" name="remote" />{" "}
                  <span className="slider small round"/>{" "}
                  <span className="switch-label">Remote OK</span>
                </label>
              </div>
            </div>
          </div>
        )}

        <ul>
          {!repos.length ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            repos.map((repo, i) => {
              return (
                <li
                  key={i}
                  className="relative mt-4 bg-white rounded shadow-sm transition-all"
                >
                  <Link href={repo.url}>
                    <a
                      target="_blank"
                      className="block py-5 px-4 pl-16 rounded border-l-4 border-gray-600 cursor-pointer"
                      style={{ borderColor: repo.languageColor }}
                    >
                      <div>
                        <div className="absolute left-5 p-1 w-9 h-9 leading-6 rounded shadow-sm box-border">
                          <Image
                            width={30}
                            height={30}
                            src={repo.avatar}
                            alt={repo.name + " logo"}
                          />
                        </div>
                        <span className="text-xs">author: </span>
                        <span className="text-sm font-medium leading-normal">
                          {repo.author}
                        </span>
                        <span className="block mt-1 mr-10 font-bold leading-normal">
                          {repo.name}
                        </span>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="">{repo.description}</span>
                        <div className="absolute right-4 top-5 font-semibold text-right text-md">
                          <div>{repo.language}</div>
                          <div className="flex justify-end items-center">
                            <Star />
                            <div>{repo.stars}</div>
                          </div>
                          <div className="flex justify-end">
                            <span className="text-xs">
                              +{repo.currentPeriodStars}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </main>
    </>
  );
}
