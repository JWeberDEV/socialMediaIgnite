import styles from "./Sidebar.module.css";
import wallpaper from "../../assets/images/wallpaper.jpg";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={wallpaper} />
      <div className={styles.profile}>
        <strong>Eneas Carneiro</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
