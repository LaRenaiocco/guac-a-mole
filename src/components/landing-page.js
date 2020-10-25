import React from "react"

function Greeting() {
  return (
    <h1>Welcome to Guac-A-Mole</h1>
  );
};

function Authors() {
  return (
    <div>
      <h3>A Mint Bean Hackathon project by:</h3>
      <h5>Elena Churilova, LaRena Iocco, Sarah Hudspeth</h5>
      <h6>Hackbright Graduates (Sept. 2020)</h6>
    </div>
  );
};

function Button(props) {
  return <button>{props.label}</button>
};
function ShowInstructions() {
  function instructions() {
    return (
      <div>Here are some game instructions</div>
    );
  };

  return (
    <button onClick={instructions}>
      Instructions
      </button>
  );
};

// function HelloClicker() {
//   function alertMessage() {
//     alert('You just handled an event!');
//   }

//   return (
//     <button onClick={alertMessage}>
//       Click me
//     </button>
//   );
// }



function LandingPage() {
  return (
    <div>
      <Greeting/>
      <Authors/>
      <ShowInstructions/>
      {/* <Button label="Play Game"/> */}
      {/* <HelloClicker/> */}
    </div>
  )

}
export default LandingPage