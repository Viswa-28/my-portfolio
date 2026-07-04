import SectionHeading from './SectionHeading'

type Project = {
  title: string
  problem: string
  whatIDid: string
  result: string
  link: string
}

const projects: Project[] = [
  {
    title: 'Workdu',
    problem: '[ what need did this project address ]',
    whatIDid: '[ your role / what you built ]',
    result: '[ outcome, if any ]',
    link: 'https://workdu.com',
  },
  {
    title: 'Tev HR Solution',
    problem: '[ what need did this project address ]',
    whatIDid: '[ your role / what you built ]',
    result: '[ outcome, if any ]',
    link: 'https://tevhrsolution.in',
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-line py-16 sm:py-20"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="mt-6 space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-card border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_32px_-16px_rgba(31,111,84,0.35)]"
          >
            <h3 className="font-heading text-lg font-bold text-ink transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <dl className="mt-3 space-y-2 text-body">
              <div>
                <dt className="inline font-medium text-ink">Problem: </dt>
                <dd className="inline">{project.problem}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-ink">What I did: </dt>
                <dd className="inline">{project.whatIDid}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-ink">Result: </dt>
                <dd className="inline">{project.result}</dd>
              </div>
            </dl>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              {project.link}
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
