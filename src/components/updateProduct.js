import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Updateproduct = () => {
    const { pid } = useParams();
    const [pname, setPname] = useState('');
    const [pdescription, setPdesc] = useState('');
    const [pquantity, setPquantity] = useState('');
    const [pcategory, setCategory] = useState('');
    const [pprice, setPrice] = useState('');
    const [pimage, setImage] = useState('');
    const [cdetails, setCategoryDetails] = useState([]);
    const [msg, setMessage] = useState('');

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('ticket')
        }
    }
    const updateProduct = (e) => {
        e.preventDefault();
        // const data = {
        //     pname: pname,
        //     pdescription: pdescription,
        //     pquantity: pquantity,
        //     id: pid
        // }
        const data = new FormData();
        data.append('pname', pname);
        data.append('pdescription', pdescription);
        data.append('pquantity', pquantity);
        data.append('pcategory', pcategory);
        data.append('pprice', pprice);
        data.append('pimage', pimage);
        axios.put("http://localhost:90/product/updateboth/" + pid, data, config)
            .then(result => {
                console.log(result)
                setMessage(result.data.msg);
                console.log(result.data.msg)
            })
            .catch()
    }
    useEffect(() => {
        axios.get("http://localhost:90/product/single/" + pid, config)
            .then(result => {
                console.log(result)
                setPname(result.data.data.pname)
                setPdesc(result.data.data.pdescription)
                setPquantity(result.data.data.pquantity)
                setCategory(result.data.data.pcategory)
                setPrice(result.data.data.pprice)
            })
            .catch()

        axios.get('http://localhost:90/category/displayall', config)
            .then(response => {
                setCategoryDetails(response.data.data)
            })
            .catch()
    }, [])
    return (
        <div className="container center">
            {/* <div className="row center">
                <div className="col-md-4"> */}
                   
                    {/* <p>{message}</p> */}

                    <form  className="my-form mt-5">
                    {
                msg ? <div class="alert col-md-12 py-2 m-auto alert-success text-center" role="alert">
                    {msg}
                </div> : null
            }
                    <h2 className="text-center">Update Product</h2>
                        <div className="form-group">
                            <label>Product name</label>
                            <input type="text" className="form-control" value={pname} onChange={(e) => { setPname(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" className="form-control" value={pdescription} onChange={(e) => { setPdesc(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label>Quantity</label>
                            <input type="number" className="form-control" value={pquantity} onChange={(e) => { setPquantity(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
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
                        <div className="form-group " >
                            <label>Price</label>
                            <input type="number" className="form-control" value={pprice} onChange={(e) => { setPrice(e.target.value) }} />
                        </div>


                        <button type="submit" className="btn btn-primary mt-3" onClick={updateProduct}> Update</button>
                    </form>
                </div>
        //     </div>
        // </div>

    )
}
export default Updateproduct;