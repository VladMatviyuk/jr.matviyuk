import { Header } from '../components/Header/Header';

export const PortfolioPage = () => {
  return (
    <div>
      <Header>Проекты</Header>
      <main>
        <ul>
          <li>
            <a href="https://beerflip.matviyuk.online/" target="_blank">
              BeerFleep
            </a>
            &nbsp;-&nbsp;простая игра найди пару в пиксельном стиле.{' '}
            <span className="tch">React, TS, Vite.</span>
          </li>
          <li>
            <a href="https://flash.matviyuk.online/" target="_blank">
              WebFlash
            </a>
            &nbsp;-&nbsp;карточки для повторения веб-технологий.{' '}
            <span className="tch">React, TS, Vite.</span>
          </li>

          <li>
            <a
              href="https://vladmatviyuk-weatherbypoligon-d72f.twc1.net/"
              target="_blank"
            >
              WeatherApp
            </a>
            &nbsp;-&nbsp;прогноз погоды по координатам.{' '}
            <span className="tch">OpenLayer, React, TS, Vite.</span>
          </li>
        </ul>
      </main>
    </div>
  );
};
