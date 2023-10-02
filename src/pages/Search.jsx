import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import SkeletonHeader from "../components/SkeletonHeader";
import Header from "../components/Header";
import useFetchUserData from "../CustomHooks/useFetchUserData";

export default function Search() {
  const userData = useFetchUserData();
  const [searchData, setSearchData] = useState({ searchInput: "" });
  const [isDisable, setIsDisable] = useState(true);

  function handleChange({ target }) {
    setSearchData(() => ({ ...searchData, [target.name]: target.value }));
    if (target.value.length > 2) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }

  return (
    <div className="h-screen flex flex-col items-center">
      {!userData ? (
        <SkeletonHeader />
      ) : (
        <>
          <Header className="h-1/4" page={"search"} userName={userData.name} />
          <form
            id="search-form"
            className="h-3/4 flex flex-row w-1/2 justify-center items-center"
          >
            <div className="w-3/4 flex flex-row justify-center items-center border border-1 border-gray-400 mb-12 rounded-lg">
              <input
                className="h-11 w-11/12 focus:outline-none p-2 bg-transparent"
                type="text"
                name="searchInput"
                placeholder="Artista ou Album"
                id="searchInput"
                value={searchData.searchInput}
                onChange={handleChange}
              />
              <BsSearch className="w-1/12" />
            </div>
            <button
              className="w-1/4 h-12 bg-blue-400 ml-4 mb-12 shadow-md text-slate-500 font-bold border rounded-lg disabled:cursor-not-allowed disabled:bg-gray-100 enabled:border-2 enabled:border-blue-400 enabled:text-white hover:bg-blue-300"
              type="button"
              disabled={isDisable}
            >
              Pesquisar
            </button>
          </form>
        </>
      )}
    </div>
  );
}
