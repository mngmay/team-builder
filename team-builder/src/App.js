import React, { useState } from "react";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [members, setMembers] = useState([]);

  function addMember(member) {
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      Here's where the form should be
      <Form members={members} setMembers={setMembers} addMember={addMember} />
      <div>
        {members.map(person => {
          return (
            <li>
              Name: {person.name} Email: {person.email} Role: {person.role}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;
