import React from "react";

export default function FormComp(props) {
  return (
    <div>
      <div className="inputfield">
        <label>Description: </label>
        <input
          name="desc"
          type="text"
          placeholder="Enter text"
          value={props.input.desc}
          onChange={props.inputChanged}
        />

        <label> Date: </label>
        <input
          name="date"
          type="date"
          value={props.input.date}
          onChange={props.inputChanged}
        ></input>
        <label> </label>
        <button onClick={props.addTodo}>Add</button>
      </div>
    </div>
  );
}