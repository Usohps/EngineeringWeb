// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected this line
import RegisterForm from "./pages/Register";
import Otp from "./pages/Otp";
import Login from "./pages/Login";
import HomeLayout from "./layouts/HomeLayout";
import GetstartedLayout from "./layouts/GetstartedLayout";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <div className="bg-slate-200">
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<HomeLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/otp" element={<Otp />} />
        </Route>
        <Route element={<GetstartedLayout/>}>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<DashboardLayout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
    </div>
  );
}

export default App;
