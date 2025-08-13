import "./css/global.css";
import Header from "./components/header/Header.jsx";
import Post from "./components/post/Post.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}

export default App;
