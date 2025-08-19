import styles from "./Post.module.css";
import Comment from "../comment/Comment.jsx";
import Avatar from "../avatar/avatar";
import ptBR from "date-fns/locale/pt-BR";
import { format, formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";

export default function Post(props) {
  const { author, publishedAt, content } = props;
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComments] = useState(["Post Top!"]);

  const handleCreateNewComment = (e) => {
    e.preventDefault();

    let newCommenText = e.target.comment.value;
    console.log(newCommenText);

    setComments([...comments, newCommenText]);

    newCommenText = '';
  };

  return (
    <article className={styles.post} key={props.id}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted.toString()}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow.toString()}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          } else {
            return (
              <a href="#" style={{ marginRight: "0.75rem" }}>
                {line.content}
              </a>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea name="comment" placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
