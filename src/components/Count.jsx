import { useContext, useEffect } from "react";
import { TestContext } from "../stores/TestContext";

const Count = () => {
  const { count, setCount } = useContext(TestContext);

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
