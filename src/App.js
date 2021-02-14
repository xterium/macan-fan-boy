import logo from "./logo.svg";
import "./App.scss";

import Booklist from "./components/Booklist";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Booklist />
    </div>
  );
};

export default App;
