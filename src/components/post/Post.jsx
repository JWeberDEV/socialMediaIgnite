import styles from "./Post.module.css";
import Comment from "../comment/Comment.jsx";
import user from "../../assets/images/avatar.jpg";
import Avatar from "../avatar/avatar";

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={user} />
          <div className={styles.authorInfo}>
            <strong>Josias Weber</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="13 de Agosto ás 15:43h" dateTime="2025-08-13 15:43:17">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          {" "}
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
