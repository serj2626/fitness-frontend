interface IService {
  img?: string;
  title: string;
  value?: boolean;
}

interface IAbonementService {
  unlimited: IService;
  pool: IService;
  spa: IService;
  cosmetology: IService;
  yoga: IService;
  cycle: IService;
  dancing: IService;
  aqua_aerobics: IService;
}
interface IAbonement {
  title: string;
  description: string;
  price: number;
  period: number;
  services: IAbonementService;
}

export interface IReview {
  id: number;
  text: string;
  author: {
    name: string;
    avatar: string;
    date: string;
    platforma: string;
  };
  rating: number;
  company: {
    name: string;
    subName: string;
  };
}

export interface ICoach {
  id: number;
  img: string;
  name: string;
  position: string;
}

export const coaches: ICoach[] = [
  {
    id: 1,
    img: "/coaches/one.webp",
    name: "Анна Иванова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 2,
    img: "/coaches/second.jpeg",
    name: "Ирина Михайлова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 3,
    img: "/coaches/three.webp",
    name: "Алена Петрова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 4,
    img: "/coaches/four.jpeg",
    name: "Александра Зайцева",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 5,
    img: "/coaches/five.webp",
    name: "Ольга Никитина",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 6,
    img: "/coaches/six.webp",
    name: "Виктория Смирнова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 7,
    img: "/coaches/seven.jpg",
    name: "Алена Петрова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 8,
    img: "/coaches/eight.jpeg",
    name: "Алена Петрова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 9,
    img: "/coaches/nine.jpeg",
    name: "Алена Петрова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 10,
    img: "/coaches/ten.jpg",
    name: "Алена Петрова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 11,
    img: "/coaches/eleven.webp",
    name: "Алена Петрова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 12,
    img: "/coaches/twelve.webp",
    name: "Алена Петрова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 13,
    img: "/coaches/fourteen.webp",
    name: "Алена Петрова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 14,
    img: "/coaches/fiveteen.webp",
    name: "Алена Петрова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 15,
    img: "/coaches/sixteen.jpeg",
    name: "Алена Петрова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 16,
    img: "/coaches/seventeen.webp",
    name: "Алена Петрова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 17,
    img: "/coaches/eighteen.webp",
    name: "Алена Петрова",
    position: "Инструктор тренажерного зала",
  },
  {
    id: 18,
    img: "/coaches/nineteen.webp",
    name: "Алена Петрова",
    position: "Инструктор тренажерного зала",
  },
];

export const abonements: IAbonement[] = [
  {
    title: "Базовый",
    description: "Базовый абонемент",
    price: 18000,
    period: 9,
    services: {
      unlimited: {
        title: "Безлимитные посещения",
        value: true,
      },
      pool: {
        title: "Бассейн",
        value: true,
      },
      yoga: {
        title: "Йога",
        value: false,
      },
      spa: {
        title: "SPA",
        value: false,
      },
      cosmetology: {
        title: "Косметология",
        value: false,
      },
      cycle: {
        title: "Сайкл",
        value: false,
      },
      dancing: {
        title: "Танцы",
        value: false,
      },
      aqua_aerobics: {
        title: "Водная аэробика",
        value: false,
      },
    },
  },

  {
    title: "Профессионал",
    description: "Профессиональный абонемент",
    price: 32000,
    period: 12,
    services: {
      unlimited: {
        title: "Безлимитные посещения",
        value: true,
      },
      pool: {
        title: "Бассейн",
        value: true,
      },
      yoga: {
        title: "Йога",
        value: true,
      },
      spa: {
        title: "SPA",
        value: true,
      },
      cosmetology: {
        title: "Косметология",
        value: false,
      },
      cycle: {
        title: "Сайкл",
        value: false,
      },
      dancing: {
        title: "Танцы",
        value: false,
      },
      aqua_aerobics: {
        title: "Водная аэробика",
        value: false,
      },
    },
  },
  {
    title: "Эксперт",
    description: "Экспертский абонемент",
    price: 50000,
    period: 15,
    services: {
      unlimited: {
        title: "Безлимитные посещения",
        value: true,
      },
      pool: {
        title: "Бассейн",
        value: true,
      },
      yoga: {
        title: "Йога",
        value: true,
      },
      spa: {
        title: "SPA",
        value: true,
      },
      cosmetology: {
        title: "Косметология",
        value: true,
      },
      cycle: {
        title: "Сайкл",
        value: true,
      },
      dancing: {
        title: "Танцы",
        value: true,
      },
      aqua_aerobics: {
        title: "Водная аэробика",
        value: true,
      },
    },
  },
];

