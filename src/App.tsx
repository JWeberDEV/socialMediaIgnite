import "./css/global.css";
import { Post } from "./components/post/Post";
import type { PostType } from "./components/post/Post";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import styles from "./App.module.css";

const posts: PostType[] = [
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
            console.log(post.content);
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
