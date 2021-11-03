import React, { useState, ChangeEvent, FC, Dispatch } from "react";
import Button from "@mui/material/Button";
import { IState as Props } from "../App";
import { url } from "inspector";

interface IProps {
  people: Props["people"];
  // setPeople: Dispatch<React.SetStateAction<{
  //     name: string;
  //     url: string;
  //     age: number;
  //     note?: string | undefined;
  // }[]>>
  setPeople: Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddPeople: FC<IProps> = ({ people, setPeople }) => {
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
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      note: "",
      url: "",
    });
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
