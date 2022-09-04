import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../feuters/posts/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts=useSelector(state=>state.post.posts)
  return (
    <div>
      <button onClick={() => dispatch(getPosts())}>GET</button>
      {posts?.map((post)=><div key={post.id}>{post.id}{post.title}</div>)}
    </div>
  );
};

export default Posts;
