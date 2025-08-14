import styles from "./Comment.module.css";
import avatar from "../../assets/images/avatar.jpg";
import { BiTrash } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";

export default function Comment() {
  return (
    <div className={styles.comment}>
      <img src={avatar} alt="avatar" />

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
          <p>Muito bom Devon, parabéns!! 👏👏</p>
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
