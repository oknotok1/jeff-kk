import "./App.css";
// import blank from "./images/blank.png";
import Header from "./components/Header";
import Oscillations from "./components/Oscillations";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <img src={blank} alt="blank" /> */}
      <Oscillations />
    </div>
  );
}

export default App;
