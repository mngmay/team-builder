import React, { useState, useEffect } from "react";

const Form = props => {
  const { addMember, memberToEdit, editMember } = props;
  const [member, setMember] = useState({
    name: "Name",
    email: "Email",
    role: "Role"
  });

  console.log(member);

  function handleChange(event) {
    const updatedMember = {
      ...member,
      [event.target.name]: event.target.value
    };

    setMember(updatedMember);
  }

  function handleSubmit(event) {
    const add = addMember;
    add(member);
    setMember({
      name: "Name",
      email: "Email",
      role: "Role"
    });
    event.preventDefault();
    console.log("member", member);
  }

  useEffect(() => {
    if (memberToEdit) {
      setMember(memberToEdit);
    }
  }, [memberToEdit]);

  function editPerson(event) {
    const edit = editMember;
    edit(member);
    setMember({
      name: "Name",
      email: "Email",
      role: "Role"
    });
    console.log("edited");
    event.preventDefault();
  }

  if (memberToEdit) {
    return (
      <form onSubmit={editPerson}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={member.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={member.email}
            onChange={handleChange}
          />
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            placeholder="Enter your role"
            value={member.role}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={member.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={member.email}
            onChange={handleChange}
          />
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            placeholder="Enter your role"
            value={member.role}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
};

export default Form;
