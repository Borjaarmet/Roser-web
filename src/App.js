// import dependencies //
import { IntlProvider } from "react-intl";

// import components //
import Navbar from "./components/navbar/Navbar";

// import assets //
import "./App.css";

function App() {
  return (
    <IntlProvider>
      <div className="App">
        <Navbar />
        <h1>Roser Web</h1>
      </div>
    </IntlProvider>
  );
}

export default App;
