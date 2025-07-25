import { Header } from "../components/Header/Header";

export const PortfolioPage = () => {
  return (
    <div>
      <Header>Портфолио</Header>
      <main>
        <ul>
          <li>
            <a
              href="https://vladmatviyuk-beer-flip-be4a.twc1.net/"
              target="_blank"
            >
              BeerFleep
            </a>
            &nbsp;-&nbsp;простая игра найди пару в пиксельном стиле.{" "}
            <span className="tch">React, TS, Vite.</span>
          </li>
          <li>
            <a href="http://62.113.41.218:3001/" target="_blank">
              5frm
            </a>
            &nbsp;-&nbsp;карточки для повторения веб-технологий.{" "}
            <span className="tch">React, TS, Vite.</span>
          </li>

          <li>
            <a
              href="https://vladmatviyuk-weatherbypoligon-d72f.twc1.net/"
              target="_blank"
            >
              WeatherApp
            </a>
            &nbsp;-&nbsp;прогноз погоды по координатам.{" "}
            <span className="tch">OpenLayer, React, TS, Vite.</span>
          </li>
        </ul>
      </main>
    </div>
  );
};
