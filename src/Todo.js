import React from "react";

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export default function Todo() {
  const [todo, setToDo] = React.useState([]);
  const [input, setInput] = React.useState("");

  const handleSubmit = () => {
    setToDo((todo) =>
      todo.concat({
        text: input,
        id: generateId(),
      })
    );

    setInput("");
  };

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
