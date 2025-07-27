import { Social } from "../Social/Social";

export const Footer = () => {
  const socials = [
    { title: "cv", link: "./cv.pdf" },
    { title: "telegram", link: "https://t.me/jr_matviyuk" },
    { title: "github", link: "https://github.com/VladMatviyuk" },
    { title: "codepen", link: "https://codepen.io/VladMatviyuk" },
  ];

  return (
    <footer>
      {socials.map((social) => (
        <Social key={social.title} title={social.title} link={social.link} />
      ))}
    </footer>
  );
};
