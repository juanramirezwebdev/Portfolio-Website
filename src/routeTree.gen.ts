// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as ContactImport } from './routes/contact'
import { Route as PdImport } from './routes/mentors'


// Create/Update Routes

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
  } as any)

const PdRoute = PdImport.update({
    path: '/mentors',
    getParentRoute: () => rootRoute,
  } as any)

  const ContactRoute = ContactImport.update({
    path: '/contact',
    getParentRoute: () => rootRoute,
  } as any)
// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/mentors': {
      preLoaderRoute: typeof PdImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
        preLoaderRoute: typeof ContactImport
        parentRoute: typeof rootRoute
      }
  }
}

export const routeTree = rootRoute.addChildren([IndexRoute, AboutRoute, ContactRoute, PdRoute])
