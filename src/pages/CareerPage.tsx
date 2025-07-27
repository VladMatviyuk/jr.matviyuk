import { Header } from "../components/Header/Header";

export const CareerPage = () => {
  const steps = [
    {
      dates: "август 2018 - август 2019",
      company: "Hexelsoft",
      info: "Разработка MVP приложений. Поддержка легаси кода. Исправление багов. Ревью.",
      techs: "HTML, CSS, JS, TS, JQuery, React, Angular, Ionic",
    },
    {
      dates: "сентябрь 2019 - декабрь 2019",
      company: "РИТ",
      info: "Разработка и поддержка веб-сайтов.",
      techs: "HTML, CSS, JQuery, Gulp, Bootstrap, React, Bitrix",
    },
    {
      dates: "сентябрь 2020 - сентябрь 2021",
      company: "ВИСТА-МЕД",
      info: "Поддержка и развитие веб приложений компании. Разработка MVP приложений с нуля. Рефакторинг легаси кода. Исправление багов.",
      techs:
        "HTML, CSS, JS, JQuery, RequireJS, AngularJS, Webpack, React, PHP, MySQL, NodeJS",
    },
    {
      dates: "сентябрь 2021 - февраль 2023",
      company: "Тензор",
      info: "Разрабатка интерфейса для системы управления транспортом Saby TMS: Доставки, ЭПЛ (электронный путевой лист), разработка функционала виджета карты. Поддержка легаси кода. Ревью.",
      techs: "TypeScript, Wasaby, MapLibre, Less, Jest, React",
    },
    {
      dates: "март 2023 - май 2024",
      company: "ЦИТ БАРС",
      info: "Разработкой frontend и backend части системы Глобарс.",
      techs: "Angular, TypeScript, RxJs, Express, OpenLayers, MongoDB",
    },
    {
      dates: "май 2024 - ...",
      company: "АО ЭДС",
      info: "Разработка информационных систем, обеспечивающих хранение и предоставление больших массивов медиа и геоданных. Реализация нового функицонала. Ревью. Проведение собеседований.",
      techs: "React, TypeScript, Vite, MobX, OpenLayer, WebSocket, FSD",
    },
  ];
  steps.reverse();

  return (
    <div>
      <Header>Карьера</Header>
      <main>
        <ul>
          {steps.map((step) => {
            return (
              <li>
                <div className="career-step">
                  <div>{step.company}</div>
                  <div className="date">{step.dates}</div>
                  <div>{step.info}</div>
                  <div className="tch">{step.techs}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};
