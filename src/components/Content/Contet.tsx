import { Link } from "react-router-dom";
import { calculateAge } from "../../utils/calcAge";

const BIRH_DATE = "1997-12-25";

export const Content = () => {
  return (
    <main>
      <div>
        <div>frontend разработчик</div>
        <div>{calculateAge(BIRH_DATE)} лет</div>
        <div>Опыт 6 лет</div>
      </div>
      <div>
        <div>
          HTML, CSS, JavaScript, TypeScript, React, OpenLayer, Vite, Nest,
          Docker
        </div>
        <br />
        <Link to={"/portfolio"} className="links">
          Портфолио
        </Link>
        <Link to={"/career"} className="links">
          Карьера
        </Link>
      </div>
    </main>
  );
};
