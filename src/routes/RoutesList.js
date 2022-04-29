import { lazy } from 'react';

const LandingPage = lazy(() => import('../components/LandingPage'));
const BeerGrid = lazy(() => import('../components/BeerGrid'));
const Accordion = lazy(() => import('../components/accordion/Accordion'));

const routes = [
  {
    path: '/',
    component: LandingPage,
    exact: true,
  },
  {
    path: '/grid',
    component: BeerGrid,
  },
  {
    path: '/accordion',
    component: Accordion,
  },
];

export { routes };
