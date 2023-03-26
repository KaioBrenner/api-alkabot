import React, { useEffect, useState } from "react";
import axios from "axios";
import avatar from "../../assets/default-avatar.png";
import "./PostItem.css";

const PostItem = ({ item, index }) => {
  const [users, setUsers] = useState([]);
  const { userId, title, body } = item;

  const apiGetUsers = () => {
    axios(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    apiGetUsers();
  }, []);

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
