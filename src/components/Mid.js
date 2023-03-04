import { Route, Routes } from "react-router-dom";
import Register from "./register/register";
import Login from "./login/login";
import AddProduct from "./admin/addProduct";
import DisplayProduct from "./admin/displayProduct";
import Profile from "./userProfile/profile";
import UpdateProfile from "./updateprofile";
import Updateproduct from "./updateProduct";
import SingleProduct from "./singleProduct";
import PrivateRoute from "./privateRoute";
import PrivateRouteAdmin from "./protectedRouteAdmin";
import Homepage from "./homepage/home";
import ProductDisplay from "./userProduct";
import UserProduct from "./userProduct";
import UserCart from "./cart/cart";
import ShowLibrary from "./healthLibrary/displayLibrary";
import SingleLibrary from "./healthLibrary/singleLibrary";
import AboutUs from "./aboutus/aboutus";
import ContactUs from "./contactus/contact";
import ProductDetails from "./productDetail/productDetails";
import AddCart from "./cart/addcart";
import OrderPage from "./order";
import MyOrder from "./myorder";



const Mid = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Homepage />}></Route>

            <Route path="/addProduct" element={
                <PrivateRouteAdmin>
                    <AddProduct />
                </PrivateRouteAdmin>
            }></Route>
            <Route path="/userProduct" element={<UserProduct />}></Route>

            <Route path="/cart" element={<AddCart />}></Route>
            <Route path="/order" element={<OrderPage />}></Route>
            <Route path="/displayProduct" element={<DisplayProduct />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/displayLibrary" element={<ShowLibrary />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
            <Route path="/myorder" element={<MyOrder />}></Route>
            <Route path="/health/single/:pid" element={<SingleLibrary />}></Route>
            <Route path="/updateprofile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>}></Route>
            {/* <Route path="/updateproduct/:pid" element={<Updateproduct />}></Route> */}
            <Route path="/product/single/:pid" element={<ProductDetails />}></Route>
            <Route path="/abc" element={<PrivateRouteAdmin><abc /></PrivateRouteAdmin>}></Route>





        </Routes>
    )
}
export default Mid;