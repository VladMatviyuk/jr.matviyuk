import { IProject } from '@/features';

export const projects: IProject[] = [
  {
    imageSrc: '/projects/acf.png',
    links: [
      {title: 'WEB: alimin can flip', link: 'https://vladmatviyuk-beer-flip-be4a.twc1.net/'},
      {title: 'Telegram: alimin can flip', link: 'https://t.me/beer_flip_bot'},
    ],
    description: 'Простая игра найди пару. Разрабатывалась в образовательных целях, для ознакомления работы с telegram-app',
    technologies: ['React', 'TypeScript', 'Vite', 'TelegramApp'],
  },
  {
    imageSrc: '/projects/wind.png',
    links: [
      {title: 'Weather', link: 'https://vladmatviyuk-weatherbypoligon-d72f.twc1.net/'},
    ],
    description: 'Демо возможно подключения WindyApi - для просмотра погоды на ближайшее 5 дней',
    technologies: ['React', 'TypeScript', 'Vite', 'WindyApi'],
  }
]