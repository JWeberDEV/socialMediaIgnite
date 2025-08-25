import styles from "./Header.module.css";
import logo from "../../assets/images/ignite_logo.svg";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Logotipo Ignite" />
        <strong>Iginite Feed</strong>
      </header>
    </>
  );
}