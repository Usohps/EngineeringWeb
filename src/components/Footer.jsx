// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      {/* Top Row - Content Columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Discover Products & Suppliers */}
        <div>
          <h3 className="font-bold mb-4">Discover Products & Suppliers</h3>
          <ul className="space-y-2">
            <li>Industry Sites</li>
            <li>Regional Channels</li>
            <li>Special Channel</li>
            <li>Custom Products</li>
            <li>Video Show</li>
            <li>Secured Trading Service</li>
            <li>Business Guide</li>
            <li>Featured Service</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>About Made-in-China.com</li>
            <li>Site Map</li>
            <li>Trademark</li>
            <li>Friendly Links</li>
          </ul>
          <h3 className="font-bold mt-4 mb-4">Help</h3>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Submit a Complaint</li>
          </ul>
        </div>

        {/* Language Options */}
        <div>
          <h3 className="font-bold mb-4">Language Options</h3>
          <ul className="space-y-2">
            <li>Español</li>
            <li>Português</li>
            <li>Français</li>
            <li>Русский язык</li>
            <li>Italiano</li>
            <li>Deutsch</li>
            <li>日本語</li>
            {/* Add more languages */}
          </ul>
        </div>

        {/* Co-Brands and Product Alert */}
        <div>
          <h3 className="font-bold mb-4">Product Alert</h3>
          <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md mb-4">
            Subscribe
          </button>
          <h3 className="font-bold mb-4">Co-brands</h3>
          <ul className="space-y-2">
            <li><img src="/path-to-image1.png" alt="Co-brand 1" /></li>
            <li><img src="/path-to-image2.png" alt="Co-brand 2" /></li>
            <li><img src="/path-to-image3.png" alt="Co-brand 3" /></li>
            {/* Add more images */}
          </ul>
        </div>
      </div>

      {/* Middle Row - App Downloads and Social Links */}
      <div className="container mx-auto mt-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* App Download Buttons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#">
              <img src="/appstore.png" alt="App Store" className="h-10" />
            </a>
            <a href="#">
              <img src="/googleplay.png" alt="Google Play" className="h-10" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#"><img src="/facebook.png" alt="Facebook" className="h-6" /></a>
            <a href="#"><img src="/twitter.png" alt="Twitter" className="h-6" /></a>
            <a href="#"><img src="/youtube.png" alt="YouTube" className="h-6" /></a>
            <a href="#"><img src="/instagram.png" alt="Instagram" className="h-6" /></a>
            {/* Add more icons */}
          </div>
        </div>
      </div>

      {/* Bottom Row - Copyright Links */}
      <div className="container mx-auto mt-8 px-4 text-sm text-gray-600">
        <div className="flex flex-wrap justify-center space-x-4">
          <a href="#">Hot Products</a>
          <a href="#">China Products</a>
          <a href="#">Wholesale Products</a>
          <a href="#">User Agreement</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="text-center mt-4">
          &copy; 1998-2024 Focus Technology Co., Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
