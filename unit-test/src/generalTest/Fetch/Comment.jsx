import React from "react";
import axios from "axios";

const Comment = () => {
  const [comment, setCommet] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      const comments = await axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .catch((err) => {
          console.log(err);
        });
      setCommet(comments.data);
    };

    fetch();
  }, []);

  return (
    <div>
      <h4>Fetching comment</h4>
      <p>Getting comment from the server</p>

      <ul>
        {comment.map((comment, index) => {
          return (
            <p key={index} data-testid="comment">
              {comment?.name}
            </p>
          );
        })}
      </ul>
    </div>
  );
};

export default Comment;
