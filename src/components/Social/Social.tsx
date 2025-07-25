import type { FC } from "react";

interface Props {
  readonly title: string;
  readonly link: string;
}

export const Social: FC<Props> = ({ title, link }) => {
  return (
    <a href={link} title={title} target="_blank">
      .{title}
    </a>
  );
};
