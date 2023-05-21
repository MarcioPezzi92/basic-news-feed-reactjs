import { Header } from "./components/header";

// styles
import styles from "./App.module.css"
import "./global.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/MarcioPezzi92.png",
      name: "Marcio Pezzi",
      profession: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir uma nova atualização no meu portfólio. Confira no link abaixo:' },
      { type: 'link', content: 'https://github.com/MarcioPezzi92' },
    ],
    publishedAt: new Date("2023-05-10T14:48:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Jefferzom.png",
      name: "Jefferson Toledo",
      profession: "Front-end Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Ninguém quer saber de nada... Cadê? Vai rolar o churrasco quando?' },
      { type: 'link', content: 'https://github.com/Jefferzom' },
    ],
    publishedAt: new Date("2023-05-10T14:48:00")
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => { 
            return (
              <Post
                key={post.id} 
                author={ post.author }
                content={ post.content }
                publishedAt={ post.publishedAt }
              />
            ) 
          }) }
        </main>
      </div>
    </div>
  );
}

export default App;
