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
      className="scroll-mt-20 border-t border-gray-200 py-16"
    >
      <h2 className="text-2xl font-semibold text-gray-900">Projects</h2>
      <div className="mt-6 space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {project.title}
            </h3>
            <dl className="mt-3 space-y-2 text-gray-700">
              <div>
                <dt className="inline font-medium text-gray-900">Problem: </dt>
                <dd className="inline">{project.problem}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-gray-900">
                  What I did:{' '}
                </dt>
                <dd className="inline">{project.whatIDid}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-gray-900">Result: </dt>
                <dd className="inline">{project.result}</dd>
              </div>
            </dl>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              {project.link}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
