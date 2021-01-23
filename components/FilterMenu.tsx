import { ChangeEvent, useState } from "react";
import {
  useDispatchLanguages,
  useLanguages,
} from "../context/LanguagesContext";

const FilterMenu = ({toggleShowFilter}) => {
  const languages = useLanguages();
  const dispatch = useDispatchLanguages();
  const handleSelect = (id) => dispatch({ type: "SELECT", payload: { id } });

  const [input, setInput] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="overflow-hidden fixed top-0 right-0 bottom-0 left-0 z-40 bg-white bg-gray-100 shadow transition box-border mx-auto max-w-4xl">
      <button
          onClick={toggleShowFilter}
          className="z-10 mt-14 w-full h-12 text-lg font-semibold leading-loose text-white bg-gray-600 border-0">
        Apply filters
      </button>
      <div className="mt-4">
        <label htmlFor="search" />
        <input
          value={input}
          onChange={handleSearch}
          className="px-6 w-full h-10 box-border"
          type="text"
          id="search"
          placeholder="Search..."
        />
        <button className="w-full text-white bg-gray-800">Add</button>
      </div>
      <div className="mt-2">
        <div className="text-center">
          <p>Categories</p>
          <select className="w-full" name="location">
            <option className="text-center" value="all">
              All
            </option>
            <option value="san-francisco-ca-usa">
              San Francisco, CA, USA (6)
            </option>
            <option value="usa">USA (3)</option>
            <option value="sunnyvale-ca-usa">Sunnyvale, CA, USA (2)</option>
            <option value="austin-tx-usa">Austin, TX, USA (1)</option>
            <option value="san-mateo-ca-usa">San Mateo, CA, USA (1)</option>
            <option value="santa-clara-ca-usa">Santa Clara, CA, USA (1)</option>
            <option value="switzerland">Switzerland (1)</option>
          </select>
        </div>
        <div className="grid grid-cols-3 mt-4 text-sm text-center">
          {languages
            .filter((l) => {
              return l.name.toLowerCase().includes(input.toLowerCase());
            })
            .slice(0, 30)
            .map((l) => {
              return (
                <div
                  onClick={() => handleSelect(l.id)}
                  key={l.id}
                  className={`cursor-pointer bg-white shadow py-2 ${
                    l.selected && "bg-yellow-500"
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
