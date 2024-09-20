import Car from "../../assets/car.webp"

const TradeService = () => {
  return (
    <section className="max-w-7xl rounded-lg mx-auto bg-white px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Trade Service</h2>
        <a href="#" className="text-blue-500 hover:text-blue-700">View More</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 - Easy Sourcing */}
        <div className="relative cursor-pointer group bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="">
          <img 
            src={Car} 
            alt="Easy Sourcing" 
            className="w-full h-48 object-cover" 
          />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Easy Sourcing</h3>
          </div>
          {/* Hover Text */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <p className="text-white text-center px-4">
              Helps you source products easily from a wide range of suppliers.
            </p>
          </div>
        </div>

        {/* Card 2 - TradeMessenger */}
        <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={Car} 
            alt="TradeMessenger" 
            className="w-full h-48 object-cover" 
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">TradeMessenger</h3>
          </div>
          {/* Hover Text */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <p className="text-white text-center px-4">
              As an IM software, it supports communication as succinctly and efficiently as possible.
            </p>
          </div>
        </div>

        {/* Card 3 - Find Audited Supplier */}
        <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={Car} 
            alt="Find Audited Supplier" 
            className="w-full h-48 object-cover" 
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Find Audited Supplier</h3>
          </div>
          {/* Hover Text */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <p className="text-white text-center px-4">
              Easily find and connect with audited suppliers for high-quality products.
            </p>
          </div>
        </div>

        {/* Card 4 - Secured Trading Service */}
        <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={Car} 
            alt="Secured Trading Service" 
            className="w-full h-48 object-cover" 
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Secured Trading Service</h3>
          </div>
          {/* Hover Text */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <p className="text-white text-center px-4">
              Provides a secure and reliable platform for safe trading.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeService;
