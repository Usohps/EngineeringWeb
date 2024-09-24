import { useState } from "react";
import { category } from "../data";

function Sidebar() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  return (
    <div className="w-1/4 hidden lg:block bg-white p-4 ">
      <h2 className="font-semibold mb-4">Categories</h2>
      {category.map((category) => (
        <ul
          key={category.id}
          onMouseEnter={() => setHoveredCategory(category.id)}
          onMouseLeave={() => setHoveredCategory(null)}
          className=" hover:bg-gray-100 transition rounded-lg p-2"
        >
          <li className="mb-2 hover:text-red-400 text-sm text-gray-700 cursor-pointer">
            {category.cat}
          </li>
          {hoveredCategory === category.id && (
            <ul
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className=" cursor-pointer transition absolute right-[26%] top-[0%] ml-4 p-2 w-1/2 z-40 min-h-[400px] bg-white border border-gray-200 shadow-2xl rounded-lg grid grid-flow-row-dense  grid-cols-[repeat(auto-fit,minmax(150px,1fr))]"
            >
              {category.subcat.map((sub, idx) => (
                <li key={idx} className="p-2">
                  <div className=" font-bold">{sub.head}</div>
                  {sub.details.map((detail) => (
                    <>
                      <li
                        className={`
            bg-gray-100 
            ${
              idx === detail.length > 5
                ? "col-span-full text-center font-bold"
                : ""
            }
          `}
                      >
                        {detail}
                      </li>
                      {/* <li className="p-2 hover:bg-gray-100">{detail}</li> */}
                    </>
                  ))}
                </li>
              ))}
            </ul>
          )}
        </ul>
      ))}
      <li className="text-blue-500 cursor-pointer">More Categories</li>
    </div>
  );
}

export default Sidebar;
