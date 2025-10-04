import type { Route } from './+types/home';
import LandingPage from '../landing-page/landing-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Workdey' },
    { name: 'description', content: 'Welcome to workdey!' },
  ];
}

export default function Home() {
  return <LandingPage />;
}
