import "./css/global.css";
import Header from "./components/header/Header.js";
import Post from "./components/post/Post.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/89999437?v=4",
      name: "Josias Weber",
      role: "CEO @ Loopware",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Um novo fluxo criado utilizando automação do n8n para atendimento automático no whatsapp. Dessa vez utilizando a Api meta Confira no link! 🚀",
      },
      { type: "link", content: "👉 weber.template/n8n" },
      { type: "hashtag", content: "#novofluxo" },
      { type: "hashtag", content: "#automação" },
      { type: "hashtag", content: "#loopware" },
    ],
    publishedAt: new Date("2025-08-13 15:43:17"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/85715765?v=4",
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
