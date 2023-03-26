import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Navbar, Posts } from "./components/index";

const App = () => {

  // Declaração dos states que serão utilizados por todo o projeto
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  // Criação das funções que puxarão os dados do JSON
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

  // Execução das funções para efetivamente puxar os dados
  useEffect(() => {
    apiGetPosts();
    apiGetComments();
  }, []);

  return (
    <div className="app__fetch">
      <Navbar></Navbar>

      <Posts posts={posts} comments={comments}></Posts>
    </div>
  );
};

export default App;
