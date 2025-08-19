import styles from "./Comment.module.css";
import user from "../../assets/images/avatar.jpg";
import Avatar from "../avatar/avatar";
import { BiTrash } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";

export default function Comment(props) {
  const { content } = props;
  return (
    <div className={styles.comment}>
      <Avatar src={user} hasBorder={false}/>
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
            <button title="Deletar comentário">
              <BiTrash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <FaThumbsUp /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
