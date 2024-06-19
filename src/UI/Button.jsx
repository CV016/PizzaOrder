import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 text-sm font-bold uppercase inline-block text-stone-800 tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-500 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    secondary:
      "border-2 border-stone-400 font-bold uppercase inline-block text-stone-400 tracking-wide rounded-full hover:bg-red-400 hover:text-stone-800 transition-colors duration-500 focus:outline-none focus:bg-red-300 focus:text-stone-800 focus:ring focus:ring-red-700 focus:ring-offset-0 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm font-bold",
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
