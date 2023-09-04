import { DateRange, Experience, Link, PersonalDetails } from '../types';

export const personalDetails: PersonalDetails = {
  name: 'Michael Mammoliti',
  position: 'Senior Full Stack Engineer',
};

export const socials: Link[] = [
  {
    name: 'linkedin',
    url: '//linkedin.com/in/MichaelMammoliti',
    text: 'linkedin.com/in/MichaelMammoliti',
    target: '_blank',
  },
  {
    name: 'github',
    url: '//github.com/MichaelMammoliti',
    text: 'github.com/MichaelMammoliti',
    target: '_blank',
  },
  {
    name: 'email',
    url: 'mailto:mammoliti.michael@gmail.com',
    text: 'mammoliti.michael@gmail.com',
  },
];

export const datesArray: DateRange[] = [
  { from: '2023-04-01T00:00:00.000Z', to: 'Present' },
  { from: '2023-01-01T00:00:00.000Z', to: '2023-03-31T00:00:00.000Z' },
  { from: '2021-10-01T00:00:00.000Z', to: '2022-10-01T00:00:00.000Z' },
  { from: '2021-04-01T00:00:00.000Z', to: '2021-09-30T00:00:00.000Z' },
  { from: '2020-02-01T00:00:00.000Z', to: '2021-04-01T00:00:00.000Z' },
  { from: '2019-08-01T00:00:00.000Z', to: '2020-02-01T00:00:00.000Z' },
  { from: '2019-02-01T00:00:00.000Z', to: '2019-04-01T00:00:00.000Z' },
  { from: '2018-07-01T00:00:00.000Z', to: '2018-12-31T00:00:00.000Z' },
  { from: '2017-09-01T00:00:00.000Z', to: '2018-06-30T00:00:00.000Z' },
  { from: '2016-12-01T00:00:00.000Z', to: '2017-09-30T00:00:00.000Z' },
  { from: '2016-05-01T00:00:00.000Z', to: '2016-12-31T00:00:00.000Z' },
  { from: '2010-01-01T00:00:00.000Z', to: '2016-05-31T00:00:00.000Z' },
];

