import { SectionWrapper } from "../SectionWrapper";

export function Experience({ dict }: { dict: any }) {
  const experiences = [
    {
      id: 1,
      company: dict.exp1.company,
      location: dict.exp1.location,
      roles: dict.exp1.roles,
      description: dict.exp1.description
    },
    {
      id: 2,
      company: dict.exp2.company,
      location: dict.exp2.location,
      roles: dict.exp2.roles,
      description: dict.exp2.description
    },
    {
      id: 3,
      company: dict.exp3.company,
      location: dict.exp3.location,
      roles: dict.exp3.roles,
      description: dict.exp3.description
    }
  ];

  return (
    <SectionWrapper id="experience" title={dict.title}>
      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-0">
            {/* Timeline line for mobile */}
            <div className="md:hidden absolute left-0 top-2 bottom-[-48px] w-px bg-zinc-200 dark:bg-zinc-800 last:bottom-0"></div>
            {/* Timeline dot for mobile */}
            <div className="md:hidden absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-black"></div>
            
            <div className="flex flex-col md:flex-row md:gap-8">
              <div className="md:w-1/4 pb-2 md:pb-0 shrink-0">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{exp.company}</h3>
                {exp.location && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{exp.location}</p>
                )}
              </div>
              
              <div className="md:w-3/4 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  {exp.roles.map((role: any, idx: number) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">{role.title}</span>
                      {role.period && (
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded-md w-fit">
                          {role.period}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
