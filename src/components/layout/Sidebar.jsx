import React from "react";
import { Squares2X2Icon, HomeIcon, BookOpenIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar bg-slate-200 min-h-screen">
        <ul className="list-outside pl-5 pt-4">
          <li className="flex gap-4 mb-3">
            <HomeIcon className="size-6 text-black-500" />
            <Link to="/" className="font-mono font-extrabold text-lg">
              Dashboard
            </Link>
          </li>
          <li className="flex gap-4 mb-3">
            <UserGroupIcon className="size-6 text-black-500" />
            <Link to="/users" className="font-mono font-extrabold text-lg">User</Link>
          </li>
          <li className="flex gap-4 mb-3">
            <Squares2X2Icon className="size-6 text-black-500" />
            <Link to="/category" className="font-mono font-extrabold text-lg">Category</Link>
          </li>
          <li className="flex gap-4 mb-3">
            <BookOpenIcon className="size-6 text-black-500" />
            <Link to="/post" className="font-mono font-extrabold text-lg">Post</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
