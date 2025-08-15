import styles from "./Sidebar.module.css";
import wallpaper from "../../assets/images/wallpaper.jpg";
import user from "../../assets/images/avatar.jpg";
import Avatar from "../avatar/avatar";
import { LuPencilLine } from "react-icons/lu";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={wallpaper} />
      <div className={styles.profile}>
        <Avatar src={user} hasBorder/>
        <strong>Josias Weber</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <LuPencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
