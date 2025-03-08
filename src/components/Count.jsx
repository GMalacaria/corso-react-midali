import { useEffect, } from "react";

const Count = ({ count, setCount }) => {

  useEffect(() => {
    document.title = `Count = ${count}`;
  }, [count]);

  return (
    <div className="card">
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Count is {count}
      </button>
    </div>
  );
};

export default Count;
