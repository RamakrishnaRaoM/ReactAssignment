import "./App.css";
import Person from "./person";
function App() {
  const name = "ramakrishna m";
  const age = 21;
  return (
    <>
      <Person name={name} age={age}></Person>
    </>
  );
}

export default App;
