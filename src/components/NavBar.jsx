import { useState } from "react";

export default function NavBar() {
  const [showDropDown, setShowDropDown] = useState(true);

  const handleDropDownClick = () => {
    setShowDropDown((oldValue) => !oldValue);
  };

  return (
    <header className="container mx-auto flex items-center justify-between p-8">
      <nav>
        <a href="/">
          <p className="text-2xl font-bold">Allcast</p>
        </a>
      </nav>
      <div
        className={
          showDropDown
            ? "flex flex-col gap-1 lg:hidden cursor-pointer"
            : "close"
        }
        onClick={handleDropDownClick}
      >
        <div className="w-6 h-[2px] bg-black"></div>
        <div className="w-6 h-[2px] bg-black"></div>
        <div className="w-6 h-[2px] bg-black"></div>
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
    </header>
  );
}
