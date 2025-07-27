import { Link } from "react-router-dom";
import { calculateDate } from "../../utils/calcDate";

const BIRH_DATE = "1997-12-25";
const START_WORK_DATE = "2018-08-01";

export const Content = () => {
  return (
    <main>
      <div>
        <div>frontend разработчик</div>
        <div>{calculateDate(BIRH_DATE).years} лет</div>
        <div>Опыт ~{calculateDate(START_WORK_DATE).years} лет</div>
      </div>
      <div>
        <div>
          HTML, CSS, JavaScript, TypeScript, React, OpenLayer, Vite, Nest,
          Docker
        </div>
        <br />
        <Link to={"/portfolio"} className="links">
          Проекты
        </Link>
        <Link to={"/career"} className="links">
          Карьера
        </Link>
      </div>
    </main>
  );
};
