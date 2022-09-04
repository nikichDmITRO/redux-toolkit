import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../feuters/todo/todoSlice";
import { useSelector } from "react-redux";
import TodoText from "./TodoText";
const Todos = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");

  const addTodoHandler = () => {
    const todoUp = {
      id: v4(),
      text: todoValue,
    
    };
    dispatch(addTodo(todoUp));
    setTodoValue("");
  };
  const todotext = useSelector((state) => state.todo.todos);
  console.log(todotext)
  return (
    <div>
      <input
        type="text"
        value={todoValue}
        placeholder="Type something..."
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button onClick={() => addTodoHandler()}>Добавить задачу </button>
      <div>
        {todotext.map((text)=><TodoText key={text.id} text={text.text} id={text.id}/>)}
      </div>
    </div>
  );
};

export default Todos;
