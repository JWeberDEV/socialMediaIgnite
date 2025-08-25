import styles from "./Comment.module.css";
import user from "../../assets/images/avatar.jpg";
import Avatar from "../avatar/Avatar";
import { BiTrash } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";
import { useState } from "react";

export default function Comment(props) {
  const { content, onDeleteComment } = props;

  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };

  return (
    <div className={styles.comment}>
      <Avatar src={user} hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Josias Weber</strong>
              <time
                title="13 de Agosto ás 15:43h"
                dateTime="2025-08-13 15:43:17"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <BiTrash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <FaThumbsUp /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
