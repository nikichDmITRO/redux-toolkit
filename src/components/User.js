import { useDispatch } from "react-redux/es/exports";
import { setFirstName,setLastName } from "../feuters/user/userSlice";
import FirstName from "./FirstName";
import LastName from "./LastName";
const User = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => dispatch(setFirstName(e.target.value))}
      />
      <FirstName />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => dispatch(setLastName(e.target.value))}
      />
      <LastName />
    </div>
  );
};

export default User;
