import { DotPattern } from "./Components/UI/DotPattern";
import NavBar from "./Components/Nav/NavBar";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
