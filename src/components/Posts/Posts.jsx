import React from "react";
import PostItem from "../PostItem/PostItem";
import Comments from "../Comments/Comments";
import "./Posts.css";

const Posts = ({ posts, comments }) => {
  return (
    <div className="app__posts container">
      <h1>Posts</h1>

      <ul>
        {/* .map para rodar todo o array de objetos "posts" para retornar os posts para a lista */}
        {posts.map((item, index) => {
          return (
            <li className="app__posts-card" key={index}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                  >
                    <PostItem
                      item={item}
                      index={index}
                    ></PostItem>
                  </button>
                </h2>
                <div className="comments-section">
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse comments-collapse"
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body comments-div">
                      <Comments comments={comments} postId={item.id}></Comments>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
