// Russian resource pack — sets window.I18N_RU.
// Loaded by lang.js, which copies the `cv` block into window.CV_DATA.
window.I18N_RU = {
  ui: {
    // ── nav
    'nav.about':            'Обо мне',
    'nav.experience':       'Опыт',
    'nav.education':        'Образование',
    'nav.skills':           'Навыки',
    'nav.architecture':     'Архитектура',
    'nav.contact':          'Контакты',
    'nav.blog':             'Блог',
    'nav.backToPortfolio':  'Назад к портфолио',

    // ── hero
    'hero.btn.getInTouch':     'Связаться',
    'hero.btn.viewExperience': 'Смотреть опыт →',

    // ── section titles
    'section.experience':   'Опыт работы',
    'section.education':    'Образование',
    'section.skills':       'Технические навыки',
    'section.architecture': 'Архитектура и проектирование',

    // ── education
    'edu.summaryHtml':     '<strong>Бакалавр</strong> · Программная инженерия',
    'edu.gpa':             'Средний балл',
    'edu.visitUniversity': 'Сайт университета',

    // ── experience
    'exp.visitCompany': 'Сайт компании',

    // ── contact form (tabs)
    'form.tab.email':    'Email',
    'form.tab.whatsapp': 'WhatsApp',

    // ── contact form (email)
    'form.email.name.label':         'Ваше имя',
    'form.email.name.placeholder':   'Иван Иванов',
    'form.email.email.label':        'Email',
    'form.email.email.placeholder':  'ivan@company.com',
    'form.email.message.label':      'Сообщение',
    'form.email.message.placeholder':'Расскажите о роли или проекте...',
    'form.email.submit':             'Отправить сообщение →',
    'form.email.hint':               'Откроется ваш почтовый клиент с заполненным сообщением.',
    'form.email.errInvalid':         'Заполните имя, корректный email и сообщение.',
    'form.email.subject':            'Возможность / Запрос от {name}',
    'form.email.bodyGreeting':       'Здравствуйте, Александр,',
    'form.email.bodyFromLine':       'От: {name}',
    'form.email.bodyEmailLine':      'Email: {email}',
    'form.email.toast':              'Открыт ваш почтовый клиент',

    // ── contact form (whatsapp)
    'form.wa.intro':                 'Все поля необязательные — заполните то, что знаете.',
    'form.wa.company.label':         'Компания',
    'form.wa.company.placeholder':   'ООО Пример',
    'form.wa.role.label':            'Должность',
    'form.wa.role.placeholder':      'Senior Backend-разработчик',
    'form.wa.location.label':        'Формат работы',
    'form.wa.location.notSpecified': '— не указано —',
    'form.wa.location.remote':       'Удалённо',
    'form.wa.location.onsite':       'В офисе',
    'form.wa.location.hybrid':       'Гибрид',
    'form.wa.contact.label':         'Ваши контакты',
    'form.wa.contact.placeholder':   'email или телефон',
    'form.wa.submit':                'Открыть в WhatsApp →',
    'form.wa.hint':                  'Откроется WhatsApp с заполненным сообщением.',
    'form.wa.greeting':              'Здравствуйте, Александр! Я нашёл ваш сайт и хотел бы обсудить вакансию.',
    'form.wa.line.company':          'Компания: {value}',
    'form.wa.line.role':             'Должность: {value}',
    'form.wa.line.location':         'Формат: {value}',
    'form.wa.line.contact':          'Контакты: {value}',
    'form.wa.bestRegards':           'С уважением,',
    'form.wa.signature':             '[Ваша подпись]',

    // ── theme & language toggles
    'theme.toLight': 'Переключить на светлую тему',
    'theme.toDark':  'Переключить на тёмную тему',
    'lang.toRu':     'Переключить на русский',
    'lang.toEn':     'Switch to English',

    // ── footer
    'footer.backToTop':     'Наверх ↑',
    'footer.portfolioLink': '← Портфолио',
    'footer.blogTagline':   '· блог в разработке.',

    // ── terminal (index)
    'terminal.cmd.profile':    'alex --profile',
    'terminal.cmd.stack':      'alex --stack',
    'terminal.cmd.highlights': 'alex --highlights',
    'terminal.key.name':       'имя',
    'terminal.key.role':       'роль',
    'terminal.key.experience': 'опыт',
    'terminal.key.location':   'локация',
    'terminal.key.languages':  'языки',
    'terminal.key.openTo':     'открыт_к',
    'terminal.value.languages':'EN · RU · HE',

    // ── page titles
    'page.title.index': 'Александр Тускаев — Senior .NET-разработчик',
    'page.title.blog':  'Блог — Александр Тускаев · Скоро',

    // ── blog page
    'blog.wip':              'В разработке · v0.1.0',
    'blog.headingHtml':      '<em>Блог</em>.',
    'blog.subtitle':         'Заметки из бэкенд-окопов — скоро.',
    'blog.desc.p1Html':      'Здесь я буду делиться <span class="highlight">самым интересным из мира технологий</span> — паттернами, постмортемами и тихими инженерными инсайтами, благодаря которым распределённые системы становятся понятнее.',
    'blog.desc.p2Html':      'Глубокие разборы <span class="highlight">внутренностей .NET</span>, паттернов распределённых систем (saga, outbox, event sourcing), <span class="highlight">архитектурные обзоры</span> с C4 / UML / sequence-диаграммами, практические туториалы и истории из продакшен-окопов.',
    'blog.desc.p3Html':      'Это место для образовательных материалов, ноу-хау и того нового, чем я сейчас увлекаюсь — для инженеров, которые любят понимать, <em>почему</em> что-то работает, а не просто <em>что</em> оно работает.',
    'blog.terminal.cmd.status':   'blog --status',
    'blog.terminal.cmd.progress': 'blog --progress',
    'blog.terminal.key.stage':    'этап',
    'blog.terminal.value.stage':  'черновики первых постов',
    'blog.terminal.key.stack':    'стек',
    'blog.terminal.value.stack':  'Next.js · MDX · Vercel',
    'blog.terminal.key.posts':    'постов',
    'blog.terminal.value.posts':  '3 в очереди',
    'blog.terminal.key.launch':   'запуск',
    'blog.terminal.value.launch': 'скоро™',
    'blog.terminal.progress':     'собираем…',
    'blog.notify.text':           'Хотите получить уведомление о первом посте?',
    'blog.notify.placeholder':    'your@email.com',
    'blog.notify.btn':            'Уведомить →',
    'blog.notify.hint':           'Напишу один раз · никакого спама.',
    'blog.notify.errInvalid':     'Введите корректный email.',
    'blog.notify.subject':        'Запуск блога — пожалуйста, уведомите меня',
    'blog.notify.bodyGreeting':   'Здравствуйте, Александр,',
    'blog.notify.bodyAsk':        'Добавьте меня в список — хотел бы получить уведомление, когда блог будет запущен.',
    'blog.notify.bodyEmail':      'Email: {email}',
    'blog.notify.toast':          'Открыт ваш почтовый клиент',
    'blog.backLink':              '← Назад к портфолио'
  },

  cv: {
    personal: {
      firstName:    'Александр',
      lastName:     'Тускаев',
      title:        'Senior .NET-разработчик · Системный / Solution архитектор · Тимлид',
      location:     'Центральный округ, Израиль',
      locationFlag: '🇮🇱',
      status:       'Открыт к предложениям',
      _e:           'YW10dXNrYUBnbWFpbC5jb20=',
      _p:           'Kzk3MiA1NSA3NzEgNzkwNg==',
      bio:          'Backend-инженер с 5+ годами опыта в проектировании распределённых систем — от разделения легаси-монолитов на DDD-микросервисы до архитектуры event-driven AI-интеграций. Пишу масштабируемый код, проектирую устойчивые системы и пайплайны, которые просто работают, — и обожаю рисовать архитектуры в C4, UML и sequence-диаграммах ещё до первой строчки кода. Также вёл команды: менторил инженеров, проводил технические интервью и отвечал за поставку end-to-end.'
    },

    social: {
      linkedin: { label: 'linkedin.com/in/alextuskaev', url: 'https://www.linkedin.com/in/alextuskaev' },
      github:   { label: 'github.com/Tusa101',         url: 'https://github.com/Tusa101' }
    },

    terminal: {
      role:            'Senior .NET-разработчик',
      experienceLabel: '5+ лет',
      openTo:          ['Системный архитектор', 'Solution архитектор', 'Тимлид'],
      stackPrimary:    ['C#', 'ASP.NET', '.NET Core', 'EF Core'],
      stackSecondary:  ['Azure', 'AWS', 'Docker', 'K8s', 'RabbitMQ', 'Service Bus'],
      stackTertiary:   ['PostgreSQL', 'Redis', 'RavenDB'],
      highlights: [
        { key: 'поставка',  value: 'CI/CD −30% время сборки' },
        { key: 'произв.',   value: 'Критические пути +15% скорости' },
        { key: 'разработка',value: 'NuGet-пакеты → −30% времени' }
      ]
    },

    metrics: [
      { value: '5',  suffix: '+', label: 'Лет опыта' },
      { value: '4',  suffix: '',  label: 'Компаний' },
      { value: '15', suffix: '+', label: 'Инженеров под руководством' },
      { value: '88', suffix: '',  label: 'Средний балл · Бакалавр' }
    ],

    experienceSummary: '5 лет суммарно · с июн 2021',
    experience: [
      {
        company:  'movement-group',
        url:      'https://movement-group.com/',
        period:   'Фев 2025 – н. в. · 1 г 2 мес',
        role:     'Senior .NET-разработчик',
        industry: 'Wellness · Здоровье · Офис, Лод, Израиль',
        bullets: [
          'Декомпозировал основной монолит на <span class="exp-highlight">DDD-микросервисы</span> для поддержки интернационализации и роста RPS.',
          'Разработал NuGet-пакеты (RavenDB, конфиг Postgres) в Azure Feed — <span class="exp-highlight">ускорил бутстрап новых проектов на 30%</span>.',
          'Спроектировал микросервисы в Azure App Service, подключённые к <span class="exp-highlight">AI-агентам через MCP</span>; архитектура распределённой SAGA с асинхронным обменом сообщениями через Service Bus.',
          'Возглавил разработку ядра event-driven системы; улучшил процессы онбординга и проведения интервью.'
        ]
      },
      {
        company:  'APPFOX',
        url:      'https://appfox.ru/',
        period:   'Фев 2024 – Фев 2025 · 1 г',
        role:     'Senior .NET-разработчик',
        industry: 'Аутсорс · SaaS · Gamedev · EdTech · Удалённо, Россия',
        bullets: [
          'Спроектировал многопоточные ASP.NET-микросервисы, связанные через RabbitMQ; администрировал PostgreSQL и написал <span class="exp-highlight">10+ хранимых процедур</span> на SQL/PL-SQL.',
          'Выполнял роль DevOps: настраивал GitHub Actions, Docker, пайплайны TeamCity — <span class="exp-highlight">сократил сборку и доставку на 30%</span>.',
          'Оптимизация критического пути ускорила нагруженные сервисы <span class="exp-highlight">до 15%</span>.',
          'Менторил новых сотрудников и проводил технические интервью.'
        ]
      },
      {
        company:  'Dacha Industries',
        url:      'https://di-finsim.tilda.ws/',
        period:   'Дек 2021 – Сен 2024 · 2 г 10 мес',
        role:     '.NET-разработчик',
        industry: 'Стартап · Симулятор фондового рынка · Гибрид, Россия',
        bullets: [
          'Поддерживал 8 асинхронных ASP.NET-сервисов через RabbitMQ с кешем Redis и БД Oracle.',
          'Разработал <span class="exp-highlight">WPF-десктоп приложение</span>; настроил CI/CD на TeamCity.'
        ]
      },
      {
        company:  'ITIVITI (Broadridge)',
        url:      'https://www.broadridge.com/financial-services/capital-markets/trading-and-connectivity/',
        period:   'Июн 2021 – Ноя 2021 · 6 мес',
        role:     '.NET-разработчик',
        industry: 'FinTech · Trading-инструменты · HFT · Офис, Россия',
        bullets: [
          'Backend-разработка инструментов для высокочастотного трейдинга в регулируемой FinTech-среде.'
        ]
      }
    ],

    education: [
      {
        period: '2020 – 2024',
        degree: 'Бакалавр программной инженерии',
        school: 'Санкт-Петербургский политехнический университет Петра Великого',
        url:    'https://english.spbstu.ru/',
        gpa:    '88'
      }
    ],

    skills: [
      {
        group: 'Языки и фреймворки',
        tags: [
          { label: 'C#',           primary: true,  icon: 'csharp' },
          { label: 'ASP.NET Core', primary: true,  icon: 'aspnet' },
          { label: '.NET Core',    primary: true  },
          { label: 'EF Core',      primary: true  },
          { label: 'xUnit',        primary: false },
          { label: 'Python',       primary: false },
          { label: 'SQL / PL-SQL', primary: false }
        ]
      },
      {
        group: 'Облако и DevOps',
        tags: [
          { label: 'Azure',          primary: true,  icon: 'azure' },
          { label: 'AWS',            primary: true  },
          { label: 'Docker',         primary: true,  icon: 'docker' },
          { label: 'GitHub Actions', primary: true  },
          { label: 'NuGet',          primary: true,  icon: 'nuget' },
          { label: 'Azure DevOps',   primary: false },
          { label: 'TeamCity',       primary: false },
          { label: 'Kubernetes',     primary: false },
          { label: 'S3',             primary: false },
          { label: 'Windows',        primary: false },
          { label: 'Linux',          primary: false }
        ]
      },
      {
        group: 'Сообщения и архитектура',
        tags: [
          { label: 'RabbitMQ',          primary: true,  icon: 'rabbitmq' },
          { label: 'Azure Service Bus', primary: true  },
          { label: 'MCP / AI-агенты',   primary: false },
          { label: 'SAGAs',             primary: false },
          { label: 'Микросервисы',      primary: false },
          { label: 'Event-driven',      primary: false },
          { label: 'DDD',               primary: false }
        ]
      },
      {
        group: 'Базы данных',
        tags: [
          { label: 'PostgreSQL', primary: true,  icon: 'postgresql' },
          { label: 'Redis',      primary: true,  icon: 'redis'      },
          { label: 'RavenDB',    primary: false },
          { label: 'MongoDB',    primary: false },
          { label: 'Oracle DB',  primary: true,  icon: 'oracle'     }
        ]
      },
      {
        group: 'Протоколы и практики',
        tags: [
          { label: 'REST API',      primary: true  },
          { label: 'gRPC',          primary: true,  icon: 'grpc' },
          { label: 'Agile / Scrum', primary: false },
          { label: 'Code Review',   primary: false },
          { label: 'Менторинг',     primary: false },
          { label: 'Рефакторинг',   primary: false },
          { label: 'System Design', primary: false }
        ]
      },
      {
        group: 'Языки',
        tags: [
          { label: 'Английский — Свободно',  primary: true  },
          { label: 'Русский — Родной',       primary: true  },
          { label: 'Иврит — Начальный',      primary: false }
        ]
      }
    ],

    architecture: {
      heading: 'Я сначала думаю в <em>диаграммах</em>, потом в коде.',
      paragraphs: [
        'Перед тем как написать первый эндпоинт, я набрасываю систему — границы контекстов, потоки сообщений, режимы отказов, пути fan-out. Хорошая архитектура — это разговор, и диаграммы — это то, как он происходит.',
        'Опираюсь на <span class="exp-highlight">C4-модели</span> для системного контекста и контейнеров, <span class="exp-highlight">UML</span> для классов и state machine, и <span class="exp-highlight">sequence-диаграммы</span> для асинхронной хореографии между сервисами. Инструменты: PlantUML, Lucid, Miro, draw.io, Mermaid, Excalidraw.',
        'Поэтому я также <span class="exp-highlight">открыт к ролям системного / Solution архитектора</span> — проектирование формы системы это часть работы, которую я люблю больше всего.',
        'И мне столь же комфортно <span class="exp-highlight">вести команду, которая её строит</span> — менторить инженеров, проводить технические интервью, отвечать за поставку и культуру код-ревью, и переводить архитектурные решения в роадмап, который команда действительно хочет шипить.'
      ],
      tags: [
        { label: 'C4-модель',           primary: true  },
        { label: 'UML',                 primary: true  },
        { label: 'Sequence-диаграммы',  primary: true  },
        { label: 'Лидерство команды',   primary: true  },
        { label: 'PlantUML',            primary: false },
        { label: 'Lucid',               primary: false },
        { label: 'Miro',                primary: false },
        { label: 'Mermaid',             primary: false },
        { label: 'Excalidraw',          primary: false },
        { label: 'Менторинг',           primary: false },
        { label: 'Технические интервью',primary: false }
      ]
    },

    contact: {
      heading: 'Давайте создадим<br>что-то <em>великое</em>.',
      blurb:   'Открыт к senior backend-ролям, позициям тимлида и системного / Solution архитектора — везде, где распределённые системы становятся интересными. Базируюсь в Израиле, открыт к удалённой работе через любые часовые пояса.'
    },

    footer: { name: 'Александр Тускаев' }
  }
};
