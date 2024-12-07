import React, { Suspense } from "react";
import Loading from "./components/Loading";

const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Experience = React.lazy(() => import("./components/Experience"));
const Home = React.lazy(() => import("./components/Home"));
const NavBar = React.lazy(() => import("./components/NavBar"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Footer = React.lazy(() => import("./components/Footer"));
const SocialLinks = React.lazy(() => import("./components/SocialLinks"));

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('bg-img.png')`,
      }}
    >
      <Suspense fallback={<Loading />}>
        <NavBar />
        <main className="space-y-16 px-4 sm:px-6 md:px-8 lg:px-16 ">
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />
        </main>
        <SocialLinks />
      </Suspense>
    </div>
  );
}

export default App;
