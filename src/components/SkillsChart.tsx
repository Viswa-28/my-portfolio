import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts'

type Category = 'Development' | 'Analytics'

type Skill = {
  name: string
  category: Category
  // Equal weight for every skill — the bars encode category, NOT proficiency,
  // so no numeric score is implied.
  value: 1
}

const skills: Skill[] = [
  { name: 'PHP', category: 'Development', value: 1 },
  { name: 'SQL', category: 'Development', value: 1 },
  { name: 'VS Code', category: 'Development', value: 1 },
  { name: 'Excel', category: 'Analytics', value: 1 },
  { name: 'Power BI', category: 'Analytics', value: 1 },
]

// Fills reference the locked palette via CSS variables (emitted by Tailwind's
// @theme), so there is no hardcoded hex and no default Recharts blue.
const categoryFill: Record<Category, string> = {
  Development: 'var(--color-accent)',
  Analytics: 'var(--color-muted)',
}

const legend: { label: Category }[] = [
  { label: 'Development' },
  { label: 'Analytics' },
]

function SkillsChart() {
  return (
    <div>
      {/* Text alternative — an SVG chart is opaque to assistive tech. */}
      <p className="sr-only">
        Skills grouped by focus area. Development: PHP, SQL, VS Code. Analytics:
        Excel, Power BI.
      </p>

      <div aria-hidden="true">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart
            data={skills}
            layout="vertical"
            margin={{ top: 0, right: 8, bottom: 0, left: 8 }}
            barCategoryGap={14}
          >
            {/* No numeric axis is shown, so bar length reads as categorical. */}
            <XAxis type="number" domain={[0, 1]} hide />
            <YAxis
              type="category"
              dataKey="name"
              width={82}
              tickLine={false}
              axisLine={false}
              tick={{ fill: 'var(--color-body)', fontSize: 14 }}
            />
            <Bar dataKey="value" radius={6} barSize={20} isAnimationActive={false}>
              {skills.map((skill) => (
                <Cell key={skill.name} fill={categoryFill[skill.category]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
        {legend.map((entry) => (
          <li key={entry.label} className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: categoryFill[entry.label] }}
            />
            {entry.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsChart
