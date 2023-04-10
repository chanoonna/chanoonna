export interface ICareer {
  id: number;
  company: string;
  url: string;
  position: string;
  period: string;
  roles: {
    name: string;
    description: string;
    responsibilities: string[];
  }[];
}

export const CAREER: ICareer[] = [
  {
    id: 1,
    company: 'Mosaic Inc.',
    position: 'Frontend Developer',
    url: 'https://www.mosaicapp.com/',
    period: '2021.04 - 2023.04',
    roles: [
      {
        name: 'New feature development management',
        description: 'Drive the success of ongoing feature development',
        responsibilities: [
          'Requirement analysis',
          'Document writing for associated teams',
          'Prioritization of related tasks',
          'Reassessment & adjustment of the tasks as of requirement changes'
        ]
      },
      {
        name: 'Frontend development',
        description:
          'Implement new frontend features; generally for data creation, modification and visualization',
        responsibilities: [
          'New features and functionalities development',
          'Bug fixes, quality improvements, and maintenance',
          'Feedback to other developers',
          'Test writing',
          'Code reviews'
        ]
      },
      {
        name: 'Task management',
        description:
          'Manage non-feature development: bug fixes, maintenance, etc.',
        responsibilities: [
          'Estimatimation of required time and complexity',
          'Task prioritiztion and assignment'
        ]
      }
    ]
  }
];
