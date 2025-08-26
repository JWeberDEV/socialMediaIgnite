import styles from "./Post.module.css";
import Comment from "../comment/Comment";
import Avatar from "../avatar/Avatar";
import { ptBR } from "date-fns/locale/pt-BR";
import { format, formatDistanceToNow } from "date-fns";
import { useState, type FormEvent } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link" | "hashtag";
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({post}: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (arg: FormEvent) => {
    arg.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentInvalid = (e: React.InvalidEvent<HTMLTextAreaElement>) => {
    e.currentTarget.setCustomValidity("O campo é obrigatório");
    e.currentTarget.setCustomValidity("");
  };

  const deleteComment = (arg: string) => {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== arg;
    });
    setComments(commentsWithoutDeletedOne);
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted.toString()}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow.toString()}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map(line => {
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
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
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
