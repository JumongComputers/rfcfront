import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import { Footer } from '../footer/Footer';
// import { Footer } from '../components/footer/footer';
// import { Header } from '../components/header/Header';
export const PublicRoutes = () => {
  return (
    <div>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
