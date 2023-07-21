import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="items-center h-[50px] flex justify-between px-5 bg-gray-500 text-white">
      <span className="font-bold">Navigation</span>

      <span>
        <Link to="/" className="mr-2">
          Products
        </Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
}
