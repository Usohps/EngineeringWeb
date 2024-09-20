import Car from "../assets/car.webp";
function Recommendation() {
  const products = [
    { name: "Hydraulic Pump", count: "70,000+", image: Car },
    { name: "Coffee Table", count: "56,000+", image: Car },
    { name: "Water Purifier", count: "144,000+", image: Car },
    { name: "Home Furniture", count: "52,000+", image: Car },
    { name: "Mobility Scooter", count: "40,000+", image: Car },
  ];

  return (
    <div className="w-1/4 bg-white p-4 hidden lg:block">
      <div>
        <h2 className="font-semibold mb-4">You May Like</h2>
        <div>
          {products.map((product) => (
            <div
              key={product.name}
              className="mb-4 cursor-pointer flex justify-around"
            >
              <div className="w-1/2 rounded-lg">
                <img src={product.image} alt="" />
              </div>
              <div>
                <p className="text-sm hover:text-red-400 font-semibold  text-gray-600">
                  {product.name} <br/>{product.count} Products
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm">No Desirable Products?</p>
      </div>
      <button className="border-red-500 border font-semibold text-red-500 px-4 py-2 mt-4 w-full rounded">
        Post Your Request Now
      </button>
    </div>
  );
}

export default Recommendation;
