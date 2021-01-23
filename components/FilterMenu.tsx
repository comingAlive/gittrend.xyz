import { ChangeEvent, useState } from "react";
import {
  useDispatchLanguages,
  useLanguages,
} from "../context/LanguagesContext";

const FilterMenu = ({ toggleShowFilter }) => {
  const [category, setCategory] = useState("all");
  const languages = useLanguages();
  const dispatch = useDispatchLanguages();
  const handleSelect = (id) => dispatch({ type: "SELECT", payload: id });

  const [input, setInput] = useState("");

  function handleCategory(e: ChangeEvent<HTMLSelectElement>) {
    setCategory(e.target.value);
    dispatch({ type: "SHOW", payload: e.target.value });
    console.log(e.target.value);
  }

  const selectedCount = languages
    .filter((l) => l.show)
    .filter((l) => l.name.toLowerCase().includes(input) && l.selected).length;
  const totalCount = languages.filter(
    (l) => l.name.toLowerCase().includes(input) && l.show
  ).length;

  function handleSelectUnselect() {
    if (totalCount === selectedCount) {
      dispatch({ type: "UNSELECT_ALL", payload: category });
    } else {
      dispatch({ type: "SELECT_ALL", payload: category });
    }
  }

  return (
    <div className="overflow-hidden fixed top-0 right-0 bottom-0 left-0 z-40 mx-auto max-w-4xl bg-white bg-gray-100 shadow transition box-border">
      <button
        onClick={toggleShowFilter}
        className="z-10 mt-14 w-full h-12 text-lg font-semibold leading-loose text-white bg-gray-600 border-0 shadow"
      >
        Apply filters
      </button>
      <div className="mt-4">
        <label htmlFor="search" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-6 w-full h-10 shadow box-border"
          type="text"
          id="search"
          placeholder="Search..."
        />
        <button
          onClick={() => setInput("")}
          className="w-full text-white bg-gray-800 shadow"
        >
          Clear
        </button>
      </div>
      <div className="mt-2">
        <div>
          <p className="ml-4">Categories</p>

          <div className="grid grid-cols-2">
            <div>
              <select
                value={category}
                onChange={handleCategory}
                className="px-4 py-1 w-44 h-8 shadow rounder"
                name="location"
              >
                <option value="all">All</option>
                <option value="web">Web</option>
                <option value="usa">Data Science</option>
                <option value="sunnyvale-ca-usa">Embedded computing</option>
                <option value="austin-tx-usa">Android</option>
                <option value="san-mateo-ca-usa">iOS</option>
                <option value="santa-clara-ca-usa">
                  Santa Clara, CA, USA (1)
                </option>
                <option value="switzerland">Switzerland (1)</option>
              </select>
            </div>
            <span
              onClick={handleSelectUnselect}
              className="py-1 px-4 ml-4 bg-white rounded shadow"
            >
              {selectedCount === totalCount ? "Unselect all" : "Select All"}
              <span className="ml-2 font-medium">
                {selectedCount}/{totalCount}
              </span>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-4 text-sm text-center">
          {languages
            .filter((l) => {
              return (
                l.name.toLowerCase().includes(input.toLowerCase()) && l.show
              );
            })
            .slice(0, 30)
            .map((l) => {
              return (
                <div
                  onClick={() => handleSelect(l.id)}
                  key={l.id}
                  className={`cursor-pointer bg-white shadow py-2 h-9 ${
                    l.selected && "bg-yellow-500 bg-opacity-10"
                  }`}
                >
                  {l.name}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default FilterMenu;
