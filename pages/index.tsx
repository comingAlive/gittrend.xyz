import {useState} from "react";
import FilterMenu from "../components/FilterMenu";
import Container from "../components/Container";
import ReposList from "../components/ReposList";
import {useLanguages} from "../context/LanguagesContext";
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
        {/*{false && <div className="bg-lightBlue-500 bg-gray-400 bg-gray-500 bg-red-900 bg-orange-300 bg-orange-400 bg-orange-600 bg-amber-300 bg-yellow-700 bg-lime-400 bg-lime-800 bg-green-600 bg-teal-500 bg-cyan-500 bg-cyan-600 bg-cyan-700 bg-blue-500 bg-blue-900 bg-purple-500 bg-pink-500 bg-rose-700 bg-blueGray-700 bg-blueGray-800 bg-blueGray-500 bg-blueGray-600 bg-trueGray-600"/>}*/}
        <button
            onClick={toggleShowFilter}
            className="z-10 mt-14 w-full md:text-xl h-12 text-lg font-semibold leading-loose text-white bg-gray-600 dark:bg-gray-800 border-0"
        >
          Filter
        </button>
        {showFilter && <FilterMenu toggleShowFilter={toggleShowFilter}/>}
        {!showFilter && <ReposList period={period}/>}
      </Container>
  );
};
export default IndexPage;
