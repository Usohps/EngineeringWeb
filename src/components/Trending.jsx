import {products} from "../data"
function Trending() {
    
  return (
    <div className='bg-white shadow-sm p-6 cursor-pointer'>
        <h1 className="text-3xl p-6 pt-6">Selected Trending Products</h1>
        <div className=" grid lg:grid-cols-6 lg:grid-rows-2 grid-cols-1 text-center md:grid-cols-3 md:grid-row-3 gap-6">
        {products.map((product)=>(
            <div key={product.id}>
                <div className="w-full transform transition-transform duration-300 hover:scale-110" >
                    <img src={product.img} className=" rounded-md" alt="car image" />
                    <p>{product.desciption}</p>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Trending