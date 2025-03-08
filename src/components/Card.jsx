const Card = ({ name, isVisited, children, imgUrl }) => {
  return (
    <div className="rounded-md bg-zinc-950">
      <img src={imgUrl} alt={name} />
      <div className="flex flex-col p-4">
        <h2 className="text-2xl text-white font-bold">{name}</h2>
        <p className="text-gray-500">{children}</p>
        <span className="text-white">
          {isVisited ? "visitata ✔" : "non visistata ❌"}
        </span>
      </div>
    </div>
  );
};

export default Card;
