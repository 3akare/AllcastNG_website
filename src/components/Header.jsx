import HeaderBody from "./HeaderBody";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <div className="overlay"></div>
      <NavBar />
      <HeaderBody />
    </header>
  );
}
