import styles from "./Avatar.module.css";

export default function Avatar(props) {
  const { hasBorder = true, src } = props;
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="Avatar"
    />
  );
}
