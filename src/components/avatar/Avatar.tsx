import type  { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export default function Avatar(props: AvatarProps) {
  const { hasBorder = true, ...rest } = props;
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...rest}
    />
  );
}
