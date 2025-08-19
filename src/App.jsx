import "./css/global.css";
import Header from "./components/header/Header.jsx";
import Post from "./components/post/Post.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://avatars.githubusercontent.com/u/89999437?v=4",
      name: "Josias Weber",
      role: "CEO @ Loopware",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no n8n, evento da Rocketseat. O nome do projeto é LoopRobot 🚀",
      },
      { type: "link", content: "👉 weber.template/n8n" },
      { type: "hashtag", content: "#novoprojeto" },
      { type: "hashtag", content: "#nlw" },
      { type: "hashtag", content: "#rocketseat" },
    ],
    publishedAt: new Date("2025-08-13 15:43:17"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://avatars.githubusercontent.com/u/85715765?v=4",
      name: "Filipe Brochier",
      role: "Developer @ Loopware",
    },
    content: [
      { type: "paragraph", content: "Opa e aí!!" },
      {
        type: "paragraph",
        content:
          "Estamos iniciando um novo programa de treinamento, para futuras contratações 🚀",
      },
      { type: "link", content: "👉 caetano.ceo/loopwareTreinamentos" },
      { type: "hashtag", content: "#loopware" },
    ],
    publishedAt: new Date("2025-08-18 12:39:42"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
