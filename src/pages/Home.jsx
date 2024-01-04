import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-emerald-100 bg-gradient-to-r from-white to-emerald-100     mx-auto   min-h-[100vh]">Home content</div>
      <Footer />
    </>
  );
}

export default Home;
