import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/Jefferzom.png" />
          <div className={styles.authorInfo}>
            <strong>Jefferzom</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time title="10 de Maio às 20:22h" dateTime="2023-05-10 20:22:13">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>Gostaria de avisar que estamos chegando ao fim do projeto. Estamos de parabéns e foi um grande prazer trabalhar com vocês!</p>
        <p>Clique no link abaixo para conferir e não esqueça de compartilhar esta nossa vitória!</p>
        <p>👉 {'  '} <a href="#">investidor-inteligente.com</a> </p>
        <p> 
          <a href="#">#lançamento</a> {'  '}
          <a href="#">#consultoria</a> {'  '}
          <a href="#">#investimentos</a> {'  '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}