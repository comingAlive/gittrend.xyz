import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import useSWR from "swr";
import { useLanguages } from "../context/LanguagesContext";
import { fetcher } from "../lib/fetcher";
import Footer from "./Footer";
import Skeleton from "./Skeleton";
import StarIcon from "./StarIcon";

type Props = {
  period: string;
};

const ReposList = memo(({ period }: Props) => {
  let selectedLanguages = useLanguages()
    .filter((l) => l.selected)
    .map((l) => l.name);
  if (selectedLanguages.length === 60) selectedLanguages = [];

  const { data: repos } = useSWR<Repo[]>(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}?languages=${selectedLanguages}&since=${period}`,
    fetcher
  );

  return (
    <section>
      <ul className="grid-cols-2 gap-2 md:grid">
        {!repos ? (
          <>
            {Array.from({ length: isMobile ? 4 : 20 }, (_, i) => (
              <Skeleton key={i} />
            ))}
          </>
        ) : (
          repos.map((repo, i) => {
            return (
              <li
                key={i}
                className="relative z-0 mt-4 bg-white rounded-sm border border-l-8 border-gray-600 shadow-sm  transition-all transition transform cursor-pointer hover:scale-95 hover:z-50 md:mt-2 dark:bg-black"
                style={{ borderColor: repo.languageColor }}
              >
                <Link legacyBehavior href={repo.url}>
                  <a
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    className="block py-5 px-4 pl-16"
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
                      <span className="text-xs font-medium leading-normal">
                        {repo.author}
                      </span>
                      <span className="block mt-1 mr-10 text-lg font-bold leading-normal md:text-xl">
                        {repo.name}
                      </span>
                    </div>
                    <div className="mt-2 mr-8">
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
