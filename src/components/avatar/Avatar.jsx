import avatar from "../../assets/images/avatar.jpg";
import styles from "./Avatar.module.css";

export default function Avatar() {
  return <img className={styles.avatar} src={avatar} alt="Avatar" />;
}
