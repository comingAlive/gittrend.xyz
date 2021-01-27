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
    <section className="overflow-hidden fixed top-0 right-0 bottom-0 left-0 z-40 mx-auto max-w-4xl shadow transition md:text-lg box-border">
      <button
        onClick={() => toggleShowFilter(period)}
        className="z-10 mt-14 w-full h-12 text-lg font-semibold leading-loose text-white bg-gray-600 border-0 shadow md:text-xl dark:bg-gray-800"
      >
        Apply filters
      </button>
      <div className="mt-4">
        <label htmlFor="search" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-6 w-full h-10 shadow transition box-border hover:bg-gray-50 dark:bg-black"
          type="text"
          id="search"
          placeholder="Search..."
        />
        <button
          onClick={() => setInput("")}
          className="w-full text-white bg-gray-800 shadow transition md:text-xl hover:bg-black"
        >
          Clear
        </button>
      </div>
      <div className="mt-2 h-full">
        <div>
          <div className="flex justify-between">
            <p className="mb-1 ml-2">Categories</p>
            <select
              value={period}
              onChange={handlePeriod}
              className="px-2 h-8 bg-white rounded border shadow transition dark:bg-black rounder hover:bg-gray-50"
              name="category"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <select
                value={category}
                onChange={handleCategory}
                className="px-4 w-44 h-8 bg-white rounded border shadow transition dark:bg-black rounder hover:bg-gray-50"
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
              className="flex items-center py-0 pr-0 pl-4 ml-4 text-left bg-white rounded border border-gray-200 shadow transition cursor-pointer dark:bg-black hover:bg-gray-50"
            >
              {selectedCount === 0 ? "Select All" : "Unselect All"}
              <span className="ml-2 font-medium">
                {selectedCount}/{totalCount}
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-1 h-auto text-sm text-center md:mt-4 md:text-xl">
          {languages
            .filter((l) => {
              return (
                l.name.toLowerCase().includes(input.toLowerCase()) && l.show
              );
            })
            .slice(0, 30)
            .map((l) => {
              return (
                <button
                  onClick={() => handleSelect(l.name)}
                  key={l.name}
                  className={`border-none rounded-none cursor-pointer shadow bg-opacity-40 px-0 py-2 h-10 transition ${
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
