import { Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import LandingPage from '../../pages/home/LandingPage';
import Home from '../../pages/home/Home';
// import { ProtectedRoutes } from './protectedRoutes';
// import { PublicRoutes } from './publicRoutes';
// import { AuthenticationRoutes } from './authenticationRoutes';
// import { LandingPage } from '../pages/landingPage/landingPage';
// import Signup from '../pages/Onboard/Signup';
// // import Login from '../pages/Onboard/Login';
// import ForgetPassword from '../pages/Onboard/ForgetPassword';
// // import OTP from '../pages/Onboard/OTP';
// // import CreatePassword from '../pages/Onboard/CreatePassword';
// import Dashboard from '../pages/Dashboard/Dashboard';
// import Event from '../pages/Events/Event';
// import History from '../pages/History/History';
// import Settings from '../pages/Settings/Settings';
// import Ticket from '../pages/Ticket/Ticket';
// import Reward from '../pages/Reward/Reward';
// import Eventforum from '../pages/Events/Eventforum';
// import Explore from '../pages/Events/Explore';
// import Search from '../pages/Dashboard/Search';
// // import Myevents from "../pages/Events/Myevents";
// import Pricing from '../pages/pricing/Pricing';
// import AboutUs from '../pages/aboutUs/AboutUs';
// // import Blog from '../pages/blog/Blog';
// import Explorer from '../pages/Explore/Explorer';
// import EventDetailsPage from '../pages/Explore/EventDetailsPage';
// import EventPaymentDetailsPage from '../pages/Explore/EventPaymentDetailsPage';
// import ContactUs from '../pages/ContactUs/ContactUs';
// import Paystack from '../pages/paystack/Paystack';
// // import Pricing from "../pages/pricing/pricing";

export const GeneralRoute = () => {
  return (
    <>
    <Routes>
      {/* <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route path="welcome" element={<Dashboard />} />
        <Route path="events" element={<Event />}>
          <Route path="forum" element={<Eventforum />} />
          <Route path="explore" element={<Explore />} />
          <Route path="myevents" element={<Myevents />} />
        </Route>
        <Route path="history" element={<History />} />
        <Route path="settings" element={<Settings />} />
        <Route path="tickets" element={<Ticket />} />
        <Route path="rewards" element={<Reward />} />
        <Route path="search" element={<Search />} />
      </Route> */}

      <Route path="" element={<PublicRoutes />}>
         <Route path="/" element={<Home />} />
        {/*<Route path="/buy-ticket" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/explore" element={<Explorer />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route
          path="/events/payment/:id"
          element={<EventPaymentDetailsPage />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/event/paystack" element={<Paystack />} /> */}
      </Route>

      {/* <Route element={<AuthenticationRoutes />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/verification" element={<OTP />} />
        <Route path="/createpassword" element={<CreatePassword />} />
      </Route> */}
    </Routes>
    </>
  );
};
