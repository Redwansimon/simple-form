
import './App.css'
import Simple from './component/new/Simple'
import RefForm from './component/Refform/RefForm'
import StateForm from './component/stateform/StateForm'

function App() {
  

  return (
    <>
      <h1>Vite + React</h1>
       {/* controlled way to access the form input value*/}
     {/* <Simple></Simple> */} 
     {/* <StateForm></StateForm> */}
     {/* uncontrolled way to get access the from value */}
     <RefForm></RefForm>
    </>
  )
}

export default App
