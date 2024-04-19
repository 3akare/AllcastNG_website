import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="w-screen flex flex-col items-center justify-center bg-[var(--primary-black)] text-white">
      <section className="container max-w-4xl  mx-auto grid grid-cols-2 lg:grid-cols-4 place-items-center gap-2 p-8 py-12">
        <img src="assets/images/microsoft 1.svg" alt="" className="w-64 h-20" />
        <img src="assets/images/hp.svg" alt="" className="w-64 h-20" />
        <img src="assets/images/intel.svg" alt="" className="w-64 h-20" />
        <img src="assets/images/plesk 1.svg" alt="" className="w-64 h-20" />
        <img src="assets/images/cpanel.svg" alt="" className="w-64 h-20" />
      </section>
      <section className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 justify-items-cente p-4 px-8">
        <div className="flex gap-2 flex-col">
          <h1 className="text-xl font-light">About Allcast</h1>
          <p className="font-thin text-sm">
            Allcast is a leading web hosting provider dedicated to delivering
            reliable, high-performance solutions for your online projects. With
            cutting-edge infrastructure and unwavering commitment to customer
            satisfaction, we strive to be your trusted partner in building and
            growing your web presence.
          </p>
        </div>
        <div className="flex gap-2 flex-col">
          <h1 className="text-xl font-light">Pages</h1>
          <ul className="font-thin text-sm flex flex-col gap-2">
            <a href="#">
              <li>About Us</li>
            </a>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>Search</li>
            </a>
            <a href="#">
              <li>Terms of Service</li>
            </a>
            <a href="#">
              <li>Privacy Policy</li>
            </a>
          </ul>
        </div>
        <div className="flex gap-2 flex-col">
          <h1 className="text-xl font-light">Services</h1>
          <ul className="font-thin text-sm flex flex-col gap-2">
            <a href="#">
              <li>Cloud Infrastructure</li>
            </a>
            <a href="#">
              <li>cPanel Management</li>
            </a>
            <a href="#">
              <li>Unlimted Domain</li>
            </a>
          </ul>
        </div>
        <div className="flex gap-2 flex-col">
          <h1 className="text-xl font-light">Contact</h1>
          <p className="font-thin text-sm">
            We'll respond all your questions quickly.
          </p>
          <a href="tel:+234000000000">800 2567 900</a> <br />
          <a href="mail:mail@example.com">mail@example.com</a>
        </div>
      </section>
      <section className="container mx-auto flex flex-col justify-center items-center gap-8 p-2 py-4">
        <p className="text-sm font-light max-w-md">Copyright © 2024 Allcast</p>
        <div className="flex flex-row gap-4">
          <a href="#">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white hover:text-[#1877F2]"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white hover:text-[#0077B5] "
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-white hover:text-[var(--primary-grey)]"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white hover:text-[#FF00FF] "
            />
          </a>
        </div>
      </section>
    </footer>
  );
}
