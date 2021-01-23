import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import Skeleton from "./skeleton";
import Star from "./star";

const ReposList = memo(() => {
  const URI_ENDPOINT = "http://localhost:3001/api/repositories";
  const [period] = useState("daily");
  // const selectedLanguages = useLanguages()
  //   .filter((l) => l.selected)
  //   .map((l) => l.name);
  const selectedLanguages = ["html"]
  const [repos, setRepos] = useState<Repo[]>([]);
  useEffect(() => {
    fetch(`${URI_ENDPOINT}?languages=${selectedLanguages}&since=${period}`)
      .then((r) => r.json())
      .then((r) => {
        setRepos(r);
      });
  }, []);
  return (
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
  );
});
export default ReposList;
