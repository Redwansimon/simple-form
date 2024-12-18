

const ReusableForm = ({formTitle,handle,buttontext}) => {
    const localhandle =(e)=>{
        e.preventDefault();
        const data ={
            text:e.target.text.value,
            email : e.target.email.value,
            pass: e.target.phone.value

        };return handle(data);

    }
    return (
        <div>
            <h2>{formTitle}</h2>
            <form onSubmit={localhandle}>
                <input type="text" name="text" id="" />
                <br />
                <input type="email" name="email" id="" /><br />

                <br />
                <input type="password" name="phone" id="" />
                <br />
                <button>submit</button>
                <br />
                <input type="submit" value={buttontext} />
            </form>

        </div>
    );
};

export default ReusableForm;