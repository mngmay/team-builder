import React, { useState, useEffect } from "react";

const Form = props => {
  const { addMember, memberToEdit, editMember } = props;
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
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
      name: "",
      email: "",
      role: ""
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
      name: "",
      email: "",
      role: ""
    });
    console.log("edited");
    event.preventDefault();
  }

  if (memberToEdit) {
    return (
      <form onSubmit={editPerson}>
        <fieldset>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={member.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={member.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              placeholder="Enter your role"
              value={member.role}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={member.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={member.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              placeholder="Enter your role"
              value={member.role}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
};

export default Form;
