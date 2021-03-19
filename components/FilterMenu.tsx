import { ChangeEvent, memo, useState } from "react";
import {
  useDispatchLanguages,
  useLanguages,
} from "../context/LanguagesContext";
import useLocalStorage from "../lib/useLocalStorage";

type Props = {
  toggleShowFilter: (period) => void;
};

const FilterMenu = memo(({ toggleShowFilter }: Props) => {
  const [category, setCategory] = useLocalStorage("category", "all");
  const [period, setPeriod] = useState(() => {
    return JSON.parse(localStorage.getItem("period")) || "daily";
  });
  const languages = useLanguages();
  const dispatch = useDispatchLanguages();
  const handleSelect = (name) => dispatch({ type: "SELECT", payload: name });

  const [input, setInput] = useState("");

  function handleCategory(e: ChangeEvent<HTMLSelectElement>) {
    setCategory(e.target.value);
    dispatch({ type: "SHOW", payload: e.target.value });
    setInput("");
  }

  function handlePeriod(e: ChangeEvent<HTMLSelectElement>) {
    setPeriod(e.target.value);
  }

  const selectedCount = languages
    .filter((l) => l.show)
    .filter((l) => l.name.toLowerCase().includes(input) && l.selected).length;
  const totalCount = languages.filter(
    (l) => l.name.toLowerCase().includes(input) && l.show
  ).length;

  function handleSelectUnselect() {
    if (selectedCount === 0) {
      dispatch({ type: "SELECT_ALL", payload: category });
    } else {
      dispatch({ type: "UNSELECT_ALL", payload: category });
    }
  }

  return (
    <section className="fixed top-0 right-0 bottom-0 left-0 z-40 mx-auto max-w-4xl transition md:text-lg">
      <button
        onClick={() => toggleShowFilter(period)}
        className="block z-10 py-2 px-8 mt-14 ml-auto w-full text-xl font-semibold text-gray-800 bg-gray-200 rounded transition md:w-auto dark:text-gray-200 hover:bg-gray-300 md:text-2xl dark:bg-gray-800"
      >
        Apply filters
      </button>
      <div className="">
        <label htmlFor="search" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-6 mt-4 w-full h-16 text-xl shadow-inner transition box-border  dark:bg-black"
          type="text"
          id="search"
          placeholder="Search..."
        />
        <button
          onClick={() => setInput("")}
          className="block z-10 py-2 px-8 mt-4 ml-auto w-full text-xl font-semibold text-gray-800 bg-gray-200 rounded shadow-sm transition md:w-auto dark:text-gray-200 hover:bg-gray-300 md:text-2xl dark:bg-gray-800"
        >
          Clear Input
        </button>
      </div>
      <div className="mt-4 h-full">
        <div>
          <div className="flex justify-between items-baseline">
            <p className="mb-1 ml-2 text-2xl font-medium">Categories</p>
            <select
              value={period}
              onChange={handlePeriod}
              className="px-2 pr-12 mb-1 text-xl bg-white rounded-sm border-none shadow-sm transition dark:bg-black"
              name="category"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <select
                value={category}
                onChange={handleCategory}
                className="px-4 w-40 text-xl bg-white rounded-sm border-none shadow-sm transition dark:bg-black"
                name="category"
              >
                <option value="all">All</option>
                <option value="web">Web</option>
                <option value="data">Data Science</option>
                <option value="front">Front-end</option>
                <option value="back">Back-end</option>
                <option value="mobile">Mobile</option>
                <option value="desktop">Desktop</option>
                <option value="iot">IoT</option>
                <option value="system">System Programming</option>
              </select>
            </div>
            <button
              onClick={handleSelectUnselect}
              className="flex col-span-8 col-start-6 items-center py-0 pr-0 pl-4 ml-4 text-lg text-left bg-white shadow-sm transition cursor-pointer dark:bg-black"
            >
              {selectedCount === 0 ? "Select All" : "Unselect All"}
              <span className="ml-2 font-medium">
                {selectedCount}/{totalCount}
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-2 text-lg text-left md:mt-4 md:text-xl">
          {languages
            .filter((l) => {
              return (
                l.name.toLowerCase().includes(input.toLowerCase()) && l.show
              );
            })
            .slice(0, 14)
            .map((l) => {
              return (
                <button
                  onClick={() => handleSelect(l.name)}
                  key={l.name}
                  className={`cursor-pointer border shadow-sm bg-opacity-30 px-0 py-2 h-10 transition ${
                    l.selected
                      ? l.color + " font-semibold"
                      : "bg-white dark:bg-black"
                  }`}
                >
                  {l.name}
                </button>
              );
            })}
        </div>
      </div>
    </section>
  );
});
export default FilterMenu;
