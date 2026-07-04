import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiTailwindcss,
  SiN8N,
} from 'react-icons/si'
import { TbBrandVscode, TbSparkles, TbChartHistogram, TbSql } from 'react-icons/tb'
import type { LogoItem } from '../components/LogoLoop'

// Real toolset. Simple Icons has no VS Code / Power BI logo (Microsoft
// trademark) and "AI automation" is not a brand, so those three use Tabler
// glyphs; every mark is tinted one colour so they read as a consistent set.
export const techLogos: LogoItem[] = [
  { node: <TbBrandVscode />, title: 'VS Code', href: 'https://code.visualstudio.com' },
  { node: <SiHtml5 />, title: 'HTML', href: 'https://developer.mozilla.org/docs/Web/HTML' },
  { node: <SiCss />, title: 'CSS', href: 'https://developer.mozilla.org/docs/Web/CSS' },
  {
    node: <SiJavascript />,
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/docs/Web/JavaScript',
  },
  { node: <SiPhp />, title: 'PHP', href: 'https://www.php.net' },
  { node: <SiLaravel />, title: 'Laravel', href: 'https://laravel.com' },
  { node: <TbSql />, title: 'SQL' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiN8N />, title: 'n8n', href: 'https://n8n.io' },
  { node: <TbSparkles />, title: 'AI automation' },
  { node: <TbChartHistogram />, title: 'Power BI', href: 'https://powerbi.microsoft.com' },
]
