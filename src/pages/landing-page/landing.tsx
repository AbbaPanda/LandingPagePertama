import Header from '../../components/layout/header';
import { PRIMARY_NAV_ITREMS } from '../../constant/header';
import HeroSection from '../../components/section/hero';

export const LandingPage = () => {
  return (
    <div>
      <Header navItems={PRIMARY_NAV_ITREMS} />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};
