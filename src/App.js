import React from "react";
import "./App.css";
//import Todolist from "./components/Todolist";
import FormComp from "./components/TodoForm";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

export default function App() {
  const [input, setInput] = React.useState({ desc: "", date: "" });
  const [todos, setTodos] = React.useState([]);

  const deleteTodo = event => {
    setTodos(todos.filter((_, i) => i !== Number(event.target.id)));
  };

  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput({ desc: "", date: "" });
  };

  const inputChanged = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const columns = [
    {
      Header: "Description",
      accessor: "desc"
    },
    {
      Header: "Date",
      accessor: "date"
    },
    {
      Cell: ({ index }) => (
        <button id={index} onClick={deleteTodo}>
          Delete
        </button>
      ),
      filterable: false,
      sortable: false,
      width: 80
    }
  ];

  return (
    <div className="App">
      <header className="App-header">TodoList</header>
      <FormComp inputChanged={inputChanged} input={input} addTodo={addTodo} />
      <ReactTable data={todos} columns={columns} filterable="true" />
    </div>
  );
}