import "./App.css";
import {useState} from "react";

function App() {
  const [greetingInput, setGreetingInput] = useState("")
  const [greeting, setGreeting] = useState("Greeting Message");
  const handleOnclick = (()=>{
    setGreeting(greetingInput);
  });
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input 
          id="greeting-message" 
          type="text" 
          value={greetingInput}
          onChange={(e)=>{
            setGreetingInput(e.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button onClick={handleOnclick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
