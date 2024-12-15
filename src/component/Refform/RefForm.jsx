import { useRef } from "react";


const RefForm = () => {

    const nameRef = useRef();
    const emailRef= useRef();
    const passRef = useRef();

    const handle = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handle} >
                <input ref={nameRef}  type="text" name=""  />
                <br />
                <input ref={emailRef} type="email" name=""  />
                <br />
                <input ref={passRef}  type="password" name="" />
                <br />
                <input type="submit" value="Submit" />
              
            </form>
        </div>
    );
};

export default RefForm;