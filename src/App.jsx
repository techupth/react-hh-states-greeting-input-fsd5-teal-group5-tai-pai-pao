import "./App.css";
import { useState } from 'react';

function App() {

  const [inputMessage,setInputMessage]=useState("")
  const [greetMessage, setGreetMessage]=useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{greetMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={(event) => setInputMessage(event.target.value)}/>
      </div>

      <div className="buttons">
        <button onClick={() => setGreetMessage(inputMessage)}>Update text</button>
      </div>
    </div>
  );
}

export default App;
