/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import axios from "axios";

export const Home = () => {
  const [posts, setPosts] = React.useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};
