import Logo from "../assets/nike-logo.svg";
import NavLinks from "./NavLinks";
import { FaSearch, FaRegHeart, FaCartArrowDown } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="nav-top flex items-center justify-between mx-10 my-3 ">
        <div className="nav-logo z-50 md:w-auto w-full flex justify-between">
          <a href="/">
            <img
              className="size-16 md:cursor-pointer"
              src={Logo}
              alt="nike-logo"
            />
          </a>
          {/* <div className="text-3xl">
            <GiHamburgerMenu />
          </div> */}
        </div>
        <div className="nav-links">
          <ul className="md:flex hidden space-x-10 ">
            <NavLinks />
          </ul>
        </div>
        <div className="nav-misc flex items-center space-x-5">
          <div className="p-2 search-bar flex items-center text-gray-900 bg-gray-200 rounded-full ">
            <FaSearch size={20} />
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input bg-gray-200 pl-2"
              onChange={() => ""}
              placeholder="Search"
            />
          </div>
          <FaRegHeart size={25} />
          <FaCartArrowDown size={25} />
        </div>
      </div>
      {/* Mobile Nav
      <div className="nav-links">
        <ul className="md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4">
          <li className="font-bold">
            <a href="/newandfeatured">New & Featured</a>
          </li>

          <NavLinks />
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
