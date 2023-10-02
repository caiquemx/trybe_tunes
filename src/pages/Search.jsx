import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import SkeletonHeader from "../components/SkeletonHeader";
import Header from "../components/Header";
import SkeletonCard from "../components/Cards/SkeletonCard";
import AlbumCard from "../components/Cards/AlbumCard";
import useFetchUserData from "../CustomHooks/useFetchUserData";
import searchAlbumsAPI from "../services/searchAlbumsAPI";

export default function Search() {
  const [searchData, setSearchData] = useState({ searchInput: "" });
  const [skeletonSearch, setSkeletonSearch] = useState();
  const [albuns, setAlbuns] = useState([]);
  const [isDisable, setIsDisable] = useState(true);

  const userData = useFetchUserData();

  useEffect(() => {
    const fetchAlbuns = async () => {
      const result = await searchAlbumsAPI(searchData.searchInput);
      setTimeout(() => {
        setSkeletonSearch(false);
        return setAlbuns(result);
      }, 2000);
    };
    fetchAlbuns();
  }, [searchData.searchInput]);

  async function handleSearch(event) {
    setSkeletonSearch(true);
    const {
      target: { searchInput },
    } = event;
    event.preventDefault();
    setSearchData(() => ({ [searchInput.name]: searchInput.value }));
  }

  function handleChange({ target }) {
    if (target.value.length > 2) {
      return setIsDisable(false);
    }
    return setIsDisable(true);
  }

  return (
    <div className="h-screen flex flex-col items-center w-screen">
      {!userData ? (
        <SkeletonHeader />
      ) : (
        <>
          <Header className="h-1/4" page={"search"} userName={userData.name} />
          <form
            onSubmit={handleSearch}
            className="h-3/4 flex flex-row w-1/2 justify-center items-center"
            id="search-form"
          >
            <div className="w-3/4 flex flex-row justify-center items-center border border-1 border-gray-400 mb-12 rounded-lg">
              <input
                className="h-11 w-11/12 focus:outline-none p-2 bg-transparent"
                type="text"
                name="searchInput"
                placeholder="Artista ou Album"
                id="searchInput"
                onChange={handleChange}
              />
              <BsSearch className="w-1/12" />
            </div>
            <button
              className="w-1/4 h-12 bg-blue-400 ml-4 mb-12 shadow-md text-slate-500 font-bold border rounded-lg disabled:cursor-not-allowed disabled:bg-gray-100 enabled:border-2 enabled:border-blue-400 enabled:text-white hover:bg-blue-300"
              type="submit"
              disabled={isDisable}
            >
              Pesquisar
            </button>
          </form>
          {skeletonSearch && (
            <div
              id="albuns-section"
              className="flex flex-row flex-wrap items-center justify-center w-full space-x-6 space-y-6"
            >
              <SkeletonCard />
            </div>
          )}
          {albuns && !skeletonSearch && (
            <div
              id="albuns-section"
              className="flex flex-row flex-wrap justify-center w-full space-x-6 space-y-6"
            >
              {albuns.map((alb) => (
                <AlbumCard data={alb} key={alb.collectionId} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
