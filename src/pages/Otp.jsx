
function Otp() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-md rounded-md p-6">
            {/* Stepper */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex items-center">
                <div className="bg-green-500 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center">1</div>
                <span className="text-sm ml-2">Verification</span>
              </div>
              <span className="text-gray-400">—</span>
              <div className="flex items-center">
                <div className="bg-gray-300 text-gray-500 font-bold w-6 h-6 rounded-full flex items-center justify-center">2</div>
                <span className="text-sm ml-2">Information</span>
              </div>
              <span className="text-gray-400">—</span>
              <div className="flex items-center">
                <div className="bg-gray-300 text-gray-500 font-bold w-6 h-6 rounded-full flex items-center justify-center">3</div>
                <span className="text-sm ml-2">Complete</span>
              </div>
            </div>
    
            {/* Email Confirmation */}
            <h2 className="text-lg font-bold mb-2 text-center">Create Account</h2>
            <p className="text-gray-600 text-center mb-4">
              A confirmation email has been sent to your mailbox
              <span className="text-red-600 font-semibold"> usohps@gmail.com</span>.
            </p>
            <p className="text-center text-sm text-gray-500 mb-4">
              Please check your email and continue your registration within 1 hour.
            </p>
    
            {/* OTP Input */}
            <div className="flex justify-center space-x-2 mb-6">
              <input
                type="text"
                className="border border-gray-300 w-12 h-12 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength="1"
              />
              <input
                type="text"
                className="border border-gray-300 w-12 h-12 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength="1"
              />
              <input
                type="text"
                className="border border-gray-300 w-12 h-12 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength="1"
              />
              <input
                type="text"
                className="border border-gray-300 w-12 h-12 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength="1"
              />
            </div>
    
            {/* Next Button */}
            <div className="flex justify-center">
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                Next
              </button>
            </div>
    
            {/* Help Section */}
            <div className="text-center text-sm text-gray-500 mt-6">
              <p>Having problems receiving email?</p>
              <ul className="list-disc list-inside">
                <li>Please check your spam folder.</li>
                <li><a href="#" className="text-blue-500">Click here to resend the email.</a></li>
                <li>Haven&apos;t received? Try to <a href="#" className="text-blue-500">change your email address</a>.</li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default Otp