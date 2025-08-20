import styles from "./Post.module.css";
import Comment from "../comment/Comment.jsx";
import Avatar from "../avatar/avatar";
import ptBR from "date-fns/locale/pt-BR";
import { format, formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";

export default function Post(props) {
  const { author, publishedAt, content } = props;
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (e) => {
    e.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const deleteComment = (arg) => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== arg
    })
    setComments(commentsWithoutDeletedOne);
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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          } else {
            return (
              <a key={line.content} href="#" style={{ marginRight: "0.75rem" }}>
                {line.content}
              </a>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
