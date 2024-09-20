import { BsCart2 } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { BsEnvelope } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";
import { useEffect, useState } from "react";
import { category } from "../data";
import { IoCameraOutline, IoSearchOutline } from "react-icons/io5";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [signinHovered, setSignInHovered] = useState(false);
  const [supplierHover, setSupplierHoverd] = useState(false);
  const [buyerHover, setBuyerHovered] = useState(false);
  const [helpHovered, setHelpHovered] = useState(false);
  const [postHovered, setPostHovered] = useState(false);
  const [messageHover, setMessageHover] = useState(false);
  const [appsHover, setAppsHover] = useState(false);
  const [englishHover, setEnglishsHover] = useState(false);
  const [isType, setIsType] = useState("Product");
  const [scrolled, setScrolled] = useState(false);
  const sortedCategories = category.sort((a, b) => a.cat.localeCompare(b.cat));
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setIsType(option);
    setIsOpen(false);
  };
  const options = ["Product", "Suppliers"];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {!scrolled ? (
        <div className="relative bg-white cursor-pointer">
          <div className="flex justify-between items-center z-50  p-4 top-0 ">
            <FiAlignJustify className="lg:hidden" size={24} />
            <div>
              <p>Logo</p>
            </div>
            <div className="hidden relative lg:block border-red-500 rounded-2xl w-[600px] border-2">
              <div className="hidden md:relative md:inline-block text-left">
                <div className="">
                  <div
                    onClick={toggleDropdown}
                    className="hidden lg:inline-flex justify-center w-full border-r-[1px] shadow-sm px-4 py-3 text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="options-menu"
                    aria-expanded={isOpen}
                    // aria-haspopup="true"
                  >
                    {isType || ""}
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {isOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2  w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1" role="none">
                      {options.map((option) => (
                        <li
                          key={option}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <input
                placeholder="search"
                className=" outline-none lg:w-[400px] p-2"
                type="text"
              />
              <IoCameraOutline
                className=" absolute right-[23%] top-2"
                size={32}
              />
              <div className="bg-red-500 w-[100px] p-1.5 absolute right-0 top-0 rounded-r-xl flex flex-col items-center justify-center">
                <IoSearchOutline size={32} className="text-white" />
              </div>
            </div>
            <div className="flex gap-6  justify-between items-center">
              <div
                onMouseEnter={() => setPostHovered(true)}
                onMouseLeave={() => setPostHovered(false)}
                className="lg:flex items-center text-red-400 lg:flex-col justify-center text-center"
              >
                <RxAvatar size={25} alignmentBaseline="central" />
                <p>Post My RFQ</p>
              </div>
              <div
                onMouseEnter={() => setSignInHovered(true)}
                onMouseLeave={() => setSignInHovered(false)}
                className="lg:flex hidden items-center flex-col justify-center text-center"
              >
                <RxAvatar size={25} alignmentBaseline="central" />
                <p>Sign in/Join</p>
              </div>
              <div
                onMouseEnter={() => setMessageHover(true)}
                onMouseLeave={() => setMessageHover(false)}
                className="lg:flex hidden items-center flex-col justify-center text-center"
              >
                <BsEnvelope size={25} />
                Messages
              </div>
              <div className="lg:flex hidden items-center flex-col justify-center text-center">
                <BsCart2 size={25} />
                <p className="hover:text-red-400">Inquiry Basket</p>
              </div>
            </div>
            {/* All Nav hover components starts here */}
            {signinHovered && (
              <div
                onMouseEnter={() => setSignInHovered(true)}
                onMouseLeave={() => setSignInHovered(false)}
                className="absolute  p-4 w-1/5 z-10 shadow-2xl space-y-4 rounded-md bg-white top-[65px] right-[250px] transition"
              >
                <button className="bg-red-600 p-1 text-white w-full rounded-xl">
                  <a href="/login">Sign In</a>
                </button>
                <button className="bg-white p-1 text-red-400 border-red-600 border mt-4 w-full rounded-xl">
                  <a href="/register">Join Free</a>
                </button>
                <p className="text-[12px] leading-6">
                  By clicking Sign In, Join Free or Continue with Facebook,
                  Linkedin, Twitter, Google, I agree to the User Agreement and
                  the Privacy Policy
                </p>
                <div className="border-t-[1px] space-y-6 pb-6 border-b-[1px]">
                  <div className="hover:text-red-400">
                    <a href="#">Message</a>
                  </div>
                  <div className="hover:text-red-400">
                    <a href="#">Quotes</a>
                  </div>
                  <div className="hover:text-red-400">
                    <a href="#">Orders</a>
                  </div>
                  <div className="hover:text-red-400">
                    <a href="#">Favorite</a>
                  </div>
                  <div className="hover:text-red-400">
                    <a href="#">Browsing History</a>
                  </div>
                </div>
                <a href="#">Post sourcing Request</a>
              </div>
            )}
            {messageHover && (
              <div
                onMouseEnter={() => setMessageHover(true)}
                onMouseLeave={() => setMessageHover(false)}
                className="absolute p-3 z-10 w-1/5 space-y-3 text-center rounded-2xl shadow-2xl bg-white top-[65px] right-16 transition"
              >
                <p className="text-sm text-gray-400">
                  Sign in to view the new messages
                </p>
                <button className="bg-red-600 p-1 text-white w-full rounded-xl">
                  <a href="/login">Sign In</a>
                </button>
                <button className="bg-white p-1 text-red-400 border-red-600 border mt-4 w-full rounded-xl">
                  <a href="/register">Join Free</a>
                </button>
              </div>
            )}
            {supplierHover && (
              <div
                onMouseEnter={() => setSupplierHoverd(true)}
                onMouseLeave={() => setSupplierHoverd(false)}
                className="absolute p-3 z-10 w-1/5 min-h-[300px] space-y-3 text-center rounded-2xl shadow-2xl bg-white top-[125px] right-[280px] transition"
              ></div>
            )}
            {appsHover && (
              <div
                onMouseEnter={() => setAppsHover(true)}
                onMouseLeave={() => setAppsHover(false)}
                className="absolute p-3 z-10 w-1/5 min-h-[300px] space-y-3 text-center rounded-2xl shadow-2xl bg-white top-[125px] right-[80px] transition"
              ></div>
            )}
            {englishHover && (
              <div
                onMouseEnter={() => setEnglishsHover(true)}
                onMouseLeave={() => setEnglishsHover(false)}
                className="absolute p-3 z-10 w-1/5 min-h-[300px] space-y-3 text-center rounded-2xl shadow-2xl bg-white top-[125px] right-[40px] transition"
              ></div>
            )}
            {helpHovered && (
              <div
                onMouseEnter={() => setHelpHovered(true)}
                onMouseLeave={() => setHelpHovered(false)}
                className="absolute p-3 z-10 w-1/5 min-h-[200px] space-y-3 text-center rounded-2xl shadow-2xl bg-white top-[120px] right-16 transition"
              ></div>
            )}
            {buyerHover && (
              <div
                onMouseEnter={() => setBuyerHovered(true)}
                onMouseLeave={() => setBuyerHovered(false)}
                className="absolute p-3 z-10 w-1/3 min-h-[300px] space-y-3 text-center rounded-2xl shadow-2xl bg-white top-[120px] right-16 transition"
              ></div>
            )}
            {postHovered && (
              <div
                onMouseEnter={() => setPostHovered(true)}
                onMouseLeave={() => setPostHovered(false)}
                className="absolute  w-[450px] p-4 z-10 shadow-2xl bg-white top-[65px] right-[350px] rounded-xl transition"
              >
                <p>Tell us what you need and try the easy way to get quotes!</p>
              </div>
            )}
            {/* Hover components Ends here */}
          </div>
          <div>
            <div className="flex flex-col items-center justify-center px-8">
              <input
                placeholder="search"
                className=" lg:hidden w-full border p-2"
                type="text"
              />
            </div>
            <div className=" border-t-[1px] hidden lg:flex items-center justify-between gap-5 text-left">
              {/* Dropdown Toggle Button */}
              <div className="flex items-center ">
                <div>
                  <a href="#" className="md:hidden block">
                    All
                  </a>
                  <button
                    type="button"
                    onMouseEnter={() => setCategoryOpen(true)}
                    onMouseLeave={() => setCategoryOpen(false)}
                    // onClick={() => setCategoryOpen(!categoryOpen)}
                    className="hidden md:inline-flex justify-center w-full rounded-md  mt-2  px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    All Categories
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="border-l-2 inline-flex p-1 mt-2 pl-2 gap-4">
                  <p className="hover:text-red-400 cursor-pointer">
                    Secured Trading Service
                  </p>
                  <p className="hover:text-red-400 cursor-pointer">
                    Video Channel
                  </p>
                  <p className="hover:text-red-400 cursor-pointer">
                    Top-Ranking Products
                  </p>
                </div>
              </div>
              {/* Dropdown Menu */}
              {categoryOpen && (
                <ul
                  onMouseEnter={() => setCategoryOpen(true)}
                  onMouseLeave={() => setCategoryOpen(false)}
                  className=" absolute left-[0%] top-[100%] ml-2 p-2 w-1/2 z-40 min-h-[400px] bg-white border border-gray-200 shadow-xl rounded-lg"
                >
                  <div
                    className={`grid ${
                      sortedCategories.length < 6
                        ? "grid-cols-2"
                        : sortedCategories.length > 10
                        ? "grid-cols-3"
                        : ""
                    }`}
                  >
                    {sortedCategories.map((cat) => (
                      <div
                        key={cat.id}
                        className="grid justify-between items-center"
                      >
                        <li className="p-2 hover:bg-gray-100">{cat.cat}</li>
                      </div>
                    ))}
                  </div>
                </ul>
              )}

              <div className="w-1/3 flex justify-center items-center p-1 mt-2 pl-2 gap-4">
                <div className="border-r-2 gap-4 px-4 inline-flex">
                  <div
                    onMouseEnter={() => setSupplierHoverd(true)}
                    onMouseLeave={() => setSupplierHoverd(false)}
                  >
                    <p className="hover:text-red-400 cursor-pointer">
                      Suppliers
                    </p>
                  </div>
                  <div
                    onMouseEnter={() => setBuyerHovered(true)}
                    onMouseLeave={() => setBuyerHovered(false)}
                  >
                    <p className="hover:text-red-400 cursor-pointer">Buyers</p>
                  </div>
                </div>
                <div className="gap-8  inline-flex">
                  <div
                    onMouseEnter={() => setHelpHovered(true)}
                    onMouseLeave={() => setHelpHovered(false)}
                  >
                    <p className="hover:text-red-400 cursor-pointer">Help</p>
                  </div>
                  <div
                    onMouseEnter={() => setAppsHover(true)}
                    onMouseLeave={() => setAppsHover(false)}
                  >
                    <p className="hover:text-red-400 cursor-pointer">Apps</p>
                  </div>
                  <div
                    onMouseEnter={() => setEnglishsHover(true)}
                    onMouseLeave={() => setEnglishsHover(false)}
                  >
                    <p className="hover:text-red-400 cursor-pointer">English</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex justify-between items-center bg-white z-50 px-6 p-4 sticky top-0 ">
          <FiAlignJustify size={32} className="lg:hidden " />
          <div className="hidden lg:block">Logo</div>
          <div className="hidden lg:block relative border-red-500 rounded-2xl w-[900px] border-2">
            <div className="hidden md:relative md:inline-block text-left">
              <div className="">
                <div
                  className="hidden lg:inline-flex justify-center w-full border-r-[1px] shadow-sm px-4 py-3 text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="options-menu"
                  aria-expanded={isOpen}
                  // aria-haspopup="true"
                >
                  {isType || ""}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {isOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 lg:w-56 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    {options.map((option) => (
                      <li
                        key={option}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <input
              placeholder="search"
              className="  lg:w-[500px] p-2"
              type="text"
            />
            <IoCameraOutline
              className=" absolute right-[15%] top-2"
              size={32}
            />
            <div className="bg-red-500 w-[100px] p-1.5 absolute right-0 top-0 rounded-r-xl flex flex-col items-center justify-center">
              <IoSearchOutline size={32} className="text-white" />
            </div>
          </div>
          <div className="hidden lg:block">
            <p>Page</p>
          </div>
          <div className=" lg:hidden flex flex-col items-center justify-center rounded-lg w-1/2">
            <input
              placeholder="search"
              className=" lg:hidden w-full rounded-lg border p-2"
              type="text"
            />
          </div>
          <RxAvatar className="lg:hidden" size={32} />
        </div>
      )}
    </>
    // <div
    //   className={` lg:flex lg:justify-between w-full z-50 transition-all duration-300 ${
    //     scrolled
    //       ? "bg-white shadow-md py-5 fixed top-0 left-0"
    //       : "bg-white shadow-md py-5"
    //   }`}
    // >
    //   <div
    //     className={`fixed top-0 left-0 border w-full md:flex lg:justify-between ${
    //       scrolled ? " bg-white shadow-md py-2" : "bg-white z-50"
    //     } p-2 `}
    //   >
    //     <div>Logo</div>
    //     <div className="hidden md:block border-red-500 border">
    //       <div className="hidden md:relative md:inline-block text-left">
    //         <div className="border">
    //           <div
    //             onClick={toggleDropdown}
    //             className="hidden lg:inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //             id="options-menu"
    //             aria-expanded={isOpen}
    //             // aria-haspopup="true"
    //           >
    //             {isType || ""}
    //             <svg
    //               className="-mr-1 ml-2 h-5 w-5"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           </div>
    //         </div>

    //         {isOpen && (
    //           <div
    //             className="origin-top-right absolute right-0 mt-2 lg:w-56 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    //             role="menu"
    //             aria-orientation="vertical"
    //             aria-labelledby="options-menu"
    //           >
    //             <div className="py-1" role="none">
    //               {options.map((option) => (
    //                 <li
    //                   key={option}
    //                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    //                   onClick={() => handleOptionClick(option)}
    //                 >
    //                   {option}
    //                 </li>
    //               ))}
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //       <input placeholder="search" className=" w-1/2 lg:w-[450px] p-2" type="text" />
    //     </div>
    //     <div className="flex gap-12  justify-between items-center">
    //     <div className="flex items-center text-red-400 lg:flex-col justify-center text-center">
    //         <RxAvatar size={25} alignmentBaseline="central" />
    //         <p>Post My RFQ</p>
    //       </div>
    //       <div className="lg:flex hidden items-center flex-col justify-center text-center">
    //         <RxAvatar size={25} alignmentBaseline="central" />
    //         <p>Sign in/Join</p>
    //       </div>
    //       <div className="lg:flex hidden items-center flex-col justify-center text-center">
    //         <BsCart2 size={25} />
    //         Inquiry Basket
    //       </div>
    //       <div className="lg:flex hidden items-center flex-col justify-center text-center">
    //         <BsEnvelope size={25} />
    //         Messages
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className={
    //       scrolled
    //         ? "hidden"
    //         : " sm:hidden sm:overflow-x-auto sm:scrollbar-hide lg:flex items-center justify-between gap-3 w-full lg:mt-12 md:p-2"
    //     }
    //   >
    //     <div className=" hidden lg:flex items-center justify-between gap-5 text-left">
    //       {/* Dropdown Toggle Button */}
    //       <div>
    //         <a href="#" className="md:hidden block">All</a>
    //         <button
    //           type="button"
    //           onClick={() => setCategoryOpen(!categoryOpen)}
    //           className="hidden md:inline-flex justify-center w-full rounded-md border border-gray-300 mt-2 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
    //           id="menu-button"
    //           aria-expanded="true"
    //           aria-haspopup="true"
    //         >
    //           All Categories
    //           <svg
    //             className="-mr-1 ml-2 h-5 w-5"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>
    //       </div>

    //       {/* Dropdown Menu */}
    //       {categoryOpen && (
    //         <ul className=" absolute left-[0%] top-[23%] ml-2 p-2 w-1/2 z-40 min-h-[400px] bg-white border border-gray-200 shadow-xl rounded-lg">
    //                 <div className={`grid ${sortedCategories.length < 6 ? "grid-cols-2" : sortedCategories.length > 10 ? "grid-cols-3":""}`}>

    //                 {sortedCategories.map((cat) => (
    //                   <div key={cat.id} className="grid justify-between items-center">
    //                   <li className="p-2 hover:bg-gray-100">
    //                     {cat.cat}
    //                   </li>
    //                   {/* <li className="p-2 hover:bg-gray-100 text-left">
    //                     {cat.cat}
    //                   </li> */}
    //                   </div>
    //                 ))}
    //                 </div>
    //                 </ul>
    //       )}
    //       <div className="border-l-2 inline-flex p-1 mt-2 pl-2 gap-4">
    //         <p className="hover:text-red-400 cursor-pointer">
    //           Secured Trading Service
    //         </p>
    //         <p className="hover:text-red-400 cursor-pointer">Video Channel</p>
    //         <p className="hover:text-red-400 cursor-pointer">
    //           Top-Ranking Products
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex items-center justify-center gap-3 w-1/3">
    //       <div className="border-r-2 px-2 flex items-center justify-between gap-3">
    //         <p>Supplier</p>
    //         <p>Buyer</p>
    //       </div>
    //       <div className="border-r-2 px-2 flex items-center justify-between gap-3">
    //         <p>Help</p>
    //         <p>Apps</p>
    //         <p>English</p>
    //       </div>
    //       <div>
    //         <p>Rules</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Navbar;
