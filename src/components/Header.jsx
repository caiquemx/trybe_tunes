import { Link, useNavigate } from "react-router-dom";
import { PiHeadphonesFill } from "react-icons/pi";
import { BiSolidHome } from "react-icons/bi";
import { TbWorldSearch } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Header({ page, userName }) {
  const navigate = useNavigate();
  const selected =
    "bg-blue-100 text-black hover:cursor-pointer hover:bg-transparent flex w-1/3 h-full bg-blue-400 justify-center items-center";
  const style =
    "hover:bg-transparent hover:text-black hover:cursor-pointer flex w-1/3 h-full bg-blue-400 justify-center items-center";

  const [classState, setClassState] = useState({
    home: style,
    search: style,
    favorites: style,
    profile: style,
  });

  useEffect(() => {
    if (!page) return;
    setClassState(() => ({ ...classState, [page]: selected }));
  }, [page]);

  function handleLogoClick() {
    navigate("/home");
  }

  return (
    <>
      <div className="flex flex-col w-full h-48">
        <div
          id="first-half-header"
          className="p-4 flex flex-row justify-between items-center h-2/3 shadow-sm shadow-gray-500 bg-blue-600 z-10"
        >
          <div
            id="logo-container"
            className="w-1/12 flex flex-col items-center text-white hover:cursor-pointer"
            onClick={handleLogoClick}
          >
            <p className="w-full flex flex-row font-bold justify-center text-2xl">
              Trybe <PiHeadphonesFill className="self-center ml-1" />
            </p>
            <p className="w-full ml-4 -mt-2 text-center text-lg">tunes</p>
          </div>
          <div
            id="user-container"
            className="w-2/12 flex flex-row justify-between bg-white rounded-3xl items-center p-2 shadow-md shadow-gray-500"
          >
            <div className="flex bg-blue-600 items-center p-2 rounded-full">
              <FaUserAlt className="self-center text-white" />
            </div>
            <span className="w-full text-center">{userName}</span>
          </div>
        </div>
        <div
          id="second-half-header"
          className="h-1/3 flex flex-row justify-center items-center text-center shadow-md mb-4 shadow-gray-500 font-bold text-white"
        >
          <Link className={classState.home} to="/home">
            <BiSolidHome className="mr-4" />
            <div id="home">Home</div>
          </Link>
          <Link to="/search" className={classState.search}>
            <TbWorldSearch className="mr-4" />
            <div id="search">Descobrir</div>
          </Link>
          <Link to="/favorites" className={classState.favorites}>
            <MdFavorite className="mr-4" />
            <div id="favorite">Favoritos</div>
          </Link>
          <Link to="/profile" className={classState.profile}>
            <FaUserAlt className="mr-4" />
            <div id="profile">Perfil</div>
          </Link>
        </div>
      </div>
    </>
  );
}
