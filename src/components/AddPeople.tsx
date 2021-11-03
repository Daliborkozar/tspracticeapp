import React, { useState, ChangeEvent } from "react";
import Button from "@mui/material/Button";

const AddPeople = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    url: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
     
  };
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="age"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="url"
        value={input.url}
        name="url"
        onChange={handleChange}
      />
      <textarea
        placeholder="note"
        value={input.note}
        name="note"
        onChange={handleChange}
      />
      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default AddPeople;
