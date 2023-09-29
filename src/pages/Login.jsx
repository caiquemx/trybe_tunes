import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { createUser } from "../services/userAPI";
import "../index.css";

export default function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ username: "" });

  function handleChange({ target }) {
    setUserData(() => ({ ...userData, [target.name]: target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    createUser({ name: event.target.username.value });
    navigate("/search");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-1/2 flex flex-col items-center justify-center p-4 m-4 border-1 border-black border"
    >
      <div
        id="input-container"
        className="flex flex-col justify-center items-center space-y-12"
      >
        <h1 className="mt-8 mb-8 text-2xl">Trybe Tunes</h1>
        <div
          id="username-container"
          className="flex flex-row border-b border-b-1 border-b-black"
        >
          <AiOutlineUser className="1/6 self-center" />
          <input
            className="focus:outline-none ml-2 align-bottom placeholder:text-slate-500 placeholder:italic"
            placeholder="Username"
            type="text"
            name="username"
            id="username"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-1/2 p-2 bg-blue-700 hover:bg-blue-600 hover:delay-150 rounded-sm text-center align-center"
        >
          Entrar
        </button>
      </div>
    </form>
  );
}
