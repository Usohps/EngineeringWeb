
function Recommendation() {
    const products = [
        { name: 'Hydraulic Pump', count: '70,000+' },
        { name: 'Coffee Table', count: '56,000+' },
        { name: 'Water Purifier', count: '144,000+' },
        { name: 'Home Furniture', count: '52,000+' },
        { name: 'Mobility Scooter', count: '40,000+' },
      ];
    
      return (
        <div className="w-1/4 bg-white p-4 hidden lg:block">
          <h2 className="font-semibold mb-4">You May Like</h2>
          <ul>
            {products.map((product) => (
              <li key={product.name} className="mb-4 flex justify-between">
                <span className="text-sm">{product.name}</span>
                <span className="text-sm text-gray-500">{product.count} Products</span>
              </li>
            ))}
          </ul>
          <button className="border-red-500 border font-semibold text-red-500 px-4 py-2 mt-4 w-full rounded">
            Post Your Request Now
          </button>
        </div>
      );
}

export default Recommendation