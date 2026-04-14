import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Todo } from "./types";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([...todos, { id: idRef.current++, content: text }]);
  };

  const onClickDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>To Do</h1>
      <Editor onClickAdd={onClickAdd}>
        <div>child</div>
      </Editor>
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
