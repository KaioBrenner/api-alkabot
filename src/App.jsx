import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Navbar, Posts } from "./components/index";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  const apiGetPosts = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      setPosts(res.data);
    });
  };

  const apiGetComments = () => {
    axios(`https://jsonplaceholder.typicode.com/comments`).then((res) => {
      setComments(res.data);
    });
  };

  const apiGetUsers = () => {
    axios(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    apiGetPosts();
    apiGetComments();
    apiGetUsers();
  }, []);

  return (
    <div className="app__fetch">
      <Navbar></Navbar>

      <Posts posts={posts} comments={comments} users={users}></Posts>
    </div>
  );
};

export default App;
