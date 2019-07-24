import React, { useState } from "react";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [member, setMember] = useState("");

  return (
    <div className="App">
      Here's where the form should be
      <li>{member}</li>
      <Form member={member} setMember={setMember} />
    </div>
  );
}

export default App;
