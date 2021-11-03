import "./App.scss";
import Header from "./Components/Header";
import RoutePlanner from "./Components/RoutePlanner";
import LegWrapper from "./Components/LegWrapper";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <RoutePlanner />
      <Footer />
    </div>
  );
}

export default App;
