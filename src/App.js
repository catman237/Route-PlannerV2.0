import "./App.scss";
import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
import RouteContainer from "./Components/RouteContainer";


function App() {
  return (
    <div className="App">
      <Header />
      <InputForm />
      <RouteContainer />
    </div>
  );
}

export default App;
