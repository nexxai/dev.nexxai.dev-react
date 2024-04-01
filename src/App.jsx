import { DotPattern } from "./Components/UI/DotPattern";
import NavBar from "./Components/Nav/NavBar";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Konami from "react-konami-code";
import { SpotlightButton } from "./Components/UI/SpotlightButton";

import About from "./Pages/About";
import CV from "./Pages/CV";
import Projects from "./Pages/Projects";
import Uses from "./Pages/Uses";

const pageVariants = {
  initial: {
    opacity: 0,
    y: "30%",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.25,
};

const PageLayout = ({ children }) => children;
const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

function App() {
  return (
    <>
      <div className="mx-auto min-w-screen">
        <DotPattern
          size={32}
          radius={1.5}
          offset-x={0}
          offset-y={0}
          className="absolute top-0 h-1/2 w-full fill-white/10 [mask-image:radial-gradient(white,transparent_85%)]"
        />

        <nav className="flex justify-center p-8 print:hidden">
          <NavBar />
        </nav>

        <div className="flex justify-center relative">
          <Konami code={[78, 69, 88, 88, 65, 73]}>
            <SpotlightButton
              as="a"
              href="https://github.com/nexxai/dev.nexxai.dev-react"
            >
              <span className="relative mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text font-mona text-lg font-medium text-transparent transition-all duration-200">
                This site's Github repo
              </span>
            </SpotlightButton>
          </Konami>
        </div>

        <Routes>
          <Route element={<AnimationLayout />}>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/uses" element={<Uses />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
