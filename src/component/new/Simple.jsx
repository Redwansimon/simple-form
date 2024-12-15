

const Simple = () => {
    const handle = e => {
        e.preventDefault();
        console.log(e.target.text.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
    }
    return (
        <div>
            <form onSubmit={handle}>
                <input type="text" name="text" id="" />
                <br />
                <input type="email" name="email" id="" /><br />

                <br />
                <input type="text" name="phone" id="" />
                <br />
                <button>submit</button>
                <br />
                <input type="submit" value="submit" />
            </form>

        </div>
    );
};

export default Simple;