
import './App.css'
import Button from './Button';
function App() {
  function clicked(){
    console.log("clicked");
  }

  return (
    <>
     <Button text="hello" clicked={clicked} ></Button>
    </>
  )
}

export default App;
