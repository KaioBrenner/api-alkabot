import React from "react";
import avatar from "../../assets/default-avatar.png";
import "./Comments.css";

const Comments = ({ comments, postId }) => {
  return (
    <>
      <ul className="app__comments">
        {/* .map para rodar todo o array de objetos "comments" para retornar os comentários que estão no JSON */}
        {comments.map((item, index) => {
          const { name, body, email } = item;

          // Condicional para verificar quais os comentários que são associados a cada post
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
