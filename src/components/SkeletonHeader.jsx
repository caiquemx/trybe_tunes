import { PiHeadphonesFill } from "react-icons/pi";

export default function SkeletonHeader() {
  return (
    <>
      <div className="flex flex-col w-full h-48">
        <div
          id="first-half-header"
          className="p-4 flex flex-row justify-between items-center h-2/3 bg-blue-400 z-10"
        >
          <div
            id="logo-container"
            className="w-1/12 animate-pulse flex flex-col items-center text-white blur-sm"
          >
            <p className="w-full flex flex-row font-bold justify-center text-2xl">
              Trybe <PiHeadphonesFill className="self-center ml-1" />
            </p>
            <p className="w-full ml-4 -mt-2 text-center text-lg">tunes</p>
          </div>
          <div
            id="user-container"
            className="w-2/12 animate-pulse flex flex-row justify-between bg-white rounded-3xl items-center p-2"
          >
            <div className="w-8 h-8 flex bg-blue-200 items-center p-2 rounded-full"></div>
          </div>
        </div>
        <div
          id="second-half-header"
          className="h-1/3 flex flex-row justify-center items-center text-center mb-4 font-bold"
        >
          <div className="flex w-1/3 h-full bg-blue-200 justify-center items-center">
            <div className="w-1/4 h-1/4 animate-pulse bg-gray-100" to="/search">
              {""}
            </div>
          </div>
          <div className="flex w-1/3 h-full bg-blue-200 justify-center items-center">
            <div
              className="w-1/4 h-1/4 animate-pulse bg-gray-100"
              to="/favorites"
            >
              {""}
            </div>
          </div>
          <div className="flex w-1/3 h-full bg-blue-200 justify-center items-center">
            <div
              className="w-1/4 h-1/4 animate-pulse bg-gray-100"
              to="/profile"
            >
              {""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
