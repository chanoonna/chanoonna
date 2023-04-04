export interface ICareer {
  id: number;
  company: string;
  jobTitle: string;
  fromTo: string;
  tasks: {
    description: string;
    notableWork?: string[];
  }[];
}

export const CareerCard = ({ career }: { career: ICareer }) => {
  return (
    <div id={career.id.toString()} className="career-card">
      <section className="career-card-section">
        <header className="career-card-header">
          <h2>
            {career.company} - {career.jobTitle}
          </h2>
          <h4>{career.fromTo}</h4>
        </header>
        <ul className="career-card-tasks">
          {career.tasks.map((task) => (
            <li key={task.description} className="career-card-task">
              <p>{task.description}</p>
              {task.notableWork && (
                <ul className="career-card-notable-tasks">
                  {task.notableWork.map((work) => (
                    <li key={work} className="career-card-notable-task">
                      {work}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
