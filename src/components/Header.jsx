import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonHeader from "./SkeletonHeader";
import { PiHeadphonesFill } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { getUser } from "../services/userAPI";

export default function Header() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      const result = await getUser();
      setUserData(result);
    };
    fetchName();
  }, []);

  return (
    <>
      {!userData ? (
        <SkeletonHeader />
      ) : (
        <div className="flex flex-col w-full h-48">
          <div
            id="first-half-header"
            className="p-4 flex flex-row justify-between items-center h-2/3 shadow-sm shadow-gray-500 bg-blue-600 z-10"
          >
            <div
              id="logo-container"
              className="w-1/12 flex flex-col items-center text-white"
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
              <span className="w-full text-center">{userData.name}</span>
            </div>
          </div>
          <div
            id="second-half-header"
            className="h-1/3 flex flex-row justify-center items-center text-center shadow-md mb-4 shadow-gray-500 font-bold text-white"
          >
            <div className="hover:bg-transparent hover:text-black hover:cursor-pointer hover:shadow-inner flex w-1/3 h-full bg-blue-400 justify-center items-center">
              <Link to="/search">Pesquisar</Link>
            </div>
            <div className="hover:bg-transparent hover:text-black hover:cursor-pointer flex w-1/3 h-full bg-blue-400 justify-center items-center">
              <Link to="/favorites">Favoritos</Link>
            </div>
            <div className="hover:bg-transparent hover:text-black hover:cursor-pointer flex w-1/3 h-full bg-blue-400 justify-center items-center">
              <Link to="/profile">Perfil</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
