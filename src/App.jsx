
import './App.css'

function App() {
  const handle = e=>{
    e.preventDefault();
    console.log(e.target.text.value)
    console.log(e.target.email.value)
    console.log(e.target.phone.value)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <form onSubmit={handle}>
        <input type="text" name="text" id="" />
        <br />
        <input type="email" name="email" id="" /><br />
        <input type="number" name="phone" id="" />
        <br />
        <input type="text" name="phone" id="" />
        <button>submit</button>
        <input type="submit" value="submit" />
      </form>
     
    </>
  )
}

export default App
