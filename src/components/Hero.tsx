import { ChevronRight, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import TextType from "./reactBits/TextType";
import RotatingText from "./reactBits/RotatingText";
import GradientText from "./reactBits/GradientText";
import eups from "../assets/images/EUPS.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative z-10"
    >
      <div className="flex items-center absolute top-50">
        <ChevronRight />
        <TextType
          text={["Hello, world! Eu sou"]}
          typingSpeed={50}
          pauseDuration={150000}
          showCursor={true}
          cursorCharacter="|"
          className="text-primary text-xl"
        />
      </div>

      <div className="flex flex-col items-center relative z-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GradientText
            colors={["white", "#00ff88", "white", "#00ff88", "white"]}
            animationSpeed={3}
            showBorder={false}
            className="text-6xl md:text-8xl text-center font-bold mb-6"
          >
            Eduardo Ulisses
          </GradientText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <RotatingText
            texts={[
              "Desenvolvedor Full Stack em formação",
              "Engenharia de Software",
              "Happy coding!",
            ]}
            mainClassName="text-xl md:text-2xl text-muted-foreground overflow-hidden"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={5000}
          />
        </motion.div>
        <motion.div
          className="flex gap-6 justify-center mt-12 pointer-events-auto"
        >
          <motion.a
            href="https://github.com/UlissesE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-secondary/70 hover:bg-primary/10 border-2 border-border rounded-lg transition-all hover:border-primary hover:scale-105 group"
            initial={{opacity: 0}}
            animate= {{opacity: 1}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
            <span className="group-hover:text-primary transition-colors">
              GitHub
            </span>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/eduardo-ulisses"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-secondary/70 hover:bg-primary/10 border-2 border-border rounded-lg transition-all hover:border-primary hover:scale-105 group"
            initial={{opacity: 0}}
            animate= {{opacity: 1}}
            transition={{ duration: 0.8, delay: 1.4}}
          >
            <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
            <span className="group-hover:text-primary transition-colors">
              LinkedIn
            </span>
          </motion.a>
        </motion.div>
      </div>
      <motion.img
        src={eups}
        alt=""
        className="absolute h-80 top-55 z-4 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3}}
        transition={{ duration: 1, delay: 1 }}
      />
    </section>
  );
}
