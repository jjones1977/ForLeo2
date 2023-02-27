import React,{useState} from 'react';
import Axios from 'axios';
import './PostForm.css';

function PostForm() {
    const url ="https://crudcrud.com/api/900323f0f3284e9395406462e333bc30/user"
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        occupation: ""
    })

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            occupation: data.occupation
        })
        .then(res=>{
            console.log(res.data)
            let statusCode = res.status,
            success = res.ok;
            
        })
        
    }


    return (
        <div>
            <form onSubmit={(e)=> submit(e)}>
                <input  onChange={(e)=>handle(e)} id="first_name" value={data.first_name} placeholder="First Name" type="text" required></input>
                <input  onChange={(e)=>handle(e)} id="last_name" value={data.last_name} placeholder="LastName" type="text" required></input>
                <input  onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="Email" type="text" required></input>
                <input  onChange={(e)=>handle(e)} id="occupation" value={data.occupation} placeholder="Occupation" type="text" required></input>
                <br></br>
                <div class="block1">
                <button id="submitButton" type="button" disabled={!data.first_name || !data.last_name || !data.email || !data.occupation ? true : false}>Add User</button>
                <span class="label1">Add User</span>
                </div>
            </form>
   
        </div>
    )
}

export default PostForm;