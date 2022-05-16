import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="hero h-screen flex flex-col">
      <Header/>
      <Home/>
      </div>
    </div>
  );
}

export default App;
