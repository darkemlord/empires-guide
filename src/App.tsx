import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [greeting, setGreeting] = useState<string>('hello papis');

  return(
    <div className="App">
      <Navbar greeting={greeting} setGreeting={setGreeting}/>
    </div>
  );
}

export default App;
