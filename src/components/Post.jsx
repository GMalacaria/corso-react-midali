const Post = ({ userId, title, body }) => {
  return (
    <div className="bg-slate-400 rounded-lg p-3">
      <p className="text-red-300 mb-2">userId: {userId}</p>
      <h2 className="text-xl mb-3">{title}</h2>
      <p className="text-gray-800">{body}</p>
    </div>
  );
};

export default Post;
