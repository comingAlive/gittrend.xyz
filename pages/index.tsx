import {useState} from "react";
import FilterMenu from "../components/FilterMenu";
import Header from "../components/Header";
import ReposList from "../components/ReposList";

const IndexPage = () => {
    // let tempLanguages = [];

    const [showFilter, setShowFilter] = useState(false);

    const toggleShowFilter = () => setShowFilter(!showFilter);

    return (
        <>
            <Header/>
            <main>
                <button
                    onClick={toggleShowFilter}
                    className="z-10 mt-14 w-full h-12 text-lg font-semibold leading-loose text-white bg-gray-600 border-0"
                >
                    Filter
                </button>
                {!showFilter && <FilterMenu toggleShowFilter={toggleShowFilter}/>}

                {showFilter && <ReposList/>}
            </main>
        </>
    );
};
export default IndexPage;
