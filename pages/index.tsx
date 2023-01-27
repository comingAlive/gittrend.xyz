import { useState } from "react";
import Container from "../components/Container";
import FilterMenu from "../components/FilterMenu";
import ReposList from "../components/ReposList";
import { useLanguages } from "../context/LanguagesContext";
import useLocalStorage from "../lib/useLocalStorage";

const IndexPage = () => {
  const state = useLanguages();
  const [period, setPeriod] = useLocalStorage("period", "daily");
  const [showFilter, setShowFilter] = useState(false);
  const toggleShowFilter = (period) => {
    localStorage.setItem(
      "languages",
      JSON.stringify(state.filter((l) => l.selected).map((l) => l.name))
    );
    setPeriod(period);
    setShowFilter(!showFilter);
  };

  return (
    <Container>
      {/*{false && <div className="bg-gray-400 bg-gray-500 bg-red-900 bg-orange-300 bg-orange-400 bg-orange-600 bg-amber-300 bg-yellow-700 bg-lime-400 bg-lime-800 bg-green-600 bg-teal-500 bg-cyan-500 bg-cyan-600 bg-cyan-700 bg-blue-500 bg-blue-900 bg-purple-500 bg-pink-500 bg-rose-700 bg-sky-500 bg-slate-700 bg-slate-800 bg-slate-500 bg-slate-600 bg-neutral-600"/>}*/}
      <div className="w-full">
        <button
          onClick={toggleShowFilter}
          className="block z-10 py-2 px-8 mt-14 ml-auto w-full text-xl font-semibold text-gray-800 bg-gray-200 rounded transition md:w-auto dark:text-gray-200 hover:bg-gray-300 md:text-2xl dark:bg-gray-800"
        >
          Filter
        </button>
      </div>
      {showFilter && <FilterMenu toggleShowFilter={toggleShowFilter} />}
      {!showFilter && <ReposList period={period} />}
    </Container>
  );
};
export default IndexPage;
