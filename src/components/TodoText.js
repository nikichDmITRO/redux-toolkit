import { useDispatch } from "react-redux";
import { deletTodo } from "../feuters/todo/todoSlice";

const TodoText = ({text, id}) => {
  const dispatch=useDispatch()
  return (
    <div>
      {text}
      <button onClick={()=>dispatch(deletTodo(id))}>delet</button>
    </div>
  );
};

export default TodoText;
