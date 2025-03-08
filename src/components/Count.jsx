import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/counterSlice";
import { add } from "../redux/postsSlice";

const Count = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <button
        onClick={() => {
          dispatch(increment());
          fetch(`https://jsonplaceholder.typicode.com/posts/${count + 1}`)
            .then((response) => response.json())
            .then((data) => dispatch(add(data)));
        }}>
        Count is {count}
      </button>
    </div>
  );
};

export default Count;
