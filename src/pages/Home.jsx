import Navbar from "./Navbar";
import Footer from "./Footer";
import OneTwo from "../assets/1234.jpg";
import Abcd from "../assets/ABCD.jpg";
import Animals from "../assets/animals.jpg";
import Waldo from "../assets/waldo.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-blue-300    p-5    min-h-[100vh]">
        {/* Image Section */}
        <section className="container mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image 2 */}
            <NavLink to="/game-three">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src={Waldo} alt="Waldo" className="w-full h-48 object-cover rounded-md mb-4" />
                <p className="text-gray-700">Find Lost Characters!</p>
              </div>
            </NavLink>
            <NavLink to="/game-one">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src={Abcd} alt="Abcd" className="w-full h-48 object-cover rounded-md mb-4" />
                <p className="text-gray-700">Find Lost Letters!</p>
              </div>
            </NavLink>

            <NavLink to="/game-two">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src={Animals} alt="OneTwo" className="w-full h-48 object-cover rounded-md mb-4" />
                <p className="text-gray-700">Find Lost Animals!</p>
              </div>
            </NavLink>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
