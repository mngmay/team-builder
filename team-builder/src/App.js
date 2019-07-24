import React, { useState } from "react";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  return (
    <div className="App">
      Here's where the form should be
      <li>Team Members will go here</li>
      <Form member={member} setMember={setMember} />
    </div>
  );
}

export default App;
