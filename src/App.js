import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <h1 className="text-6xl">Welcome to tailwind pricing club</h1>
      <PricingOptions></PricingOptions>
    </div>
  );
}

export default App;
