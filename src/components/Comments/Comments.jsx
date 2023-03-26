import React from "react";
import avatar from "../../assets/default-avatar.png";
import "./Comments.css";

const Comments = ({ comments, postId }) => {
  return (
    <>
      <ul className="app__comments">
        {comments.map((item, index) => {
          const { name, body, email } = item;

          if (item.postId === postId) {
            return (
              <li key={index} className="app__comments-card">
                <div className="app__comments-card_img">
                  <img src={avatar} alt="Avatar do usuário" />
                </div>
                <div className="app__comments-card_content">
                  <a href={`mailto:${email}`}>{email}</a>
                  <h3>{name}</h3>
                  <p>{body}</p>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default Comments;
