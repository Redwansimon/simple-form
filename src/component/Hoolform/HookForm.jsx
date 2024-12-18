import useInputState from "../../Hooks/useInputState";


const HookForm = () => {
    const [text ,handleText]=useInputState();
    const [pass ,handlepass]=useInputState();
    // const inputemail =useInputState(null);
    const handle =e=>{
        e.preventDefault();
        console.log(text,pass);
    }
    return (
        <div>
               <form onSubmit={handle}>
                <input value={text} onChange={handleText} type="text" name="text" id="" />
                <br />
                {/* <input {...inputemail} type="email" name="email" id="" /><br /> */}

                <br />
                <input value={pass} onChange={handlepass} type="password" name="password" id="" />
                <br />
                <button>submit</button>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;