import React from "react";
// import { Link } from "react-router-dom";
import logo from "./assets/RotaractIcon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <a href="/">
            <img className="w-24 h-auto" src={logo} alt="ROTARACT LOGO" />
          </a>
          <p className="mt-2 text-sm text-gray-300 text-center md:text-left">
            Rotaract Club <br /> IIITM Gwalior
          </p>
        </div>

        {/* Middle Section */}
        <div className="text-center md:text-left">
          <p className="font-bold">Follow us on</p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a
              className="text-blue-500 hover:text-blue-700 transition"
              href="https://www.facebook.com/rotaractiiitm/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-facebook text-2xl"></i>
            </a>
            <a
              className="text-blue-600 hover:text-blue-800 transition"
              href="https://in.linkedin.com/company/rotaract-club-abv-iiitm"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin text-2xl"></i>
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <a className="text-gray-400 hover:text-white transition" href="/about-us">
              About
            </a>
            <a className="text-gray-400 hover:text-white transition" href="/contact-us">
              Contact Us
            </a>
            <a
              className="text-gray-400 hover:text-white transition"
              href="https://www.iiitm.ac.in/index.php/en/"
              target="_blank"
              rel="noreferrer"
            >
              ABV-IIITM
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left">
          <p className="font-bold">Developed By</p>
          <a
            className="text-gray-400 hover:text-white transition"
            href="https://in.linkedin.com/in/swatik-paul-1218b3136"
            target="_blank"
            rel="noreferrer"
          >
            Swatik Paul
          </a>
          <br />
          <a
            className="text-gray-400 hover:text-white transition"
            href="https://www.linkedin.com/in/vivekkamboj1/"
            target="_blank"
            rel="noreferrer"
          >
            Vivek Kamboj
          </a>

          <p className="font-bold mt-4">Designed By</p>
          <a
            className="text-gray-400 hover:text-white transition"
            href="https://in.linkedin.com/in/manish-mavi-05"
            target="_blank"
            rel="noreferrer"
          >
            Manish Mavi
          </a>

          <p className="mt-4 text-sm">
            For any queries, reach out to us at email <br />
            <b className="text-yellow-400">rotaract@iiitm.ac.in</b>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        <p>Copyright &copy; 2021 ROTARACT CLUB IIITM. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
