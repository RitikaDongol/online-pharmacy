import { Route, Routes } from "react-router-dom";

import AddProduct from "./addProduct";
import AdminDashboard from "./admindashboard";
import DisplayProduct from "./displayProduct";

import PrivateRouteAdmin from "../protectedRouteAdmin";
import AddCategory from "../admin/addCategory";
import DisplayCategory from "./displayCategory";
import Updateproduct from "../updateProduct";
import AddHealth from "./addHealth";
import DisplayHealth from "./displayHealth";
import DisplayPrescription from "./displayPrescription";
import OrderDetail from "./orderDetail";



const MidAdmin = () => {
    return (
        <Routes>
            {/* <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Homepage />}></Route> */}
            <Route path="/" element={<AdminDashboard />}></Route>
            <Route path="/addProduct" element={
                <PrivateRouteAdmin>
                    <AddProduct />
                </PrivateRouteAdmin>
            }></Route>

            <Route path="/displayProduct" element={<DisplayProduct />}></Route>

            <Route path="/addHealth" element={
                <PrivateRouteAdmin>
                    <AddHealth />
                </PrivateRouteAdmin>}></Route>

            <Route path="/orderDetail" element={<OrderDetail />}></Route>
            <Route path="/displayHealth" element={<DisplayHealth />}></Route>
            <Route path="/displayCategory" element={<DisplayCategory />}></Route>
            <Route path="/displayPrescription" element={<DisplayPrescription />}></Route>

            <Route path="/updateproduct/:pid" element={
                <PrivateRouteAdmin>
                    <Updateproduct />
                </PrivateRouteAdmin>}></Route>
            <Route path="/addCategory" element={
                <PrivateRouteAdmin>
                    <AddCategory />
                </PrivateRouteAdmin>
            }></Route>

            {/* <Route path="/profile" element={<Profile />}></Route>
            <Route path="/updateprofile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>}></Route>
            <Route path="/updateproduct/:pid" element={<Updateproduct />}></Route>
            <Route path="/product/single/:pid" element={<SingleProduct/>}></Route>
            <Route path="/abc" element={<PrivateRouteAdmin><abc /></PrivateRouteAdmin>}></Route> */}

        </Routes>
    )
}
export default MidAdmin;