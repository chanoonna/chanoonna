export interface ICareer {
  id: number;
  company: string;
  companyDescription: string;
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
    companyDescription:
      'Provides SAAS to help companies manage their projects, employees, and budget',
    position: 'Frontend Developer',
    period: '2021.04 - 2023.4',
    roles: [
      {
        name: 'New feature development management',
        description: 'Drive the success of ongoing feature development',
        responsibilities: [
          'Conduct requirements analysis, write user stories, and produce frontend documentation for the backend team',
          'Communicate with the backend team to ensure all the requirements are covered',
          'Manage frontend tasks and prioritize them based on the importance of each functionality',
          'Continuously reassess development progress and adjust user stories and requirements as needed'
        ]
      },
      {
        name: 'Frontend development',
        description: 'General development work on the frontend',
        responsibilities: [
          'Develop new features and functionalities',
          'Write unit tests and create QA scenarios',
          'Perform code reviews and provide feedback to other developers',
          'Fix bugs and improve the overall quality of the product'
        ]
      },
      {
        name: 'Task management',
        description: 'Manage non-feature work; bug fixes, maintenance, etc.',
        responsibilities: [
          'Estimate the time required and complexity of the requirement',
          'Prioritize tasks and assign them to other developers'
        ]
      }
    ]
  }
];