import ProductSection from "../components/ProductSection";
import Recommendation from "../components/Recommendation";
import Sidebar from "../components/Sidebar";
import SwiperSection from "../components/Swiper";
import Trending from "../components/Trending";

function Home() {
  return (
    <div className=" w-full">
      <div className=" ">
        <div className="container shadow-xl mx-auto mt-8">
          <div className="flex relative ">
            <Sidebar />

            {/* Main Slider Content */}
            <div className=" bg-white lg:w-1/2 w-full px-4">
              <SwiperSection />
            </div>

            {/* Product Recommendations */}
            <Recommendation />
          </div>
        </div>
      </div>
      <div className="container shadow-xl mx-auto mt-8">

          <Trending />
      </div>
      <div className="container shadow-xl mx-auto mt-8">

         <ProductSection />
      </div>
    </div>
  );
}

export default Home;
