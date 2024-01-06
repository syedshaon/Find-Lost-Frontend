import Navbar from "./Navbar";
import Footer from "./Footer";
import OneTwo from "../assets/1234.jpg";
import Abcd from "../assets/ABCD.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-blue-300    p-5    min-h-[100vh]">
        {/* Hero Section */}
        <section className="  text-white min-h-[50vh] flex items-center">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Your Website</h1>
            <p className="text-lg">A place where amazing things happen. Your catchy tagline goes here.</p>
          </div>
        </section>

        {/* Image Section */}
        <section className="container mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image 2 */}
            <NavLink to="/game-one">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src={Abcd} alt="Abcd" className="w-full h-48 object-cover rounded-md mb-4" />
                <p className="text-gray-700">Description for Image 2</p>
              </div>
            </NavLink>

            {/* Image 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src={OneTwo} alt="OneTwo" className="w-full h-48 object-cover rounded-md mb-4" />
              <p className="text-gray-700">Description for Image 1</p>
            </div>

            {/* Image 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/400" alt="Image 3" className="w-full h-48 object-cover rounded-md mb-4" />
              <p className="text-gray-700">Description for Image 3</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
