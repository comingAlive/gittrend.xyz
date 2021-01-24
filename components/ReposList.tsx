import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";
import useSWR from "swr";
import { useLanguages } from "../context/LanguagesContext";
import { fetcher } from "../lib/fetcher";
import Footer from "./Footer";
import Skeleton from "./Skeleton";
import StarIcon from "./StarIcon";

const ReposList = memo(() => {
  const URI_ENDPOINT =
    "https://gitexplore.netlify.app/.netlify/functions/next_api_repositories";
  const [period] = useState("daily");
  let selectedLanguages = useLanguages()
    .filter((l) => l.selected)
    .map((l) => l.name);
  if (selectedLanguages.length === 60) selectedLanguages = [];

  const { data: repos } = useSWR(
    `${URI_ENDPOINT}?languages=${selectedLanguages}&since=${period}`,
    fetcher
  );

  return (
    <section>
      <ul>
        {!repos ? (
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
                className="relative mt-4 bg-white rounded shadow-sm transition-all dark:bg-black"
              >
                <Link href={repo.url}>
                  <a
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    className="block py-5 px-4 pl-16 rounded border-l-8 border-gray-600 cursor-pointer"
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
                      <span className="text-xs md:text-base">author: </span>
                      <span className="text-sm font-medium leading-normal md:text-lg">
                        {repo.author}
                      </span>
                      <span className="block mt-1 mr-10 font-bold leading-normal md:text-lg">
                        {repo.name}
                      </span>
                    </div>
                    <div className="mt-2 mr-8 text-sm md:text-base">
                      <span>{repo.description}</span>
                      <div className="absolute right-4 top-5 font-semibold text-right md:text-lg">
                        <div>{repo.language}</div>
                        <div className="flex justify-end items-center">
                          <StarIcon />
                          <div>{repo.stars}</div>
                        </div>
                        <div className="flex justify-end">
                          <span className="text-xs md:text-sm">
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
      {repos && <Footer />}
    </section>
  );
});
export default ReposList;
