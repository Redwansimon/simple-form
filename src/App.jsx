
import './App.css'
import HookForm from './component/Hoolform/HookForm'
// import Simple from './component/new/Simple'
// import RefForm from './component/Refform/RefForm'
// import StateForm from './component/stateform/StateForm'

import React, { useState } from "react";
import ReusableForm from './component/UsableForm/ReusableForm';




function App() {
  const cardsData = [
    { id: 1, content: 'Card 1: This is the first card' },
    { id: 2, content: 'Card 2: This is the second card' },
    { id: 3, content: 'Card 3: This is the third card' },
  ];
const handlelogin =data=>{
 
  console.log('login form',data);
  // console.log(e.target.email.value)
}
const handleprofile=data=>{
  console.log('update profile',data)
}
  return (
    <>
      <h1>Vite + React</h1>

      {/* controlled way to access the form input value*/}
      {/* <Simple></Simple> */}
      {/* <StateForm></StateForm> */}
      {/* //      uncontrolled way to get access the from value */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle="log in form" handle={handlelogin}>
        <h1>LogIn Form</h1>
        <p>please provide your information</p>
      </ReusableForm>
      <ReusableForm formTitle="profile" buttontext='Updatee'handle={handleprofile}>
        <h1>this is your profile zone</h1>
        <p>Need to update</p>
      </ReusableForm>
      <div style={{border:'10px solid white', padding: '24px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>
          Multiple Hoverable Cards Example
        </h1>
        {
          cardsData.map((card) => (
            <HoverableCard key={card.id} content={card.content} />

          ))
        }
        <HoverableButton label="Hover over me!" c='hi' />
        <Butt  label="Hover over me!"></Butt>
        <Card content="this is my life"></Card>
      </div >
    </>
  )
}

export default App





// Higher-Order Component (HOC) for hover functionality
const withHover = (WrappedComponent) => {

  const ComponentWithHover = (props) => {
    

    const [isHovered, setHovered] = React.useState(false);

    return (
      <div
        onMouseEnter={() => setHovered(true)} // Trigger hover state on mouse enter
        onMouseLeave={() => setHovered(false)} // Reset hover state on mouse leave
      >
        <WrappedComponent isHovered={isHovered} {...props} />
        
      </div>
    );
  };

  // Set a display name for better debugging
  ComponentWithHover.displayName = `WithHover(${getDisplayName(WrappedComponent)})`;

  return ComponentWithHover;
};

// Helper function to get the wrapped component's name
const getDisplayName = (WrappedComponent) =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';


const Card = ({isHovered, content}) => {


  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: isHovered ? '#e0e0e0' : '#ffffff',
        border: '1px solid #ccc',
        borderRadius: '4px',
        transition: 'background-color 0.3s',
        marginBottom: '8px', // Space between cards
      }}
    >
      {content}
    </div>
  );
};


const Butt = ({ isHovered, label }) => {

  return (<button style={{ color: isHovered ? 'blue' : 'black' }}>{label}</button>)

}
const HoverableButton = withHover(Butt);



// Enhanced component with hover functionality
const HoverableCard = withHover(Card);

