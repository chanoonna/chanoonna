export interface ISkill {
  id: number;
  name: string;
}

export const LANGUAGES: ISkill[] = [
  {
    id: 1,
    name: 'Typescrtip, Javascript'
  },
  {
    id: 2,
    name: 'C, C++'
  },
  {
    id: 3,
    name: 'Haskell'
  },
  {
    id: 4,
    name: 'Ruby'
  }
];
export const STACKS: ISkill[] = [
  {
    id: 1,
    name: 'react/redux/redux-saga'
  },
  {
    id: 2,
    name: 'webpack'
  },
  {
    id: 3,
    name: 'express'
  },
  {
    id: 4,
    name: 'electron'
  },
  {
    id: 5,
    name: 'Ruby on Rails'
  }
];
export const DATABASES: ISkill[] = [
  {
    id: 1,
    name: 'postgresql'
  },
  {
    id: 2,
    name: 'sqlite3'
  }
];
