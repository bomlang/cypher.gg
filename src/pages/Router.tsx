// Router.tsx
import { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

const routes = [
  {
    path: '/',
    component: lazy(() => import('./Home'))
  },
  {
    path: '/charStat',
    component: lazy(() => import('./CharStat'))
  },
  {
    path: '/rank',
    component: lazy(() => import('./Rank'))
  },
  {
    path: '/charRank',
    component: lazy(() => import('./CharRank'))
  },
  {
    path: '/player/:nickname',
    component: lazy(() => import('./Player'))
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
