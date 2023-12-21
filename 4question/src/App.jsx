import "./App.css";
import List from "./List";

function App() {
  const arr = ["Rama", "Krishna", "Rao"];
  return (
    <>
      <List list={arr}></List>
    </>
  );
}

export default App;
