import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/RotaractIcon.png";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBtnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ${
        props.navBackground || ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between ">
      <li className="flex">
          <Link to="/">
            <img src={logo} className="bg-blue-500 -m-3 w-22 h-15" alt="title" />
          </Link> <h1 className="text-blue-500 my-5">ROTARACT <br/> CLUB</h1>
        </li>

        {/* Mobile Menu Button */}
        <button
          onClick={handleBtnClick}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <i className="fa fa-bars text-2xl"></i>
        </button>

        {/* Navbar Links */}
        <div
          className={`absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex md:items-center md:space-x-6 px-6 py-4 md:p-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-gray-700 text-lg">
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition-colors"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                CONTACT US
              </Link>
            </li>
            {localStorage.getItem("token") && (
              <li>
                <Link
                  to="/admin/dashboard"
                  className="hover:text-blue-600 transition-colors"
                >
                  Admin-Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
