import { useState } from "react";


const StateForm = () => {


    const handle = e=>{
        e.preventDefault();
        if(error.length<=6){
            seterror("the password should be at least 8 characters")
        }
        else{
            seterror('')
        }
        console.log(email,"  ",name," ",password);
    }
    const [email,setemail]=useState('username');
    const handlemail =e=>{
       
        setemail(e.target.value)
    }
    const [name , setname]=useState(null);
    const handlename=e=>{
        setname(e.target.value);
    }
    const [password,setpassword]=useState(null);
    const handlepass=e=>{
        setpassword(e.target.value)
    }
    const[error,seterror]=useState('');



    return (
        <div>
            <form onSubmit={handle} >
                <input onChange={handlename} type="text" name=""  />
                <br />
                <input onChange={handlemail} type="email" name=""  />
                <br />
                <input onChange={handlepass} type="password" name="" />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateForm;