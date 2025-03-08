import { useEffect, useState } from "react";
import "./App.css";
import { AllCities } from "./constants/cities";
import Card from "./components/Card";
import CityForm from "./components/CityForm";
import Count from "./components/Count";
import Post from "./components/Post";
import UserForm from "./components/UserForm";
import { TestContext } from "./stores/TestContext";

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [cities, setCities] = useState(AllCities);

  const addCity = (city) => {
    setCities([...cities, city]);
  };

  useEffect(() => {
    if (count)
      fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
        .then((response) => response.json())
        .then((data) => setPosts([...posts, data]));
  }, [count]);

  return (
    <TestContext.Provider value={{ count, setCount }}>
      <Count></Count>
      <div className="grid grid-cols-4 gap-5 mb-5">
        {posts.map((post) => (
          <Post
            key={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}></Post>
        ))}
      </div>
      <CityForm addCity={addCity}></CityForm>
      <div className="grid grid-cols-4 gap-5 mb-5">
        {cities
          //  .filter((city) => city.isVisited)
          .map((city) => (
            <Card
              name={city.name}
              key={city.id}
              isVisited={city.isVisited}
              imgUrl={city.imgUrl}>
              {city.description}
            </Card>
          ))}
      </div>
      <UserForm></UserForm>
    </TestContext.Provider>
  );
}

export default App;
