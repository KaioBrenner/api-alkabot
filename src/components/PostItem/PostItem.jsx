import React, { useEffect, useState } from "react";
import axios from "axios";
import avatar from "../../assets/default-avatar.png";
import "./PostItem.css";

const PostItem = ({ item, index }) => {

  // Declaração do estado de usuários
  const [users, setUsers] = useState([]);
  const { userId, title, body } = item;

  // Criação da função para puxar os dados dos usuários
  const apiGetUsers = () => {
    axios(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setUsers(res.data);
    });
  };

  // Execução da função que puxa os dados dos usuários
  useEffect(() => {
    apiGetUsers();
  }, []);

  // Tratamento do JSON para retornar o nome do usuário que realizou o post
  const userName = JSON.stringify(users[userId - 1]?.name)?.replace(/"/g, "");

  return (
    <div className="app__postItem">
      <li key={index} className="app__postItem-post">
        <div className="app__postItem-post_img">
          <img src={avatar} alt="Avatar do usuário" />
        </div>
        <div className="app__fetch-post_item-content">
          <p>{userName}</p>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      </li>
    </div>
  );
};

export default PostItem;
