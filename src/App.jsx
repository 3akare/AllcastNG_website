import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Body />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
