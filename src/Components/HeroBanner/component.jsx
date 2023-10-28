import './styles.css';
import 'animate.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import girl from "../../../src/assets/images/girl.png";

export default function Banner() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="background"
      >
        <div className="parent">
          <div
            ref={ref}
            className={`text-element ${
              inView ? "animate__animated animate__fadeInUp" : "hide"
            }`}
          >
            <h2 ref={ref}>Find Your Tribe</h2>
            <section>
              <p>
                Cities provide opportunities to explore an abundance of
                different cuisines, festivals, and art forms.
              </p>
              <p>
                Opportunities to make new friends and connect with like-minded
                individuals await.
              </p>
            </section>
          </div>
          <div className="image-element">
            <img
              ref={ref}
              className={
                inView
                  ? "animate__animated animate__fadeInRight brightness"
                  : ""
              }
              src={girl}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}



    