import { Outlet } from 'react-router-dom'
import SkySequence from './components/SkySequence'

// The sequence lives here rather than in a page so the background is
// continuous — it is pinned to the viewport and never remounts.
function Layout() {
  return (
    <>
      <SkySequence />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
