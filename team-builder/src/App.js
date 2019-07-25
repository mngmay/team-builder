import React, { useState } from "react";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState();

  function addMember(member) {
    setMembers([...members, member]); //setMembers to existing array + new member added
  }
  console.log(memberToEdit);

  function editMember(member) {
    const index = members.indexOf(memberToEdit);
    setMemberToEdit(); //resets setMember for the next check
    console.log(index);
    return setMembers(
      members.map((person, i) => {
        if (i === index) {
          return member; //sets new state of member
        } else {
          return person; //returns the person already there
        }
      })
    );
  }

  return (
    <div className="App">
      <h1>Team Information</h1>
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
