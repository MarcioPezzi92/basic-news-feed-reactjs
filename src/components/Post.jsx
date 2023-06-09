import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";
import { useState } from "react";


export function Post({ author, content, publishedAt }) {

  const [comments, setComments] = useState([ 'Post legal, hein?']);

  const [newCommentText, setNewCommentText] = useState('');

  const formattedPublishedAt = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});

  const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório!');
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (

    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.profession}</span>
          </div>
        </div>

        <time title={ formattedPublishedAt } dateTime={publishedAt.toISOString()}> 
          {publishedAtRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={line.content}><a href={line.content} target="_blank">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Feedback</strong>

        <textarea 
          name="comment" 
          placeholder="Deixe seu comentário" 
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}> Publicar </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        { 
          comments.map(comment => {
            return (
              <Comment 
                content={comment} 
                key={comment} 
                onDeleteComment={deleteComment} 
              />
            )
          })
        }
      </div>

    </article>
  )
}