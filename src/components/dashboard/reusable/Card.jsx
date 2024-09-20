// import { SwiperSlide } from "swiper/react"
export const ProductCard = ({ image, title, buttonText }) => (
    // <SwiperSlide>
    <div className="relative rounded-lg shadow-md min-w-[160px] sm:min-w-[200px]">
      <img src={image} alt={title} className="w-full h-32 sm:h-40 object-cover rounded-t-lg" />
      <div className="p-2 sm:p-4">
        <p className="text-xs sm:text-sm font-semibold">{title}</p>
        <button className="bg-red-200 text-red-600 rounded-lg py-1 px-2 sm:px-4 mt-2">{buttonText}</button>
      </div>
      {/* Favorite Icon */}
      <div className="absolute top-2 right-2">
        <button className="bg-white p-1 sm:p-2 rounded-full shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-red-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 19.071A7.5 7.5 0 0012 21.5a7.5 7.5 0 006.879-2.429 7.5 7.5 0 000-10.606L12 2.5l-6.879 5.965a7.5 7.5 0 000 10.606z"/>
          </svg>
        </button>
      </div>
    </div>
    // </SwiperSlide>
  )