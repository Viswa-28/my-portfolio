const tools = ['VS Code', 'PHP', 'SQL', 'Excel', 'Power BI']
const soft = ['Problem-solving', 'Pattern recognition']

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-gray-200 py-16">
      <h2 className="text-2xl font-semibold text-gray-900">Skills</h2>
      <div className="mt-6 space-y-6">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
            Tools
          </h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {tools.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
            Soft
          </h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {soft.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
