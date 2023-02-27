import React,{useState} from 'react';
import './PostForm.css';

function PostForm() {
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [email, setEmail] = useState("");
    const [occupation, setOccupation] = useState("");
    const [message, setMessage] = useState("");
    const [first_nameerror, setFirst_NameError] = useState("");
    const [last_nameerror, setLast_NameError] = useState("");
    const [occupationerror, setOccupationError] = useState("");

  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("https://crudcrud.com/api/900323f0f3284e9395406462e333bc30/user", {
          method: "POST",
          body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            occupation: occupation,
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setFirst_Name("");
          setLast_Name("");
          setEmail("");
          setOccupation("");
          setMessage("User created successfully");
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
        setMessage("Some error occured");
      }
    };

    const handleChangeFN = (e) => {
        setFirst_Name(e.target.value)
        if (first_name.length < 3) {
            setMessage("First name is required.")
        }
        else {
            setMessage("")
        }
    }

    const handleChangeLN = (e) => {
        setLast_Name(e.target.value)
        if (last_name.length < 3) {
            setMessage("Last name is required.")
        }
        else {
            setMessage("")
        }
    }

    const handleChangeO = (e) => {
        setOccupation(e.target.value)
        if (occupation.length < 3) {
            setMessage("Occupation is required.")
        }
        else {
            setMessage("")
        }
    }

    const handleChangeE = (e) => {
        setEmail(e.target.value)
        if (!email.match(/.+@.+/)) {
            setMessage("Email is required.")
        }
        else {
            setMessage("")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} id='form1'>
                <div class="block2">
                <div><input  onChange={(e)=>handleChangeFN(e)} id="first_name" value={first_name} placeholder="First Name" type="text" required></input>
                <input  onChange={(e)=>handleChangeLN(e)} id="last_name" value={last_name} placeholder="LastName" type="text" required></input>
                </div>
                
                <div>
                <input  onChange={(e)=>handleChangeE(e)} id="email" value={email} placeholder="Email" type="text" required></input>
                <input  onChange={(e)=>handleChangeO(e)} id="occupation" value={occupation} placeholder="Occupation" type="text" required></input>
                </div>
                <div class="block1">
                <span class="label1">Add User</span>
                <button type="submit" class = "button1" disabled={!first_name || first_name.length < 3 || !last_name || last_name.length < 3 || !email || !email.match(/.+@.+/) || !occupation || occupation.length < 3 ? true : false}></button>
                </div>
                <div class="message">{message ? <p>{message}</p> : null}</div>
                </div>
            </form>
   
        </div>
    );
}

export default PostForm;