import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import "./App.css";

// Layout
import MainLayout from "./layouts/MainLayout";

// Lazy-loaded Page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Properties = lazy(() => import("./pages/Properties"));
const PropertyDetails = lazy(() => import("./pages/PropertyDetails"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));
import Loader from "./components/kit/Loader";
import AOS from 'aos'
import 'aos/dist/aos.css'

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/properties", element: <Properties /> },
  { path: "/properties/:id", element: <PropertyDetails /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
  { path: "/terms", element: <Terms /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/testimonials", element: <Testimonials /> },
  { path: "/faq", element: <FAQ /> },
];

function App() {
  useEffect(() => {
    AOS.init({duration :1000 ,easing:"ease"});
  },[])
  return (
    <Router>
      <ScrollToHash /> 
      <Suspense
        fallback={
          <div className="fixed inset-0 z-[1000] grid place-items-center bg-Grey-08/60 backdrop-blur-sm">
            <Loader />
          </div>
        }
      >

        <Routes>
          {/* Main layout wrapper */}
          <Route element={<MainLayout />}>
            {routes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Route>

          {/* 404 route (outside layout) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
};