export const experience: Experience[] = [
  {
    company: {
      name: '',
      url: '',
    },
    project: {
      name: 'BriscolaPro',
      url: '',
    },
    type: 'Freelance',
    locationType: 'Remote',
    position: 'Senior Full Stack Engineer',
    date: datesArray[0],
    description: [
      'built a real-time, multiplayer, turn-based card game using React, MaterialUI, SCSS, Firebase, GCP, and Node',
      'created an AI bot on the backend to play against real players',
      'implemented a matchmaking queue system with Elo/ranks in mind',
      'structured Firestore for the best security rules conventions and readability',
      'heavy usage of Cloud Triggers/transactions for write operations',
      'debugged and monitored the app via Google Cloud Platform',
      'developed scripts to automate game generations for future Machine Learning applications',
      'applied gitflow best practices and used semver for releases',
      'mentored and taught modern Front-End development real-world workflows and best practices to junior colleagues',
      'managed the project by creating and updating Jira boards, sprints, and tickets',
      'designed the app using Figma',
      'explored TensorFlow, Svelte, Swift, Python, and OpenAI APIs',
    ],
    skills: [
      'React',
      'Material UI',
      'SCSS',
      'Firebase',
      'GCP',
      'Node',
      'Firestore',
      'Monorepo',
      'Jest',
      'React Testing Library',
      'Swift',
      'Svelte',
      'TensorFlow',
      'Jira',
      'Project Management',
    ],
  },
  {
    company: {
      name: 'BOXARR',
      url: '',
    },
    type: 'Contract',
    locationType: 'Remote',
    position: 'Senior Front End Engineer',
    date: datesArray[1],
    description: [
      'led the development of a greenfield React/Typescript project',
      'implemented custom data-driven dashboard widgets to visualise complex data in various formats',
      'collaborated on a cross-functional team, prioritising communication between teams',
      'conducted candidate evaluations through verbal interviews and skills assessments',
      'used Material UI as a components library to manage themes and global customisation',
      'performed comprehensive code reviews to ensure new changes met the quality standards',
      'architected and programmed an application that enables users to draw shapes within a canvas and customise their layer depth, position, size and colors and links/metadata',
      'presented to stakeholders crucial features of the app specifically built for their most important client',
    ],
    skills: [
      'React',
      'Typescript',
      'SCSS',
      'Material UI (MUI)',
      'Canvas',
      'Interviews',
    ],
  },
  {
    company: {
      name: 'Zapp',
      url: '',
    },
    type: 'Permanent',
    locationType: 'Remote',
    position: 'Senior Full Stack Engineer',
    date: datesArray[2],
    description: [
      'worked on a Real Time Logistic and Supply Chain application using React, Typescript, Material UI and Firebase',
      `architected a new Firestore structure and rewritten the most important application's pages/flows`,
      'moved client side mutations to brand new Cloud Functions (GCP) using batches and transactions',
      'used PubSub and schedulers to perform database mutations and share informations with external services',
      'Continuous Integration and Delivery with CircleCI and heavy usage of client/server side feature flags',
      'contribution in prototyping and shaping the UI/UX using Figma',
      'tested the application with Jest, React Testing Library (from 0% to 95% coverage) and Cypress',
      'wrote documentations and BDD scenarios for the most crucial and complex features developed',
      'supported stores and users via Slack and merged hot-fixes into production',
      'reduced a Cloud Function bill/usage by ~85% by refactoring and optimising the Front End',
      'mentored, pair programmed and introduced new joiners to the architecture and dark areas of the codebase',
    ],
    skills: [
      'React',
      'Typescript',
      'Material UI',
      'Firebase',
      'Cloud Functions',
      'GCP',
      'CI/CD',
      'CircleCI',
      'Feature flags',
      'UI/UX prototyping',
      'Figma',
      'Jest',
      'React Testing Library',
      'Cypress',
      'TDD',
      'BDD',
      'Mentoring',
      'Pair programming',
      'Interviews',
    ],
  },
  {
    company: {
      name: 'Barclays',
      url: '',
    },
    type: 'Contract',
    locationType: 'Remote',
    position: 'Senior Front End Developer',
    date: datesArray[3],
    description: [
      'worked on a headless portal split into headless fragments specifically designed for business users',
      `improved user accessibility (a11y) for entire fragments using ARIA attributes in Storybook's components`,
      'tracked the build progress of the deploying pipelines issues using Jenkins',
      'pair programmed with different UI engineers for fixing cross browser CSS issues, specifically for IE 11',
      `heavy usage of custom hooks and Context APIs to manage the app and components' state`,
      '100% unit test coverage using Jest, Enzyme and React Testing Library',
      'fixed SonarCube issues without introducing regression',
    ],
    skills: [
      'React',
      'Accessibility (a11y)',
      'Storybook',
      'Jenkins',
      'SCSS',
      'Jest',
      'Enzyme',
      'React Testing Library',
      'SonarCube',
    ],
  },
  {
    company: {
      name: '',
      url: '',
    },
    position: 'Senior Full Stack Developer (MERN)',
    type: 'Freelance',
    locationType: 'Remote',
    date: datesArray[4],
    description: [
      'designed the UX and UI for two projects using Figma and reached clients directly to get quick feedbacks',
      'created all components in Storybook from scratch using React, hooks, Recoil.js',
      'used i18next to manage 2 translations and used react-router to manage routing on the client side',
      'created the Webpack configuration and an Express server for both development and production',
      'used MongoDB, GraphQL, Mongoose and PostgreSQL in Node for multiple projects',
      'gained knowledge of deployment with DigitalOcean and Firebase',
      'testing using Jest and Cypress',
      'mentored junior developers in modern Front End dev practices daily for 6 months',
    ],
    skills: [
      'Figma',
      'Storybook',
      'React',
      'Recoil.js',
      'i18next',
      'Webpack',
      'Express',
      'MongoDB',
      'GraphQL',
      'Mongoose',
      'PostgreSQL',
      'Node',
      'Firebase',
      'Jest',
      'Cypress',
    ],
  },
  {
    company: {
      name: 'Sky',
      url: '',
    },
    type: 'Contract',
    position: 'Senior Front End Developer',
    locationType: 'On Site',
    date: datesArray[5],
    description: [
      'refactored/improved React components and used a custom SCSS architecture to maintain 4 different themes',
      'worked on an internal CMS used to generate a JSON configuration for the main application',
      'familiarised with payment providers using iframes',
      `abstraction of some routes for a Micro Frontend project and built the foundations of the Webpack's configuration`,
      `tracked user's journeys with Qubit and other internal libraries`,
      'pair programmed with the team to solve bugs and new/current features',
      'improved the documentation with installation, architecture, best practices and other informations',
      'covered a support role: ensured prioritised pipelines were passing on Concourse CI and Jenkins, fixed flaky E2E tests and used Spark and Dynatrace to track/create incidents',
      'complete testing of the app: unit testing (Jest, Enzyme, Sinon, Chai, Rewire), integration/E2E testing (Cucumber, Capybara, Cypress), visual regression testing (BackstopJS), A/B testing (Omniture, Optimizely)',
    ],
    skills: [
      'React',
      'SCSS',
      'Payment providers',
      'Micro Frontend',
      'Webpack',
      'Qubit',
      'Concourse CI',
      'Jenkins',
      'Spark',
      'Dynatrace',
      'Jest',
      'Enzyme',
      'Sinon',
      'Chai',
      'Rewire',
      'E2E testing',
      'Cucumber',
      'Capybara',
      'Cypress',
      'BackstopJS',
      'A/B testing',
      'Omniture',
      'Optimizely',
      'Unit testing',
      'Integration testing',
      'Visual regression testing',
    ],
  },
  {
    company: {
      name: 'EPAM',
      url: '',
    },
    type: 'Contract',
    locationType: 'On Site',
    position: 'Senior Front End Developer',
    date: datesArray[6],
    description: [
      'worked on a big monorepo eCommerce application for one client on site',
      'built React components from scratch and abstracted reusable ones into Storybook',
      'styled components using PostCSS and CSS Modules',
      'Continuous Delivery by using feature flags to provide a working fallback and avoid regression',
      'worked with the redux and redux-saga and learned how it deals with side effects',
      'used Typescript followed a custom ESLint configuration',
    ],
    skills: [
      'React',
      'Storybook',
      'SCSS',
      'CI/CD',
      'CircleCI',
      'Feature flags',
      'Redux',
      'TypeScript',
      'ESLint',
      'Monorepo',
    ],
  },
  {
    company: {
      name: 'OpenBet',
      url: '',
    },
    type: 'Contract',
    locationType: 'On Site',
    position: 'Senior Front End Developer',
    date: datesArray[7],
    description: [
      'styled React components following a custom SASS/CSS architecture',
      'shared with the team some architecture improvements for UX and javascript performances',
      'refactored React components without introducing regression',
    ],
    skills: ['React', 'SASS', 'CSS'],
  },
  {
    company: {
      name: 'Lifeworks',
      url: '',
    },
    position: 'Senior Front End Developer',
    type: 'Permanent',
    locationType: 'On Site',
    date: datesArray[8],
    description: [
      `worked on crucial features to respect our clients' legal requirements`,
      'working close to QA fixed bugs faster and achieved a better understanding of the codebase',
      'abstracted dumb components into Storybook',
      `required optimised assets using cloudinary.js based on the client's browser and device`,
      'managed the state using redux and redux-thunk and learned the the differences between other libraries',
      'created custom helpers for Redux, URLs and object manipulations',
      'introduced modern Javascript and CSS concepts to the team through slides/presentations',
      'pair programmed on architecture to make things simpler, more maintainable and optimised',
      'managed 5 different translations with Polyglot and animated components with react-velocity',
      'learned how npm manages dependencies and how this will affect the final bundle',
      `extended Webpack's knowledge: code splitting, shimming, aliases, module resolution and environment's variables`,
      'learned and used Symbols, iterators/iterables, generators, decorators, ES6 promises and async/await',
      'TDD using Jest and Enzyme and type checked the code using Flow',
    ],
    skills: [
      'Storybook',
      'Redux',
      'JavaScript',
      'CSS',
      'Pair programming',
      'Webpack',
      'ES6',
      'ES7',
      'TDD',
      'Jest',
      'Enzyme',
      'Flow',
    ],
  },
  {
    company: {
      name: 'SYZYGY',
      url: '',
    },
    position: 'Front End Developer',
    type: 'Permanent',
    locationType: 'On Site',
    date: datesArray[9],
    description: [
      'built complex, scalable and performant components for a large scale and data driven CMS application',
      'using ES6, node, npm, React and its core tools and utilities',
      'extended, refactored and improved old dependencies while keeping compatibility across multiple other projects',
      `dealt with caching and asynchronous browser's operations and internal/external API calls using promises/fetch`,
      'used different utilities/libraries such as Lodash, Moment and Bing Maps API v8',
      'worked close to UI and UX designers proposing new ideas and discussing about improvements',
      'shared my knowledge with other developers learning new techniques and approaches',
      'worked on a daily basis reading UX documentations on Confluence and kept track of my tasks using Jira',
      'used Stash to store code, manage different packages/branches and do code reviews',
    ],
    skills: [
      'ES6',
      'React',
      'REST APIs',
      'CSS MODULES',
      'SCSS',
      'Bing Maps',
      'Confluence',
      'Jira',
    ],
  },
  {
    company: {
      name: 'Havas Helia',
      url: '',
    },
    position: 'Front End Developer',
    type: 'Permanent',
    locationType: 'On Site',
    date: datesArray[10],
    description: [
      'improved my code organisation and my Javascript using different patterns (revealing module, singleton)',
      'build a single page application consuming REST APIs and creating components using jQuery',
      'built HTML5 banners using GSAP library and using Celtra/Sizmek platforms',
      'fixed bugs and kept consistency/compatibility with recent projects/advertising campaigns',
    ],
    skills: ['jQuery', 'REST APIs', 'HTML5', 'GSAP', 'Celtra', 'Sizmek'],
  },
  {
    company: {
      name: 'Freelance',
      url: '',
    },
    position: 'Full Stack Web Developer',
    type: 'Freelance',
    locationType: 'Remote',
    date: datesArray[11],
    description: [
      'worked individually delivering websites using Front End and Back End technologies',
      `learnt how to deal with browsers' compatibility issues and Responsive Web Design techniques`,
      'using SASS applied BEM and OOCSS conventions which improved my CSS code quality',
      'converted pixel-perfect PSDs into fully functional web pages creating new jQuery plugins',
      'learnt how OOP works in JavaScript and used different patterns to structure pages/plugins',
    ],
    skills: [
      'JavaScript',
      'jQuery',
      'OOP',
      'BEM',
      'SASS',
      'Responsive Web Design',
    ],
  },
];