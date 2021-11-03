import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddPeople from "./components/AddPeople";

export interface IState {
  people: { name: string; url: string; age: number; note?: string }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    { name: "Lebron james", url: "",age: 35, note: 'blablabla' },{name: "Lebron james", url: "",age:34}
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddPeople />
    </div>
  );
}

export default App;
