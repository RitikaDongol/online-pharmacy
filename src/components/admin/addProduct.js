import axios from "axios";
import { useEffect, useState } from "react";

const AddProduct = () => {
    const [pname, setProductname] = useState('');
    const [pdescription, setDescription] = useState('');
    const [pquantiy, setQuantity] = useState('');
    const [pcategory, setCategory] = useState('');
    const [pprice, setPrice] = useState('');
    const [pimage, setImage] = useState('');

    const [cdetails, setCategoryDetails] = useState([]);

    const [msg, setMsg] = useState('');

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('ticket')
        }
    }

    const addProduct = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('pname', pname);
        data.append('pdescription', pdescription);
        data.append('pquantity', pquantiy);
        data.append('pcategory', pcategory);
        data.append('pprice', pprice);
        data.append('pimage', pimage);

        // const data = {
        //     pname: pname,
        //     pdescription: pdescription,
        //     pquantiy: pquantiy,
        //     pcategory: pcategory,
        //     pprice: pprice,
        //     pimage:pimage
        // }

        axios.post('http://localhost:90/product/insert', data, config)
            .then(response => {
                console.log(response)
                setMsg(response.data.msg);
                console.log(response.data.msg)
            })
            .catch()
    }

    useEffect(() => {
        axios.get('http://localhost:90/category/displayall', config)
            .then(response => {
                setCategoryDetails(response.data.data)
            })
            .catch()
    }, []);

    return (

        <div className="container center">
            {/* <div className="row center">
                <div className="col-md-4"> */}

            {/* <p>{message}</p> */}

            <form className="my-form mt-5">
            {
                msg ? <div class="alert col-md-12 py-2 m-auto alert-success text-center" role="alert">
                    {msg}
                </div> : null
            }
                <h2 className="text-center">Add Product</h2>
                <div className="form-group">
                    <label>Product name</label>
                    <input type="text" className="form-control" onChange={(e) => setProductname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <input type="number" className="form-control" onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    {/* <input type="text" className="form-control" onChange={(e) =>setCategory(e.target.value)}/> */}
                    <select class="form-select" onChange={(e) => setCategory(e.target.value)} aria-label="Default select example">
                        <option selected>Select category</option>
                        {cdetails.map((singleProduct) => {
                            return (<option value={singleProduct._id}>{singleProduct.cname}</option>)
                        })}


                    </select>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
                </div>


                <button type="submit" className="btn btn-primary mt-3 my-btn mt-4" onClick={addProduct}> Add</button>
            </form>
        </div>
        //     </div>
        // </div>
    );
}
export default AddProduct;