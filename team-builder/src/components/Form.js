import React, { useState } from "react";

const Form = props => {
  const { addMember } = props;
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
    event.preventDefault();
    console.log("member", member);
  }

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
};

export default Form;
