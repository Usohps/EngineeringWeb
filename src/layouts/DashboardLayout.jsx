import { Outlet } from "react-router-dom"

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
         <header className="bg-white border-b shadow-sm">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
              <div className="flex items-center space-x-4">
                <img src="logo.png" alt="Logo" className="h-8 w-auto" />
                {/* <nav className="hidden md:flex space-x-4">
                  <a href="#" className="text-gray-700 hover:text-gray-900">Virtual Office</a>
                  <a href="#" className="text-gray-700 hover:text-gray-900">Buying Leads</a>
                  <a href="#" className="text-gray-700 hover:text-gray-900">Transactions</a>
                  <a href="#" className="text-gray-700 hover:text-gray-900">My Lists</a>
                  <a href="#" className="text-blue-600">TradeMessenger</a>
                </nav> */}
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-700 hover:text-gray-900">Buyer</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Apps</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Admin</a>
              </div>
            </div>
          </header>
        <Outlet/>
        <footer className="bg-gray-100 py-6">
      {/* Top section: App store buttons and social media */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* App store buttons */}
        <div className="flex space-x-4">
          <a href="#appstore" className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-800 text-white text-sm">
            <i className="fab fa-apple mr-2"></i> App Store
          </a>
          <a href="#googleplay" className="inline-flex items-center px-4 py-2 rounded-lg bg-green-600 text-white text-sm">
            <i className="fab fa-google-play mr-2"></i> Google Play
          </a>
          <a href="#trademessenger" className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm">
            <i className="fas fa-comment mr-2"></i> Trade Messenger
          </a>
        </div>

        {/* Social media icons */}
        <div className="flex space-x-4">
          <a href="#facebook" className="text-gray-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#twitter" className="text-gray-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#instagram" className="text-gray-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#youtube" className="text-gray-600">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#pinterest" className="text-gray-600">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="#linkedin" className="text-gray-600">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Bottom section: Links and copyright */}
      <div className="container mx-auto px-4 mt-4 border-t border-gray-300 pt-4">
        <div className="flex flex-col md:flex-row justify-between text-gray-500 text-sm space-y-2 md:space-y-0">
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-gray-700">About Us</a>
            <a href="#faq" className="hover:text-gray-700">FAQ</a>
            <a href="#help" className="hover:text-gray-700">Help</a>
            <a href="#contact" className="hover:text-gray-700">Contact Us</a>
            <a href="#sitemap" className="hover:text-gray-700">Site Map</a>
            <a href="#mobile" className="hover:text-gray-700">Mobile Site</a>
          </div>

          <div className="text-center md:text-right">
            <p>Copyright © 1998-2024 Focus Technology Co., Ltd. All Rights Reserved.</p>
          </div>
        </div>

        {/* Terms and conditions */}
        <div className="mt-2 text-center md:text-right text-gray-500 text-xs">
          <a href="#terms" className="hover:text-gray-700">Terms & Conditions</a> | 
          <a href="#privacy" className="hover:text-gray-700 ml-1">Privacy Policy</a> | 
          <a href="#declaration" className="hover:text-gray-700 ml-1">Declaration</a>
        </div>
      </div>
          </footer>
    </div>
  )
}

export default DashboardLayout