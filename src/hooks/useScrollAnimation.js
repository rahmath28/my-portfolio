import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  if (inView) {
    controls.start("visible");
  }

  return { ref, controls };
};
