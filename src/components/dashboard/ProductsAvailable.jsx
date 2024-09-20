import { associatesItems, dropshippingItems } from "../../data"
import { ProductCard } from "./reusable/Card"
import Car from "../../assets/car.webp"
function ProductsAvailable() {
    const cards = [
        {
          id: 1,
          title: "Your Manufacturing Machinery Solution",
          image: Car, // Replace with actual image path
          bgColor: "bg-orange-300",
        },
        {
          id: 2,
          title: "New Season Travel Shopping",
          image: Car, // Replace with actual image path
          bgColor: "bg-blue-800",
        },
        {
          id: 3,
          title: "Mega Festive Sourcing",
          image: Car, // Replace with actual image path
          bgColor: "bg-blue-500",
        },
        // Add more cards here
      ];

  return (
    <>
    {/* Associate and Dropshipping Section */}
    <div className="max-w-7xl my-8 rounded-lg mx-auto bg-white px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-5">
      {/* Dropshipping Section */}
      <div className="md:w-1/2 w-full bg-slate-100 rounded-lg p-4 scroll-smooth">
        <h2 className="text-md sm:text-lg font-bold mb-2 sm:mb-4">
          Dropshipping <span className="text-xs sm:text-sm text-gray-500">Share products to earn price difference.</span>
        </h2>
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide sm:space-x-4">
          {dropshippingItems.map((item) => (
            <ProductCard key={item.id} image={item.image} title={item.title} buttonText={item.buttonText} />
          ))}
        </div>
      </div>

      {/* Associates Section */}
      <div className=" md:w-1/2 w-full bg-slate-100 rounded-lg p-4 scroll-smooth">
        <h2 className="text-md sm:text-lg font-bold mb-2 sm:mb-4">
          Associates <span className="text-xs sm:text-sm text-gray-500">Share products to your social media to earn bonus points.</span>
        </h2>
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide sm:space-x-4">
          {associatesItems.map((item) => (
            <ProductCard key={item.id} image={item.image} title={item.title} buttonText={item.buttonText} />
          ))}
        </div>
      </div>
    </div>
    {/* Footer single cards */}
    <div className="max-w-7xl my-8 rounded-lg mx-auto bg-white px-4 sm:px-6 lg:px-8 py-6 flex flex-col flex-wrap md:flex-row justify-around items-center gap-5">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`relative flex-shrink-0 md:w-64 w-full h-40 rounded-lg overflow-hidden ${card.bgColor}`}
        >
          {/* Background image */}
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white">
            <h3 className="text-lg font-bold text-center">{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
    {/* Connect and Download Section */}
    <div className="p-4 my-8 py-6 sm:px-6 max-w-7xl rounded-lg mx-auto bg-white">
      <h2 className="text-xl font-bold mb-4">Connect & Download</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Card: Contact Us */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">
            <i className="fas fa-phone-alt mr-2"></i> Contact Us
          </h3>
          <p className="text-sm mb-2">
            <strong>Tel:</strong> <a href="tel:+862566775777" className="text-blue-600">+86(25)66775777</a>
          </p>
          <p className="text-sm mb-4">
            <a href="#" className="text-blue-600">Need Help? Click Here</a>
          </p>
          <div className="flex items-center">
            <img
              src="whatsapp-qr.png" // Replace with actual QR code path
              alt="WhatsApp QR Code"
              className="w-16 h-16 mr-4"
            />
            <p className="text-sm">WhatsApp service</p>
          </div>
        </div>

        {/* Right Card: Download App */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">
            <i className="fas fa-download mr-2"></i> Download Made-in-China.com App
          </h3>
          <p className="text-sm mb-4">Tap into Promising Chances Anytime</p>
          <div className="flex items-center mb-4">
            <img
              src="download-qr.png" // Replace with actual QR code path
              alt="Download QR Code"
              className="w-16 h-16 mr-4"
            />
            <div className="flex space-x-2">
              <img
                src="appstore-badge.png" // Replace with App Store badge
                alt="Download on the App Store"
                className="w-24"
              />
              <img
                src="googleplay-badge.png" // Replace with Google Play badge
                alt="Get it on Google Play"
                className="w-24"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default ProductsAvailable