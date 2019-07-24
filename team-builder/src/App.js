import React, { useState } from "react";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  function addMember(member) {
    setMembers([...members, member]);
  }
  console.log(memberToEdit);

  function editMember(member) {
    const index = members.indexOf(memberToEdit);
    setMemberToEdit();
    console.log(index);
    return setMembers(
      members.map((person, i) => {
        if (i === index) {
          return (person = member);
        } else {
          return person;
        }
      })
    );
  }

  return (
    <div className="App">
      Here's where the form should be
      <Form
        addMember={addMember}
        memberToEdit={memberToEdit}
        editMember={editMember}
      />
      <div>
        {members.map(person => {
          return (
            <div className="team-member">
              <li>
                Name: {person.name} Email: {person.email} Role: {person.role}
              </li>
              <button onClick={() => setMemberToEdit(person)}>Edit</button>
              {console.log("memberToEdit", memberToEdit)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
