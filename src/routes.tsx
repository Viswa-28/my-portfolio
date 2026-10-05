import type { RouteRecord } from 'vite-react-ssg'
import Layout from './Layout'
import Home from './pages/Home'
import WebDesignMadurai from './pages/WebDesignMadurai'
import SeoServicesMadurai from './pages/SeoServicesMadurai'
import SocialMediaMarketingMadurai from './pages/SocialMediaMarketingMadurai'

// Every path listed here is statically generated at build time, so each URL
// ships real HTML with its own title, description, canonical and schema —
// which matters because social crawlers never run JavaScript.
//
// Imported eagerly on purpose: these are three text pages, and code-splitting
// them would cost a round trip for a few KB of markup.
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'web-design-madurai', element: <WebDesignMadurai /> },
      { path: 'seo-services-madurai', element: <SeoServicesMadurai /> },
      {
        path: 'social-media-marketing-madurai',
        element: <SocialMediaMarketingMadurai />,
      },
    ],
  },
]
