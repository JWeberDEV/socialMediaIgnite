import styles from "./Avatar.module.css";

interface AvatarProps {
  hasBorder?: boolean;
  src?: string;
  alt?: string;
}

export default function Avatar(props: AvatarProps) {
  const { hasBorder = true, src } = props;
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="Avatar"
    />
  );
}
