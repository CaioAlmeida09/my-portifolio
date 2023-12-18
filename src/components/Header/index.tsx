import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className=" h-24 bg-black text-white items-center flex justify-between md:px-10 px-3">
      <h1 className=" md:text-2xl text-lg font-bold">
        Portfó<span className=" -ml-1.5 text-blue-400"> lio</span>
      </h1>
      <nav className="flex md:gap-7 gap-3 md:text-xl ">
        <Link className="hover:text-blue-400" to="/">
          Home
        </Link>
        <Link className="hover:text-blue-400" to="/sobreMim">
          Sobre Mim
        </Link>
        <Link className="hover:text-blue-400" to="/projetos">
          Projetos
        </Link>
      </nav>
    </header>
  );
}
