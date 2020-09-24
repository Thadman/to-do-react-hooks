import React from "react";

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export default function Todo() {
  // setting state with useState, passing in the initial value to it. and area ble ti update state with the setter function.
  const [todo, setToDo] = React.useState([]);
  const [input, setInput] = React.useState("");

  const handleSubmit = () => {
    setToDo((todo) =>
      todo.concat({
        text: input,
        id: generateId(),
      })
    );
    // resetting state
    setInput("");
  };

  // to remove the todo item using the id, making sure to delete the correct one
  const removeTodo = (id) => setToDo((todo) => todo.filter((t) => t.id !== id));

  return (
    <div>
      <input
        type="text"
        placeholder="Add Something"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {/* mapping through the items and displaying them on the screen, and passing the id as the unique ket identifier */}
        {todo.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
