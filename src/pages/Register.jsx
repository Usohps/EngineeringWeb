import { useState } from "react";
// import ReCAPTCHA from 'react-google-recaptcha';
// import axios from 'axios';
const RegisterForm = () => {
  // Tracks the current step
  const [step, setStep] = useState(1); 

  // Handle form submission and go to next step
  const handleNextStep = (e) => {
    e.preventDefault(); // Prevent form refresh
    setStep((prevStep) => prevStep + 1); // Increment step
  };
  // const [email, setEmail] = useState('');
  // const [captchaValue, setCaptchaValue] = useState(null); // CAPTCHA value comes from Google reCAPTCHA
  // const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  // const [isAgreed, setIsAgreed] = useState(false);

  // Captcha key retrieved from .env file
  // const captchaKey = import.meta.env.VITE_GOOGLECAPTCHA_SITE_KEY;

  // Handle the CAPTCHA change
  // const handleCaptchaChange = (value) => {
  //   console.log("CAPTCHA value:", value);
  //   setCaptchaValue(value);
  //   setIsCaptchaValid(!!value); // Valid if value is not null
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!isAgreed) {
  //     alert('You must agree to the terms.');
  //     return;
  //   }
  //     try {
  //       const response = await axios.post('https://your-backend-api.com/endpoint', {
  //         email: email, // the email payload
  //       });
  //       console.log('Response:', response.data);
  //     } catch (error) {
  //       console.error('Error sending email:', error);
  //     }
  //   // Check if the CAPTCHA and the agreement are valid
  //   // if (!isCaptchaValid) {
  //   //   alert('Please complete the CAPTCHA to proceed.');
  //   //   return;
  //   // }

  //   // Proceed with the form submission logic
  //   console.log({ email, isAgreed });
  //   // Here you can add your API call for form submission
  // };

  return (
    <>
    <div className="flex justify-center items-center min-h-screen   bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg  w-full relative ">
        {/* Step Progress */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Create Account</h2>
        <div className="flex justify-center mb-6">
          {/* Step 1 */}
          <div className={`w-8 h-8 flex items-center justify-center ${step >= 1 ? 'bg-green-500' : 'bg-gray-300'} text-white rounded-full`}>
            1
          </div>
          <div className={`w-1/3 h-1 ${step >= 2 ? 'bg-green-500' : 'bg-gray-300'} mx-2 self-center`}></div>
          {/* Step 2 */}
          <div className={`w-8 h-8 flex items-center justify-center ${step >= 2 ? 'bg-green-500' : 'bg-gray-300'} text-gray-500 rounded-full`}>
            2
          </div>
          <div className={`w-1/3 h-1 ${step >= 3 ? 'bg-green-500' : 'bg-gray-300'} mx-2 self-center`}></div>
          {/* Step 3 */}
          <div className={`w-8 h-8 flex items-center justify-center ${step >= 3 ? 'bg-green-500' : 'bg-gray-300'} text-gray-500 rounded-full`}>
            3
          </div>
        </div>
        {step === 1 && (
          <>
          <form onSubmit={handleNextStep} >
        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
        </div>
        {/* Verification Code Input */}
        <div className="mb-4">
          <label htmlFor="captcha" className="block text-gray-600 font-medium">
            Verification Code
          </label>
          <div className="flex items-center space-x-4 mt-2">
            <input
              type="text"
              id="captcha"
              className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter code"
            />
            <div className="border border-gray-300 p-2 rounded">
              {/* Replace with actual captcha image */}
              <img
                src="https://via.placeholder.com/100x40"
                alt="Captcha"
                className="w-24 h-12"
              />
            </div>
            <button className="text-sm text-indigo-600">Refresh</button>
          </div>
        </div>
        {/* Checkbox */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600"
            />
            <span className="ml-2 text-gray-600 text-sm">
              I agree to the{" "}
              <a href="#" className="text-indigo-600 underline">
                User Agreement
              </a>{" "}
              and the{" "}
              <a href="#" className="text-indigo-600 underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>
        </div>
        {/* Submit Button */}
        <div className="mt-6">
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
            Next
          </button>
        </div>
          </form>
          </>
        )}
        {step === 2 &&(
          <>
           {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
        </div>
         {/* Email Input */}
         <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-6">
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
            Next
          </button>
        </div>
          </>
        )}
        {step === 3 &&(
          <>
          {/* Email Input */}
         <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
        </div>
          <div className="mt-6">
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
            Next
          </button>
        </div>
          </>
        )}
        {/* Side Information */}
        <div className=" lg:absolute lg:top-8 lg:right-[-280px] lg:w-64">
          <h3 className="text-gray-700 font-medium mb-2">
            Why register with us?
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Faster response to your inquiries</li>
            <li>Multiple quotes per each request</li>
            <li>Sourcing assistant to help you source easier</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default RegisterForm;
