function Login() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-5xl mb-6">
        <div className="flex items-center">
          <img
            src="/path/to/logo.png"
            alt="Made-in-China Logo"
            className="h-12"
          />
          <div className="text-gray-600 text-sm ml-4">
            Connecting Buyers with Chinese Suppliers
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Need Help?{" "}
          <a href="#" className="text-blue-600">
            Click Here
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-col max-w-5xl w-full bg-white shadow-lg rounded-lg">
        {/* Left Side (Image) */}
        <div className="md:w-1/2 hidden bg-gray-200 p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Your Manufacturing Machinery Solution
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Delivering Excellence in Every Detail
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            Explore Now &rarr;
          </a>
          <img
            src="/path/to/machinery_image.png"
            alt="Manufacturing Machinery"
            className="mt-4 rounded-md"
          />
        </div>

        {/* Right Side (Form) */}
        <div className="md:w-1/2    p-8 flex flex-col justify-center">
          <h2 className="text-lg font-bold mb-4">Sign In</h2>
          <form>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address or Member ID
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                defaultValue="hymesone1@gmail.com"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Sign In Button */}
            <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
              Sign In
            </button>
          </form>

          {/* Additional Links */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <a href="#" className="text-blue-600">
              Forgot your password?
            </a>
            <a href="#" className="text-blue-600">
              New User? Join Free
            </a>
          </div>

          {/* Social Sign In */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Sign in with</p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center"
              >
                {/* Facebook Icon */}
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center"
              >
                {/* LinkedIn Icon */}
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
              >
                {/* GitHub Icon */}
                <i className="fab fa-github"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center"
              >
                {/* Google Icon */}
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
