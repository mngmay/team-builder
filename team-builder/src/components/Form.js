import React, { useState } from "react";

const Form = props => {
  const { member, setMember } = props;

  return (
    <form>
      <fieldset>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={member.name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={member.email}
        />
        <label htmlFor="role">Role</label>
        <input
          type="text"
          name="role"
          placeholder="Enter your role"
          value={member.role}
        />
      </fieldset>
    </form>
  );
};
export default Form;
