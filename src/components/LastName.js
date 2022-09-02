import { useSelector } from "react-redux";

const LastName = () => {
  const nameLast = useSelector((state) => state.user.lastName);
  return <div>Фамилия:{nameLast}</div>;
};

export default LastName;
