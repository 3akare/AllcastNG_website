import { useState } from "react";

export default function NavBar() {
  const [showDropDown, setShowDropDown] = useState(true);

  const handleDropDownClick = () => {
    setShowDropDown((oldValue) => !oldValue);
  };

  return (
    <nav className="w-screen fixed z-10 text-white bg-black">
      <div className="container mx-auto flex items-center justify-between p-8">
        <div className="flex flex-row gap-2 items-center justify-center">
          <a href="/" className="flex items-center justify-center gap-1 flex-row">
            <img src="/allcast-logo.svg" alt="" />
            <p className="text-2xl font-bold">Allcast</p>
          </a>
        </div>
        <div
          className={
            showDropDown
              ? "flex flex-col gap-1 lg:hidden cursor-pointer"
              : "close"
          }
          onClick={handleDropDownClick}
        >
          <div className="w-6 h-[2px] bg-white"></div>
          <div className="w-6 h-[2px] bg-white"></div>
          <div className="w-6 h-[2px] bg-white"></div>
        </div>
        <div className={showDropDown ? "dropdown" : "dropdown active"}>
          <ul className="flex flex-col items-center gap-8 text-sm font-normal uppercase relative">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Extensions</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Get Hosting</a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-8 text-sm font-normal uppercase">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Extensions</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a
                href="#"
                className="p-4 bg-[var(--primary-blue)] text-white rounded-md"
              >
                Get Hosting
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
