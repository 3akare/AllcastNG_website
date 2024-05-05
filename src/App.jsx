import logo from "./assets/allcast-logo.svg";
import codeblock from "./assets/codeblock.svg";
import codeblock2 from "./assets/codeblock(2).svg";
import { FaFacebook, FaTwitter, FaPhone, FaLinkedin } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";

import { AiOutlineMail } from "react-icons/ai";
// import icon from "./assets/icon.svg";
import cloud from "./assets/cloud-icon.svg";
import cyber from "./assets/cybersecurity.svg";
import database from "./assets/database.svg";
import image from "./assets/dashboard-min.png";

import ExampleComponent from "./components/ExampleComponent";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

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
                <a
                  href="#features"
                  className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Features
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Services
                </a>
              </li> */}
            </ul>
          </nav>
          <a
            href="#pricing"
            className="flex flex-row justify-center items-center p-0 gap-2 w-32 h-10 bg-[#0066ff] flex-none order-1 flex-grow-0 max-lg:hidden font-semibold hover:text-[#0066ff] hover:bg-white duration-300"
          >
            Pricing
          </a>
          <div
            className="flex-col gap-1 hidden max-lg:flex"
            onClick={() => {
              setOpen(true);
            }}
          >
            <div className="w-5 h-[1.75px] bg-white"></div>
            <div className="w-5 h-[1.75px] bg-white"></div>
            <div className="w-5 h-[1.75px] bg-white"></div>
          </div>
        </nav>
        <nav
          className={
            open
              ? "bg-black h-screen w-[80vw] fixed top-0 right-0 lg:hidden flex items-center justify-center font-clash text-2xl z-50"
              : "bg-black h-screen w-[80vw] fixed top-0 right-0 hidden lg:hidden items-center justify-center font-clash text-2xl"
          }
        >
          <div
            className="flex-col flex absolute top-8 right-4"
            onClick={() => {
              setOpen(false);
            }}
          >
            <div className="w-5 h-[1.75px] bg-white rotate-45 translate-y-[0.5px]"></div>
            <div className="w-5 h-[1.75px] bg-white -rotate-45 -translate-y-[0.5px]"></div>
          </div>
          <ul className="flex flex-col gap-12">
            <li>
              <a
                href="#features"
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="tel:+2348066990129"
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Call Us Today!
              </a>
            </li>
            <li>
              <div className="flex gap-4 flex-row">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaLinkedin />
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
            </li>
          </ul>
        </nav>
        <section className="container mx-auto max-w-7xl flex flex-row max-lg:flex-col justify-center items-center gap-16 flex-grow-0 order-1">
          <div className="flex flex-col max-lg:items-center max-lg:text-center gap-8 w-full lg:pr-12 max-lg:p-2">
            <h1 className="text-6xl max-lg:text-[40px] font-semibold max-w-[500px] font-clash max-lg:min-h-[160px] min-h-[240px]">
              {/* Organized cloud and web hosting for your business */}
              <ExampleComponent />
            </h1>
            <h2 className="font-light text-xl max-lg:text-sm max-w-2xl">
              All-in-One Web Hosting Solution - Unlimited Domains, 99.9% Uptime
              Guarantee, Free SSL Certificates, Easy Installs with cPanel
            </h2>
            <div className="flex flex-row w-full max-lg:justify-center items-center gap-8 max-lg:flex-col">
              {/* <a
                href="#"
                className="bg-[#0066ff] px-6 py-3 w-full max-lg:max-w-[500px] max-w-fit font-semibold text-base"
              >
                Get Started
              </a> */}
              <a
                href="tel:+2348066990129"
                className="bg-[#ffffff] px-6 py-3 w-full max-lg:max-w-[500px] max-w-fit !text-black font-semibold text-base hover:bg-black hover:!text-white transition-colors duration-300"
              >
                Schedule a Call Now!
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
        <section className="w-full bg-[#e7e7e7] py-12" id="features">
          <div className="container mx-auto max-w-7xl flex flex-col justify-center items-center text-center gap-10">
            <div className="flex flex-col gap-8 items-center justify-center">
              <h1 className="font-semibold text-[40px] max-w-[500px] font-clash">
                Boost Your Website's Performance
              </h1>
              <h2 className="font-light text-xl max-lg:text-sm max-w-2xl">
                Feature-Rich Hosting Experience - Enjoy Unmatched Performance,
                Robust Security, Easy Installs, and Exceptional Support
              </h2>
            </div>
            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10">
              {/* hhhhhhhh */}
              <div className="w-[315px] h-[250px] bg-white shadow-lg p-4 flex flex-col items-start gap-6 transition-transform duration-300">
                <img src={cloud} alt="" className="size-[54px]" />
                <h1 className="font-clash font-semibold text-xl">
                  Remote daily backup
                </h1>
                <h2 className="text-left text-sm font-light">
                  Remote daily backup Your data backed up automatically every
                  day, no hassle. Restore with a click if anything goes wrong.
                </h2>
              </div>
              <div className="w-[315px] h-[250px] bg-white shadow-lg p-4 flex flex-col items-start gap-6">
                <img src={cyber} alt="" className="size-[54px]" />
                <h1 className="font-clash font-semibold text-xl">
                  Worldwide cybersecurity
                </h1>
                <h2 className="text-left text-sm font-light">
                  Global cybersecurity experts monitoring 24/7. Iron-clad
                  protection from hackers worldwide.
                </h2>
              </div>
              <div className="w-[315px] h-[250px] bg-white shadow-lg p-4 flex flex-col items-start gap-6">
                <img src={database} alt="" className="size-[54px]" />
                <h1 className="font-clash font-semibold text-xl">
                  Scale to success
                </h1>
                <h2 className="text-left text-sm font-light">
                  Infrastructure built to expand seamlessly as your startup
                  explodes. Never outgrow your hosting again.
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#573280]">
          <div className="container mx-auto max-w-7xl h-fit flex flex-row items-center justify-between p-4 max-lg:flex-col max-lg:text-center">
            <h1 className="text-white font-clash text-3xl max-w-[400px] my-8 max-lg:text-2xl">
              Find Out Why Our Web Hosting Platform is the Top Choice
            </h1>
            <h2 className="max-w-[700px] text-lg text-white font-light max-lg:text-sm">
              Experience the Ultimate in Web Hosting Excellence: Discover How
              Our Powerful Servers, Lightning-Fast Speeds, and Unparalleled
              Customer Support Have Made Us the Go-To Choice for Businesses and
              Individuals Alike, Empowering Them to Build, Grow, and Thrive
              Online with Confidence and Ease.
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
                Focus on Your Business, Not Server Maintenance: Let Us Handle
                the Technical Heavy Lifting
              </h2>
              <div className="flex flex-row w-full max-lg:justify-center items-center gap-8 max-lg:flex-col">
                <a
                  href="mailto:allcastoffice@allcast.ng"
                  className="bg-[#0066ff] px-6 py-3 max-lg:max-w-[500px] max-w-fit font-semibold text-base hover:text-[#0066ff] hover:bg-white duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#e7e7e7] py-12" id="pricing">
          <div className="container mx-auto max-w-7xl flex flex-col justify-center items-center text-center gap-10">
            <div className="flex flex-col gap-8 items-center justify-center">
              <h1 className="font-semibold text-[40px] max-w-[500px] font-clash">
                Our Pricing
              </h1>
              <h2 className="font-light text-xl max-lg:text-sm max-w-2xl">
                Get the Best Value: Compare Our Web Hosting Plans and Prices
              </h2>
            </div>
            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10">
              <div className="w-[315px] h-[550px] bg-white shadow-lg p-4 flex flex-col items-center justify-between">
                <div className="flex flex-col items-center gap-8">
                  <p className="text-[40px]">🚀</p>
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
                      <p>16x CPU Power</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>Free Migration</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>Free Domain Name</p>
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
                  <p className="text-[40px]">⚡️</p>
                  <h1 className="font-clash_base font-semibold text-xl">
                    Agency
                  </h1>
                  <h2 className="font-light text-base">
                    Best For Medium Agency
                  </h2>
                  <h3 className="font-light text-lg">
                    $<span className="font-semibold text-4xl">199</span>/mo
                  </h3>
                  <ul className="flex flex-col gap-3 text-sm">
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>16x CPU Power</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>Free Migration</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>Free Domain Name</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>Unlimited Bandwidth</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>Shared Environment</p>
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
                  <p className="text-[40px]">👨🏾‍💻</p>
                  <h1 className="font-clash_base font-semibold text-xl">
                    Developer
                  </h1>
                  <h2 className="font-light text-base">
                    Best For Independent Developers
                  </h2>
                  <h3 className="font-light text-lg">
                    $<span className="font-semibold text-4xl">69</span>/mo
                  </h3>
                  <ul className="flex flex-col gap-3 text-sm">
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>4x CPU Power</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>Free Migration</p>
                    </li>
                    <li className="flex flex-row items-center justify-center gap-2 font-light">
                      <SiTicktick />
                      <p>Free Domain Name</p>
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
              href="tel:+2348066990129"
              className="bg-black text-white px-6 py-3 max-lg:max-w-[500px] max-w-fit h-fit font-semibold text-base hover:text-black hover:bg-white duration-300"
            >
              Schedule a Call Now!
            </a>
          </div>
        </section>
      </main>
      <footer className="w-full bg-[#573280] p-8 text-white font-clash_base">
        <nav className="container mx-auto  max-w-7xl flex flex-row justify-between items-center p-0 h-11">
          <a href="/" className="flex items-center justify-center gap-4">
            <img src={logo} alt="" />
            <h1 className="text-xl">
              Allcast{" "}
              <span className="text-xs">©️ 2024. All Rights Reserved.</span>
            </h1>
          </a>
          <div className="flex gap-4 flex-row">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="tel:+2348066990129">
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
