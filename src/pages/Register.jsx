import { useState } from "react";
// import ReCAPTCHA from 'react-google-recaptcha';
// import axios from 'axios';
const RegisterForm = () => {
  // Tracks the current step
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  // Get all user Data in state
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Checkbox: false,
    Country: "",
    FullName: "",
    CompanyName: "",
    Phone: "",
    SOurcingProduct:"",
    BusinessType:"",
    AnualPurchaseVolume:"",
    PurchasingFrequency:"",
    Title:"Mr"
  });
  // Below I am Handling the Inputs changes since I am storing all info in an object
  const handleInputChanges=(e)=>{
    setFormData({
      ...formData,
      [e.target.type]:e.target.value
    })
  }
  // Handle form submission and go to next step
  const handleNextStep = () => {
    // e.preventDefault(); // Prevent form refresh
    setStep((prevStep) => prevStep + 1); // Increment step
  };
  // Validate Steps
  const validateSteps=(e)=>{
    e.preventDefault()
    let newErrors = {};

    if (step === 1) {
      if (!formData.Email) newErrors.Email = "Email field is Empty";
      if (!formData.Checkbox) newErrors.checkbox = "Please this action is required";
    }
    if (step === 2) {
      if (!formData.Password) newErrors.Password = "Password field is Empty";
      if (!formData.ConfirmPassword) newErrors.ConfirmPassword="Confirm password is required";
      if(formData.Password !== formData.ConfirmPassword) newErrors.ConfirmPassword="Password does not match"

      return(
        handleNextStep()
      )
    }
    if (step === 3) {
      if (!formData.Email) newErrors.Email = "Email field is Empty";
      if (!formData.lastName) newErrors.lastName = "Last Name is required";
    }
    setErrors(newErrors);
    console.log(newErrors)
    return Object.keys(newErrors).length === 0;
  }

  return (
    <>
      <div className="flex mx-4 md:mx-0 justify-center lg:w-1/3  flex-col items-center min-h-screen  bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg  w-full relative ">
          {/* Step Progress */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Create Account
          </h2>
          <div className="flex justify-center mb-6">
            {/* Step 1 */}
            <div
              className={`w-8 h-8 flex items-center justify-center ${
                step >= 1 ? "bg-green-500" : "bg-gray-300"
              } text-white rounded-full`}
            >
              1
            </div>
            <div
              className={`w-1/3 h-1 ${
                step >= 2 ? "bg-green-500" : "bg-gray-300"
              } mx-2 self-center`}
            ></div>
            {/* Step 2 */}
            <div
              className={`w-8 h-8 flex items-center justify-center ${
                step >= 2 ? "bg-green-500" : "bg-gray-300"
              } text-gray-500 rounded-full`}
            >
              2
            </div>
            <div
              className={`w-1/3 h-1 ${
                step >= 3 ? "bg-green-500" : "bg-gray-300"
              } mx-2 self-center`}
            ></div>
            {/* Step 3 */}
            <div
              className={`w-8 h-8 flex items-center justify-center ${
                step >= 3 ? "bg-green-500" : "bg-gray-300"
              } text-gray-500 rounded-full`}
            >
              3
            </div>
          </div>
          {step === 1 && (
            <>
              <form 
              // onSubmit={validateSteps}
              >
                {/* Email Input */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-600 font-medium"
                  >
                    Email
                  </label>
                  <input
                  value={formData.Email}
                  onChange={handleInputChanges}
                    type="email"
                    id="email"
                    className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your email"
                  />
                  {errors.Email && <p className="text-red-500">{errors.Email}</p>}
                </div>
                {/* Verification Code Input */}
                <div className="mb-4">
                  <label
                    htmlFor="captcha"
                    className="block text-gray-600 font-medium"
                  >
                    Verification Code
                  </label>
                  <div className="flex items-center space-x-4 mt-2">
                    <input
                      type="captcha"
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
                      value={formData.Checkbox}
                  onChange={handleInputChanges}
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
                  {errors.checkbox && <p className="text-red-500">{errors.checkbox}</p>}
                </div>
                {/* Submit Button */}
                <div className="mt-6">
                  <button
                   onClick={handleNextStep} 
                   className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                    Next
                  </button>
                </div>
              </form>
            </>
          )}
          {step === 2 && (
            <form onSubmit={validateSteps}>
              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Password
                </label>
                <input
                  value={formData.Password}
                  onChange={handleInputChanges}
                  type="password"
                  id="password"
                  className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your password"
                />
                {errors.Password && <p className="text-red-500">{errors.Password}</p> }
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Confirm Password
                </label>
                <input
                value={formData.ConfirmPassword}
                onChange={handleInputChanges}
                  type="confirm-password"
                  id="confirm-password"
                  className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Confirm Password"
                />
                {errors.ConfirmPassword && <p className="text-red-500">{errors.ConfirmPassword}</p> }
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Country/Region
                </label>
                <select
                value={formData.Country}
                onChange={handleInputChanges}
                  type="country"
                  id="country"
                  className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                ></select>
              </div>
              <div className="mb-4 ">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Full Name
                </label>
                <div className="flex gap-4">
                  <select name="title" id="" value={formData.Title}
                  onChange={handleInputChanges} className="w-1/6">
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </select>
                  <input
                  value={formData.FullName}
                  onChange={handleInputChanges}
                    type="FullName"
                    id="name"
                    className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your Name"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Company Name
                </label>
                <input
                value={formData.CompanyName}
                onChange={handleInputChanges}
                  type="company"
                  id="company"
                  className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Company name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Mobile Phone
                </label>
                <div className="flex items-center justify-center focus:outline-none focus:ring-2 px-1 border-gray-300 focus:ring-indigo-500 border gap-2 rounded">
                  +234
                  <input
                  value={formData.Phone}
                  onChange={handleInputChanges}
                    type="phone"
                    id="phone"
                    className="w-full border-l-2 outline-none  p-2    "
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button 
                // onClick={handleNextStep} 
                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                  Next
                </button>
              </div>
            </form>
          )}
          {step === 3 && (
            <>
              {/*Sourcing Products */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Sourcing Products
                </label>
                <input
                value={formData.SOurcingProduct}
                onChange={handleInputChanges}
                  type="SoucingProduct"
                  id="SoucingProduct"
                  className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="One word/phrase. Click Add for more"
                />
                <p>
                  These Products will be used for products recommendation based
                  on your interest- example &apos;Mp3&apos;,&apos;Bike&apos;
                </p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="BusinessType"
                  className="block text-gray-600 font-medium"
                >
                  Business Type
                </label>
                <select
                value={formData.BusinessType}
                onChange={handleInputChanges}
                  type="BusinessType"
                  id="BusinessType"
                  className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Please select"
                ></select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Annual"
                  className="block text-gray-600 font-medium"
                >
                  Annual Purchase Volume
                </label>
                <select
                value={formData.AnualPurchaseVolume}
                onChange={handleInputChanges}
                  type="Annual"
                  id="Annual"
                  className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Please select"
                ></select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Purchasing"
                  className="block text-gray-600 font-medium"
                >
                  Purchasing Frequency
                </label>
                <select
                value={formData.PurchasingFrequency}
                onChange={handleInputChanges}
                  type="Purchasing"
                  id="Purchasing"
                  className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Please select"
                ></select>
              </div>
              <div className="mt-6">
                <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                  Submit
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
