import { Fragment } from "react";
import { useRef } from "react";
import useDimensions from "./useDimensions";

function App() {
  const pinkBox = useRef(null)
  const greenBox = useRef(null)
  const blueBox = useRef(null)
  const appBox= useRef(null)

  const [pinkDimensions] = useDimensions(pinkBox)
  const [greenDimensions] = useDimensions(greenBox)
  const [blueDimensions] = useDimensions(blueBox)
  const [appDimensions]= useDimensions(appBox)

  return (
    <div 
      ref={appBox}
      style={{ 
        boxSizing:"border-box", 
        display: 'flex', 
        flexWrap: "wrap",
        justifyContent: "space-around",
        height: '100vh', 
        width: '100%', 
        background: 'lightBlue',
        padding: 10
      }}
    >
      {Object.keys(appDimensions).map(key => <Fragment key={`app-measuerment-${key}`}>{key}: {appDimensions[key]}<br /></Fragment>)}
      <div 
        ref={pinkBox} 
        style={{ 
          boxSizing:"border-box", 
          height: '25%', 
          width: '30%',
          background: "pink", 
          padding: 20,
          overflow: "auto"
        }}
      >
        {Object.keys(pinkDimensions).map(key => <Fragment key={`pink-measuerment-${key}`}>{key}: {pinkDimensions[key]}<br /></Fragment>)}
      </div>
      <div 
        ref={greenBox} 
        style={{ 
          boxSizing:"border-box", 
          height: '30%', 
          width: '40%',
          background: "lightGreen", 
          padding: 20,
          marginTop: 20,
          overflow: "auto"
        }}
      >  
        {Object.keys(greenDimensions).map(key => <Fragment key={`green-measuerment-${key}`}>{key}: {greenDimensions[key]}<br /></Fragment>)}
      </div>
      <div 
        ref={blueBox} 
        style={{ 
          boxSizing:"border-box", 
          height: '40%', 
          width: '80%',
          background: "darkBlue", 
          color: "#fefefe", 
          padding: 20,
          overflow: "auto"
        }}
      >  
        {Object.keys(blueDimensions).map(key => <Fragment key={`blue-measuerment-${key}`}>{key}: {blueDimensions[key]}<br /></Fragment>)}
      </div>
    </div>
  );
}

export default App;
