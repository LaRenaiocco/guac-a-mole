import React, { useState} from 'react';
import { useCanvas } from './useCanvas';


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



// function Button(props) {
//   return <button>{props.label}</button>
// };



function ShowInstructions() {
  const[showInstructions, setShowInstructions] = useState(false)
  console.log(showInstructions)

  return (<React.Fragment>
    <button onClick={()=>setShowInstructions(!showInstructions)}>
      Instructions
      </button>
      {showInstructions && <Instructions/>}
      </React.Fragment>
  );
};


function Instructions(){
  console.log("instructions")
  return (
    <div className='container'>
        Here are some game instructions<br />
        <ol>
        <li>Select your level</li>
        <li>Collect as many avocados as you can to make guacomole</li>
        <li>5 misses is game over (Lose a tortilla chip for each miss)</li>
        </ol>
      </div>
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

  const[ randomCoordX, setRandomCoordX] = useState([]);
  const[ randomCoordY, setRandomCoordY] = useState([]);
  const [rCoord, setRCoord, coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ] = useCanvas();

  const handleCanvasClick=(event)=>{
    // on each click get current mouse location 
    const currentCoord = { x: event.clientX, y: event.clientY };
    // add the newest mouse location to an array in state 
    setCoordinates([...coordinates, currentCoord]);
  };

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  };

  const handleRandomImage=(event)=> {
    const randomY = Math.floor(randomNumber(1, canvasHeight))
    const randomX = Math.floor(randomNumber(1, canvasWidth))
    console.log("AVOCADOS", randomY, randomX)
    const randomCoor ={ x: randomX, y: randomY }
    setRCoord([...rCoord, randomCoor]);
    displayRandomImage()
  }
  function displayRandomImage() {
    const canvasObj = canvasRef.current;
    const ctx2 = canvasObj.getContext('2d');
    
    // ctx2.drawImage(newAvocado, randomCoordX, randomCoordY)
    ctx2.fillRect(randomCoordX, randomCoordY, 10, 10)
    ctx2.save()
    console.log("in display",randomCoordX, randomCoordY, ctx2 )
  }

  const handleClearCanvas=(event)=>{
    setCoordinates([]);
  };

  console.log("HEARTS", coordinates)
  const canvasStyle = {
    border: '1px solid black'
  }

  return (
    <div>
      <Greeting />
      <Authors />
      <ShowInstructions />
      <br></br>
      <canvas
        ref={canvasRef}
        style={canvasStyle}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick} />

      <div className="button" >
        <button onClick={handleClearCanvas} > CLEAR </button>
      </div>

      <div className="button" >
        <button onClick={handleRandomImage} > MAKE AN AVOCADO </button>
      </div>

      {/* <Button label="Play Game"/> */}
      {/* <HelloClicker/> */}
    </div>
  )

}
export default LandingPage