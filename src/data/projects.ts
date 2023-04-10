export interface IProject {
  id: number;
  name: string;
  description: string;
  imageLinks: string[];
  github: string;
  stacks: string[];
}

export const PROJECTS: IProject[] = [
  {
    id: 3,
    name: 'Point of sale (Ongoing)',
    description:
      'An electron desktop application that allows users to manage their sales, inventory. Users can create, edit, and delete sales and their products. It also visualizes user data with multiple types of charts.',
    imageLinks: [],
    github: 'https://github.com/chanoonna/pos-app',
    stacks: ['typescript', 'electon', 'React', 'sqlite3', 'webpack']
  },
  {
    id: 2,
    name: 'Open house of commons',
    description:
      'A project with both frontend and backend. The frontend is a multi-page react application that allows users to search for their MPs and see their voting records by visualizing voting data. The backend is a node.js API server that downloads data from the official parliament website, parses the data, and stores it to postgres database. The frontend and backend are connected through REST API.',
    imageLinks: [
      'https://github.com/csb3/open-house-of-commons/raw/543ae6128638889587b7fca3c8ce877aaabfa6fa/docs/vote-view.png?raw=true'
    ],
    github: 'https://github.com/chanoonna/open-house-of-commons',
    stacks: ['React', 'chart.js', 'sass', 'node.js', 'express', 'postgresql']
  },
  {
    id: 1,
    name: 'Interview schedulear',
    description:
      'A single page react application that allows users to schedule interviews with real-time updates by using websocket. Users can create, edit, and delete interviews. Users can also switch between days and see the schedule for each day.',
    imageLinks: [
      'https://raw.githubusercontent.com/chanoonna/scheduler/master/docs/bookinterview.png'
    ],
    github: 'https://github.com/chanoonna/scheduler',
    stacks: ['React', 'node-sass', 'jest', 'cypress', 'circleci', 'storybook']
  }
];
