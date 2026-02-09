import { useState } from "react";
import Search from "../assets/Search.svg";
import BigTarelka from "../assets/kattaTarelka.svg";
import bgImage from "../assets/bgImage.svg";
import LongLine from "../assets/LongLine.svg";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import TextStyle from "../assets/fonts/GreatVibes-Regular.ttf";
import HandBag from "../assets/Handbag.svg"

const Header = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // Close drawer after navigation
  };
  return (
    <header
    id="home"
      className="relative bg-cover bg-center px-5 py-10  bg-black"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="container relative z-10 mx-auto px-15 ">
        <h1 className="text-[24px] font-bold text-[#FF9F0D] text-center">
          Food<span className="text-[24px] text-white font-bold">tuck</span>
        </h1>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-5">
            <li>
              <button
                className="text-[16px] font-normal cursor-pointer text-white transition-all duration-300 hover:text-[#FF9F0D]"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="text-[16px] font-normal cursor-pointer text-white transition-all duration-300 hover:text-[#FF9F0D]"
                onClick={() => scrollToSection("menu")}
              >
                Menu
              </button>
            </li>
            <li>
              <button
                className="text-[16px] font-normal cursor-pointer text-white transition-all duration-300 hover:text-[#FF9F0D]"
                onClick={() => scrollToSection("blog")}
              >
                Blog
              </button>
            </li>
            <li>
              <button
                className="text-[16px] font-normal cursor-pointer text-white transition-all duration-300 hover:text-[#FF9F0D]"
                onClick={() => scrollToSection("pages")}
              >
                Pages
              </button>
            </li>
            <li>
              <button
                className="text-[16px] font-normal cursor-pointer text-white transition-all duration-300 hover:text-[#FF9F0D]"
                onClick={() => scrollToSection("aboutUs")}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                className="text-[16px] font-normal cursor-pointer text-white transition-all duration-300 hover:text-[#FF9F0D]"
                onClick={() => scrollToSection("shop")}
              >
                Shop
              </button>
            </li>
            <li>
              <button
                className="text-[16px] font-normal cursor-pointer text-white transition-all duration-300 hover:text-[#FF9F0D]"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <form className="flex border border-[#FF9F0D] items-center justify-between gap-2 rounded-[27px] xl:w-77.5 xl:h13.5 px-5 py-2">
              <input
                className="text-[16px] w-full font-normal outline-none text-white"
                type="text"
                placeholder="Search..."
              />
              <img className="w-6 h-6" src={Search} alt="" />
            </form>
            <img src={HandBag} alt="" />
          </div>
        </div>
      </div>
      <main>
        <div className="container mx-auto mt-10 px-10 ">
          <div className="flex items-center justify-between relative z-10">
            <div className=" flex items-center gap-10">
              <div className="flex flex-col-reverse gap-8">
                <img className="h-39.5" src={LongLine} alt="" />
                <div className="flex flex-col items-start gap-5">
                  <FaFacebookF className="text-white w-4 h-4 transition-all duration-300 hover:text-[#FF9F0D]" />
                  <FaTwitter className="text-white w-4 h-4 transition-all duration-300 hover:text-[#FF9F0D]" />
                  <FaPinterestP className="text-white w-4 h-4 transition-all duration-300 hover:text-[#FF9F0D]" />
                </div>
                <img className="h-39.5" src={LongLine} alt="" />
              </div>
              <div className="flex flex-col gap-5">
                <p
                  className={`textStyle text-[32px] font-normal text-[#FF9F0D] ${TextStyle}`}
                >
                  Its Quick & Amusing!
                </p>
                <p className="text-[60px] text-white font-bold leading-15">
                  <span className="text-[60px] text-[#FF9F0D] font-bold">
                    Th
                  </span>
                  e Art of speed 
                </p>
                <p className="text-[60px] text-white font-bold leading-15">food Quality</p>
                <div>
                  <p className="text-white text-[16px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="text-white text-[16px] font-normal">
                    Varius sed haretra dictum neque massa congue
                  </p>
                </div>
                <button className="w-47.5 h-15 bg-[#FF9F0D] rounded-[30px] text-[16px] text-[#E0DFDF] font-normal text-center">See Menu</button>
              </div>
            </div>
            <img className="lg:h-112.5 lg:w-184.45" src={BigTarelka} alt="" />
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
