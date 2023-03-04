import axios from "axios";
import { useState } from "react";

const AddHealth =()=>{
    const[title, setTitle]=useState('');
    const[description, setDescription]=useState('');
    const[date, setDate]=useState('');
    const[desc, setDesc] = useState('');
    const[image, setImage]=useState('');
    const[author, setAuthor]=useState('');
   

    const [message, setMessage] = useState('');

    const addHealth=(e)=>{
        e.preventDefault();

        const data= new FormData();
        data.append('title', title);
        data.append('description', description);
        data.append('desc', desc);
        data.append('date', date);
        data.append('image', image);
        data.append('author', author);
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
        axios.post('http://localhost:90/health/insert', data, config)
        .then(response=>{
            console.log(response)
            setMessage(response.data.msg);
            console.log(response.data.msg)
        })
        .catch(e)
    }
    return(
   
    
  <div className="container">
{/*        
       <div className="row justify-content-center my-form">
           <div className="col-md-5"> */}
           
           {/* <p>{message}</p> */}
           {
                message ? <div class="alert col-md-6 m-auto alert-success text-center" role="alert">
                    {message}
                    <button type="button" class="btn-close ms-5" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> 

                : null
            }
          
       <form className="my-form mt-5">
       <h2 className="text-center mb-4">Add Health Library</h2>
           <div className="form-group">
               <label>Title</label>
               <input type="text" className="form-control" onChange={(e) =>setTitle(e.target.value) }/>
           </div>
           <div className="form-group">
               <label>Description</label>
               <input type="text" className="form-control" onChange={(e) =>setDesc(e.target.value) }/>
           </div>
           <div className="form-group">
               <label>rich Description</label>
               <input type="text" className="form-control" onChange={(e) =>setDescription(e.target.value) }/>
           </div>
           <div className="form-group">
               <label>Date</label>
               <input type="date" className="form-control" onChange={(e) =>setDate(e.target.value) }/>
           </div>
           
       
           <div className="form-group">
               <label>Image</label>
               <input type="file" className="form-control" onChange={(e) =>setImage(e.target.files[0])}/>
           </div>
           
           <div className="form-group">
                <label>Author</label>
                <input type="text" className="form-control" onChange={(e) =>setAuthor(e.target.value) }/>
           </div>
   
           <button type="submit" className="btn btn-primary my-btn mt-4 p-2" onClick={addHealth}> Add</button>
        
       </form>
       </div>
    //    </div>
    //    </div>


    );
}
export default AddHealth;