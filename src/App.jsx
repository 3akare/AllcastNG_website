import logo from "./assets/allcast-logo.svg";
import codeblock from "./assets/codeblock.svg";
import codeblock2 from "./assets/codeblock(2).svg";
import {
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";

import { AiOutlineMail } from "react-icons/ai";
// import icon from "./assets/icon.svg";
import cloud from "./assets/cloud-icon.svg";
import image from "./assets/dashboard 1.png";

function App() {
  return (
    <>
      <header className="flex flex-col justify-center items-center p-4 gap-14 w-full h-fit bg-[#573280] shadow-md !text-white">
        <nav className="container mx-auto  max-w-7xl flex flex-row justify-between items-center p-0 h-11 flex-none order-none flex-grow-0 text-base font-clash_base">
          <nav className="flex flex-row justify-start items-center p-0 gap-24 w-full h-6 ">
            <a href="/" className="flex items-center justify-center gap-2">
              <img src={logo} alt="" />
              <h1 className="text-xl">Allcast</h1>
            </a>
            <ul className="flex flex-row justify-start items-center p-0 gap-14 w-fit h-5 flex-none order-1 flex-grow-0 max-lg:hidden font-light">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </nav>
          <a
            href="#"
            className="flex flex-row justify-center items-center p-0 gap-2 w-32 h-10 bg-[#0066ff] flex-none order-1 flex-grow-0 max-lg:hidden font-semibold"
          >
            Get Started
          </a>
        </nav>
        <section className="container mx-auto max-w-7xl flex flex-row max-lg:flex-col justify-center items-center gap-16 flex-grow-0 order-1">
          <div className="flex flex-col max-lg:items-center max-lg:text-center gap-8 w-full lg:pr-12 max-lg:p-2">
            <h1 className="text-6xl max-lg:text-[40px] font-semibold max-w-[500px] font-clash">
              Organized cloud and web hosting for your business
            </h1>
            <h2 className="font-light text-xl max-lg:text-sm max-w-2xl">
              Unlimited Domain & Hosting in One Platform. Website hosting
              options, 99.9% uptime guarantee, free SSL certificate, easy
              WordPress installs.
            </h2>
            <div className="flex flex-row w-full max-lg:justify-center items-center gap-8 max-lg:flex-col">
              {/* <a
                href="#"
                className="bg-[#0066ff] px-6 py-3 w-full max-lg:max-w-[500px] max-w-fit font-semibold text-base"
              >
                Get Started
              </a> */}
              <a
                href="#"
                className="bg-[#ffffff] px-6 py-3 w-full max-lg:max-w-[500px] max-w-fit !text-black font-semibold text-base"
              >
                View Packages
              </a>
            </div>
          </div>
          <img
            src={codeblock}
            alt=""
            className="w-4/5 p-4 min-w-[250px] max-w-[450px]"
          />
        </section>
      </header>
      <main>
        <section className="w-full bg-[#e7e7e7] py-12">
          <div className="container mx-auto max-w-7xl flex flex-col justify-center items-center text-center gap-10">
            <div className="flex flex-col gap-8 items-center justify-center">
              <h1 className="font-semibold text-[40px] max-w-[500px] font-clash">
                These features make your hosting work faster
              </h1>
              <h2 className="font-light text-xl max-lg:text-sm max-w-2xl">
                Unlimited Domain & Hosting in One Platform.Website hosting
                options, 99.9% uptime guarantee, free SSL certificate, easy
                WordPress installs.
              </h2>
            </div>
            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10">
              <div className="w-[315px] h-[250px] bg-white shadow-lg p-4 flex flex-col items-start gap-6">
                <img src={cloud} alt="" className="size-[54px]" />
                <h1 className="font-clash font-semibold text-xl">
                  Remote daily backup
                </h1>
                <h2 className="text-left text-sm font-light">
                  Unlimited Domain & Hosting in One Platform.Website hosting
                  options, 99.9% uptime guarantee, free SSL certificate, easy
                  WordPress installs.
                </h2>
              </div>
              <div className="w-[315px] h-[250px] bg-white shadow-lg p-4 flex flex-col items-start gap-6">
                <img src={cloud} alt="" className="size-[54px]" />
                <h1 className="font-clash font-semibold text-xl">
                  Remote daily backup
                </h1>
                <h2 className="text-left text-sm font-light">
                  Unlimited Domain & Hosting in One Platform.Website hosting
                  options, 99.9% uptime guarantee, free SSL certificate, easy
                  WordPress installs.
                </h2>
              </div>
              <div className="w-[315px] h-[250px] bg-white shadow-lg p-4 flex flex-col items-start gap-6">
                <img src={cloud} alt="" className="size-[54px]" />
                <h1 className="font-clash font-semibold text-xl">
                  Remote daily backup
                </h1>
                <h2 className="text-left text-sm font-light">
                  Unlimited Domain & Hosting in One Platform.Website hosting
                  options, 99.9% uptime guarantee, free SSL certificate, easy
                  WordPress installs.
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#573280]">
          <div className="container mx-auto max-w-7xl h-fit flex flex-row items-center justify-between p-4 max-lg:flex-col max-lg:text-center">
            <h1 className="text-white font-clash text-3xl max-w-[400px] my-8 max-lg:text-2xl">
              Your websites deserve fast , secure and also reliable hosting
            </h1>
            <h2 className="max-w-[700px] text-lg text-white font-light max-lg:text-sm">
              Unlimited Domain & Hosting in One Platform.Website hosting
              options, 99.9% uptime guarantee, free SSL certificate, easy
              WordPress installs.Unlimited Domain & Hosting in One
              Platform.Website hosting options, 99.9% uptime guarantee, free SSL
              certificate, easy WordPress installs.
            </h2>
          </div>
          <img src={image} alt="" className="container mx-auto max-w-7xl p-4" />
        </section>
        <section className="w-full bg-[#573280]">
          <div className="container mx-auto max-w-7xl flex flex-row max-lg:flex-col justify-between items-center gap-16 flex-grow-0 text-white">
            <img
              src={codeblock2}
              alt=""
              className="w-4/5 p-4 min-w-[250px] max-w-[450px]"
            />
            <div className="flex flex-col items-center justify-center max-lg:items-center max-lg:text-center gap-8 w-full max-w-[600px] max-lg:p-2">
              <h1 className="text-5xl max-lg:text-[40px] font-semiboldc font-clash">
                Lets get rid of worries about web hosting to save your time
              </h1>
              <h2 className="font-light text-lg max-lg:text-sm">
                Unlimited Domain & Hosting in One Platform. Website hosting
                options, 99.9% uptime guarantee, free SSL certificate, easy
                WordPress installs.
              </h2>
              <div className="flex flex-row w-full max-lg:justify-center items-center gap-8 max-lg:flex-col">
                <a
                  href="#"
                  className="bg-[#0066ff] px-6 py-3 max-lg:max-w-[500px] max-w-fit font-semibold text-base"
                >
                  Explore now
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#e7e7e7] py-12">
          <div className="container mx-auto max-w-7xl flex flex-col justify-center items-center text-center gap-10">
            <div className="flex flex-col gap-8 items-center justify-center">
              <h1 className="font-semibold text-[40px] max-w-[500px] font-clash">
                These features make your hosting work faster
              </h1>
              <h2 className="font-light text-xl max-lg:text-sm max-w-2xl">
                Unlimited Domain & Hosting in One Platform.Website hosting
                options, 99.9% uptime guarantee, free SSL certificate, easy
                WordPress installs.
              </h2>
            </div>
            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10">
              <div className="w-[315px] h-[550px] bg-white shadow-lg p-4 flex flex-col items-center justify-between">
                <div className="flex flex-col items-center gap-8">
                  <img src={cloud} alt="" className="size-[54px]" />
                  <h1 className="font-clash_base font-semibold text-xl">
                    Start up
                  </h1>
                  <h2 className="font-light text-base">
                    Best for small business owners
                  </h2>
                  <h3 className="font-light text-lg">
                    $<span className="font-semibold text-4xl">99</span>/mo
                  </h3>
                  <ul className="flex flex-col gap-3 text-sm">
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>2x CPU Power</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>2x CPU Power</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>2x CPU Power</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="font-medium text-base">
                    Start 14 days free Trial
                  </h1>
                  <h2 className="text-base font-light">No card needed</h2>
                </div>
              </div>
              <div className="w-[315px] h-[550px] bg-white shadow-lg p-4 flex flex-col items-center justify-between">
                <div className="flex flex-col items-center gap-8">
                  <img src={cloud} alt="" className="size-[54px]" />
                  <h1 className="font-clash_base font-semibold text-xl">
                    Start up
                  </h1>
                  <h2 className="font-light text-base">
                    Best for small business owners
                  </h2>
                  <h3 className="font-light text-lg">
                    $<span className="font-semibold text-4xl">99</span>/mo
                  </h3>
                  <ul className="flex flex-col gap-3 text-sm">
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>2x CPU Power</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>2x CPU Power</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>2x CPU Power</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="font-medium text-base">
                    Start 14 days free Trial
                  </h1>
                  <h2 className="text-base font-light">No card needed</h2>
                </div>
              </div>
              <div className="w-[315px] h-[550px] bg-white shadow-lg p-4 flex flex-col items-center justify-between">
                <div className="flex flex-col items-center gap-8">
                  <img src={cloud} alt="" className="size-[54px]" />
                  <h1 className="font-clash_base font-semibold text-xl">
                    Start up
                  </h1>
                  <h2 className="font-light text-base">
                    Best for small business owners
                  </h2>
                  <h3 className="font-light text-lg">
                    $<span className="font-semibold text-4xl">99</span>/mo
                  </h3>
                  <ul className="flex flex-col gap-3 text-sm">
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>2x CPU Power</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>2x CPU Power</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>2x CPU Power</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="font-medium text-base">
                    Start 14 days free Trial
                  </h1>
                  <h2 className="text-base font-light">No card needed</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full p-8 bg-[#573280] max-lg:bg-[#CCFF8B]">
          <div className="container mx-auto flex justify-between items-center p-8 bg-[#CCFF8B] max-lg:flex-col text-center max-lg:gap-8">
            <h1 className="text-4xl max-lg:text-[30px] font-semiboldc font-clash max-w-[500px]">
              Stop worrying about hosting problems
            </h1>
            <a
              href="#"
              className="bg-black text-white px-6 py-3 max-lg:max-w-[500px] max-w-fit h-fit font-semibold text-base"
            >
              Explore now
            </a>
          </div>
        </section>
      </main>
      <footer className="w-full bg-[#573280] p-8 text-white font-clash_base">
        <nav className="container mx-auto  max-w-7xl flex flex-row justify-between items-center p-0 h-11">
          <a href="/" className="flex items-center justify-center gap-4">
            <img src={logo} alt="" />
            <h1 className="text-xl">Allcast</h1>
          </a>
          <div className="flex gap-4 flex-row">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="tel:+234 806 699 0129">
              <FaPhone />
            </a>
            {/* <a href="#">
              <FaInstagram />
            </a> */}
            <a href="https://twitter.com/@allcastng">
              <FaTwitter />
            </a>
            <a href="mailto:allcastoffice@allcast.ng">
              <AiOutlineMail />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default App;
//
