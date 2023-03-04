import axios from "axios";
import { useState } from "react";

const AddCategory =()=>{
    const[cname, setCategoryname]=useState('');
    const[cdescription, setDescription]=useState('');
    const[cimage, setImage]=useState('');
   

    const [message, setMessage] = useState('');

    const addCategory=(e)=>{
        e.preventDefault();

        const data= new FormData();
        data.append('cname', cname);
        data.append('cdescription', cdescription);
        data.append('cimage', cimage);
        // const data={
        //     cname:cname,
        //     cdescription:cdescription,
        //     cimage:cimage,
        // }
        const config ={
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('ticket')
            }
        }
        axios.post('http://localhost:90/category/add', data, config)
        .then(response=>{
            console.log(response)
            setMessage(response.data.message);
            console.log(response.data.message)
        })
        .catch(e)
    }
    return(
   
    
  <div className="container">
{/*        
       <div className="row justify-content-center my-form">
           <div className="col-md-5"> */}
           
           {/* <p>{message}</p> */}
        
       <form className="my-form mt-5">
       {
                message ? <div class="alert col-md-12 py-1 m-auto alert-success text-center" role="alert">
                    {message}
                </div> : null
            }
       <h2 className="text-center mb-4">Add Category</h2>
           <div className="form-group">
               <label>Category name</label>
               <input type="text" className="form-control" onChange={(e) =>setCategoryname(e.target.value) }/>
           </div>
           <div className="form-group">
               <label>Description</label>
               <input type="text" className="form-control" onChange={(e) =>setDescription(e.target.value) }/>
           </div>
          
       
           <div className="form-group">
               <label>Image</label>
               <input type="file" className="form-control" onChange={(e) =>setImage(e.target.files[0])}/>
           </div>
           
   
           <button type="submit" className="btn btn-primary my-btn mt-4 p-2" onClick={addCategory}> Add</button>
        
       </form>
       </div>
    //    </div>
    //    </div>


    );
}
export default AddCategory;