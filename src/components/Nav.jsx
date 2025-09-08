import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="nav">
      <nav className="container-xl h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-black tracking-tight text-[18px] glow-accent"
        >
          Value Profits System
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {/* <NavLink to="/" className="link-accent">
            Forside
          </NavLink>
          <NavLink to="/betingelser" className="link-accent">
            Betingelser
          </NavLink>
          <NavLink to="/privatliv" className="link-accent">
            Privatliv
          </NavLink> */}
        </div>

        <a
          href="https://calendly.com/vpsystem1/30min"
          target="_blank"
          rel="noreferrer"
          className="btn-accent"
        >
          Book en samtale
        </a>
      </nav>
    </header>
  );
}
