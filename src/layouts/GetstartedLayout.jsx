import { Outlet } from "react-router-dom"

function GetstartedLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
        <Outlet/>
        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-8">
            <p>© 1998-2024 Focus Technology Co., Ltd. All Rights Reserved.</p>
            <p className="mt-2">
              <a href="#" className="text-gray-500 hover:text-blue-600">About Us</a> | 
              <a href="#" className="text-gray-500 hover:text-blue-600 ml-2">FAQ</a> | 
              <a href="#" className="text-gray-500 hover:text-blue-600 ml-2">Contact Us</a> | 
              <a href="#" className="text-gray-500 hover:text-blue-600 ml-2">Privacy Policy</a>
            </p>
          </footer>
    </div>
  )
}

export default GetstartedLayout