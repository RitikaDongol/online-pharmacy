import Header from "./components/header";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Mid from "./components/Mid";
import AdminDashboard from "./components/admin/admindashboard";
import MidAdmin from "./components/admin/Midadmin";
import Navbaradmin from "./components/admin/navbaradmin";
import Footer from "./components/footer/footer";



function App(){
  return(
  <>
  {localStorage.getItem("userType") === "Admin" ? (
    <BrowserRouter>
     <Navbaradmin/>
    <MidAdmin />
  </BrowserRouter> 
  ) : (
    <BrowserRouter>

    <Header/>
    <Mid />
    <Footer />
  
  </BrowserRouter>
  )}
  </>
 


  );
}
export default App;