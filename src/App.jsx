
// import './App.css'
import HookForm from './component/Hoolform/HookForm'
// import Simple from './component/new/Simple'
// import RefForm from './component/Refform/RefForm'
// import StateForm from './component/stateform/StateForm'

import React, { useState } from "react";




function App() {
  const cardsData = [
    { id: 1, content: 'Card 1: This is the first card' },
    { id: 2, content: 'Card 2: This is the second card' },
    { id: 3, content: 'Card 3: This is the third card' },
  ];


  return (
    <>
      <h1>Vite + React</h1>

      {/* controlled way to access the form input value*/}
      {/* <Simple></Simple> */}
      {/* <StateForm></StateForm> */}
      {/* //      uncontrolled way to get access the from value */}
      {/* <RefForm></RefForm> */}
      <HookForm></HookForm>
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
      </div >
    </>
  )
}

export default App





// Higher-Order Component (HOC) for hover functionality
const withHover = (WrappedComponent) => {
  console.log(WrappedComponent);
  const ComponentWithHover = (props) => {
    
    console.log(props)
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

// Card component
// const Card = (props) =>
  
//   {
//      const {isHovered,content}=props;
    
//   return(<div
//     style={{
//       padding: '16px',
//       backgroundColor: isHovered ? '#e0e0e0' : '#ffffff',
//       border: '1px solid #ccc',
//       borderRadius: '4px',
//       transition: 'background-color 0.3s',
//       marginBottom: '8px', // Space between cards
//     }}
//   >
//     {content}
//   </div>);
//   };
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

// const HoverableButton = withHover(({ isHovered, label }) => (
//   <button style={{ color: isHovered ? 'blue' : 'black' }}>{label}</button>
// ));
const butt = ({ isHovered, label, c }) => {
  return (<button style={{ color: isHovered ? 'blue' : 'black' }}>{label} <br /> {c}</button>)

}
const HoverableButton = withHover(butt);



// Enhanced component with hover functionality
const HoverableCard = withHover(Card);

