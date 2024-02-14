// Router.tsx
import { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

const routes = [
  {
    path: '/',
    component: lazy(() => import('./Home'))
  },
  {
    path: '/CharStat',
    component: lazy(() => import('./CharStat'))
  },
  {
    path: '/Rank',
    component: lazy(() => import('./Rank'))
  },
  {
    path: '/CharRank',
    component: lazy(() => import('./CharRank'))
  }
]

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Router>
  )
}
