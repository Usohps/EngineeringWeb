import { items } from "../data";
function ProdutSection() {
  return (
    <>
        <div className="grid bg-white shadow-xl lg:grid-cols-4 grid-cols-1 grid-rows-2">
          {/* "Manufacturing & Processing Machinery" Title Section */}
          <div className="row-span-2 col-span-1 bg-blue-100 p-4 flex flex-col justify-center text-center">
            <h2 className="text-xl font-bold mb-2">
              Manufacturing & Processing Machinery
            </h2>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg">
              Source Now
            </button>
          </div>

          {/* The Other Items */}
          {items.map((item, index) => (
            <div
              key={index}
              className="border  shadow hover:shadow-md transition-shadow p-4  text-center"
            >
             
              <h3 className="text-lg text-left font-semibold">{item.title}</h3>
              <img
                src={item.imgSrc}
                alt={item.title}
                className="h-20 w-[200px] my-3 hover:scale-110 transition mx-auto mb-4"
              />
            </div>
          ))}
        </div>
        <div className="my-6">
        <div className="grid bg-white shadow-xl lg:grid-cols-4 grid-cols-1 grid-rows-2">
          {/* "Manufacturing & Processing Machinery" Title Section */}
          <div className="row-span-2 col-span-1 bg-blue-100 p-4 flex flex-col justify-center text-center">
            <h2 className="text-xl font-bold mb-2">
              Sporting Goods & Recreation
            </h2>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg">
              Source Now
            </button>
          </div>

          {/* The Other Items */}
          {items.map((item, index) => (
            <div
              key={index}
              className="border  shadow hover:shadow-md transition-shadow p-4  text-center"
            >
              <h3 className="text-lg text-left font-semibold">{item.title}</h3>
              <img
                src={item.imgSrc}
                alt={item.title}
                className="h-20 w-[200px] my-3 hover:scale-110 transition mx-auto mb-4"
              />
            </div>
          ))}
        </div>
        </div>
        <div className="my-6">
        <div className="grid bg-white shadow-xl lg:grid-cols-4 grid-cols-1 grid-rows-2">
          {/* "Manufacturing & Processing Machinery" Title Section */}
          <div className="row-span-2 col-span-1 bg-blue-100 p-4 flex flex-col justify-center text-center">
            <h2 className="text-xl font-bold mb-2">
              Construction & Decoration
            </h2>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg">
              Source Now
            </button>
          </div>

          {/* The Other Items */}
          {items.map((item, index) => (
            <div
              key={index}
              className="border  shadow hover:shadow-md transition-shadow p-4  text-center"
            >
              <h3 className="text-lg text-left font-semibold">{item.title}</h3>
              <img
                src={item.imgSrc}
                alt={item.title}
                className="h-20 w-[200px] my-3 hover:scale-110 transition mx-auto mb-4"
              />
            </div>
          ))}
        </div>
        </div>
    </>
  );
}

export default ProdutSection;
