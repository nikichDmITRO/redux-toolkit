import "./App.css";
import Posts from "./components/Posts";
import Todos from "./components/Todos";

import User from "./components/User";

function App() {
  return (
    <div className="App">
      <User />
      <Todos/>
      <Posts/>
    </div>
  );
}

export default App;
