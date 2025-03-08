import "./App.css";
import Card from "./components/Card";
import CityForm from "./components/CityForm";
import Count from "./components/Count";
import Post from "./components/Post";
import UserForm from "./components/UserForm";
import { useSelector } from "react-redux";

function App() {
  const cities = useSelector((state) => state.cities.value);
  const posts = useSelector((state) => state.posts.value);

  return (
    <>
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
      <CityForm></CityForm>
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
    </>
  );
}

export default App;