export const services: IService[] = [
  {
    img: "/services/gym.jpg",
    title: "Тренажерный зал",
  },
  {
    img: "/services/pool.png",
    title: "Бассейн",
  },
  {
    img: "/services/saicle.jpg",
    title: "Студия сайкла",
  },
  {
    img: "/services/yoga.jpg",
    title: "Студия йоги",
  },
  {
    img: "/services/spa.jpg",
    title: "SPA зона",
  },
  {
    img: "/services/aqva.jpg",
    title: "Аквааэробика",
  },
  {
    img: "/services/kosmetolog.png",
    title: "Косметология",
  },
  {
    img: "/services/dance.png",
    title: "Студия танцев",
  },
];

export const reviews: IReview[] = [
  {
    id: 1,
    author: {
      name: "Alex Sidorov",
      avatar: "/yandex.webp",
      platforma: "Яндекс",
      date: "12.12.2022",
    },
    rating: 4,
    text: "Достаточно хороший и удобный зал. Нет толп тренеров и народу, можно спокойно заниматься",
    company: {
      name: "DV",
      subName: "Fitness",
    },
  },
  {
    id: 2,
    author: {
      name: "Denis Kivanov",
      avatar: "/google.webp",
      platforma: "Google",
      date: "12.12.2022",
    },
    rating: 5,
    text: "Вежливый персонал. Хорошая парилка. Всё прекрасно, когда народа немного.",
    company: {
      name: "DV",
      subName: "Fitness",
    },
  },
  {
    id: 3,
    author: {
      name: "Olga Zamaylova",
      avatar: "/yandex.webp",
      platforma: "Яндекс",
      date: "12.12.2022",
    },
    rating: 5,
    text: "Хороший удобный зал. Тренер Максим профессионал своего дела. Очень любезные работники. Менеджер Ани очень помогла при покупке абонемента. Чисто, уютно. Хорошая обстановка",
    company: {
      name: "DV",
      subName: "Fitness",
    },
  },
  {
    id: 4,
    author: {
      name: "Maxim Ivanov",
      avatar: "/2gis.png",
      platforma: "2GIS",
      date: "12.12.2022",
    },
    rating: 3,
    text: "Как же мне нравится этот клуб! Великолепный бассейн, широкий выбор тренажеров и групповых программ!...",
    company: {
      name: "DV",
      subName: "Fitness",
    },
  },
  {
    id: 5,
    author: {
      name: "Ivan Petrov",
      avatar: "/google.webp",
      platforma: "Google",
      date: "12.12.2022",
    },
    rating: 4,
    text: "Прекрасный зал, хороший персонал, хорошая парилка. Приятный атмосфера. Рекомендую!",
    company: {
      name: "DV",
      subName: "Fitness",
    },
  },
  {
    id: 6,
    author: {
      name: "Ivan Petrov",
      avatar: "/yandex.webp",
      platforma: "Яндекс",
      date: "12.12.2022",
    },
    rating: 4,
    text: "Прекрасный зал, хороший персонал, хорошая парилка. Приятный атмосфера. Рекомендую!",
    company: {
      name: "DV",
      subName: "Fitness",
    },
  },
  {
    id: 7,
    author: {
      name: "Ivan Petrov",
      avatar: "/google.webp",
      platforma: "Google",
      date: "12.12.2022",
    },
    rating: 4,
    text: "Прекрасный зал, хороший персонал, хорошая парилка. Приятный атмосфера. Рекомендую!",
    company: {
      name: "DV",
      subName: "Fitness",
    },
  },
  {
    id: 8,
    author: {
      name: "Ivan Petrov",
      avatar: "/yandex.webp",
      platforma: "Яндекс",
      date: "12.12.2022",
    },
    rating: 4,
    text: "Прекрасный зал, хороший персонал, хорошая парилка. Приятный атмосфера. Рекомендую!",
    company: {
      name: "DV",
      subName: "Fitness",
    },
  },
];
