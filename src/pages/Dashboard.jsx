import ProductsAvailable from "../components/dashboard/ProductsAvailable";
import TradeService from "../components/dashboard/Tradeservice";

function Dashboard() {
    return (
        <div>
          {/* Main Content */}
          <main className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Bulletin Board */}
              <section className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="font-semibold text-lg mb-2">Bulletin Board</h2>
                <ul className="space-y-2">
                  <li className="text-blue-500">Your company profile has not been accepted. Please edit and submit it again.</li>
                  <li className="text-blue-500">Your Manufacturing Machinery Solution</li>
                  <li className="text-blue-500">New Season Travel Shopping</li>
                </ul>
              </section>
    
              {/* Profile Section */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Profile Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">Hi, Lawson</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700">Star Level:</p>
                      <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm">Level 2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700">Bonus Points:</p>
                      <span className="text-lg font-semibold text-gray-900">2440</span>
                    </div>
                    <p className="text-sm text-blue-500">My Benefits</p>
                    <p className="text-gray-500">Email: hymesone1@gmail.com</p>
                  </div>
                </div>
    
                {/* Inquiry Status */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
                    <div>

                  <h3 className="text-xl font-bold">5</h3>
                  <p className="text-gray-700">Awaiting Inquiries</p>
                    </div>
                    <div>

                <h3 className="text-xl font-bold">0</h3>
                <p className="text-gray-700">Awaiting Quotations</p>
                    </div>
                    <div>

                <h3 className="text-xl font-bold">0</h3>
                <p className="text-gray-700">Pending Payments</p>
                    </div>
                </div>
              </section>
            </div>
          </main>
                <TradeService/>
                <ProductsAvailable/>
        </div>
      );
}

export default Dashboard