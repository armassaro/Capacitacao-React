import Avatar from "@/assets/avatar.jpeg";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export const Banner = () => {
  return (
    <section 
    className="section flex items-center h-screen max-h-screen overflow-hidden" 
    id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 md:flex-row md:items-center md:gap-x-20 ">
          <div className="flex-1 text-center font-secondary md:text-left">
            <motion.div
              variants={fadeIn("up", 0.3)}
              whileInView={"show"}
              initial="hidden"
              viewport={{ once: false, amount: 0.7 }}
            >
              <h1 className="text-4xl font-bold lg:text-7xl">
                Tutu<span> Da Massa</span>
              </h1>
              <div className="mb-6 text-4xl lg:text-6xl font-semibold uppercase overflow-hidden max-w-full">
                <span 
                className="text-white relative group">
                  desenvolvedor
                  <div className="aboslute bottom-2 left-0 w-0 h-[5px] 
                  rounded-xl bg-white group-hover:w-full ease-in-out transition-all
                  duration-300 from-0% to-100% bg-gradient-to-r from-slate-400"/>
                  </span>{" "}
                <p>
                  <TypeAnimation
                    className="text-accent"
                    sequence={["O mais brabo", 1000, "Paladino do front", 1000, "Aspirante ao Olimpo", 1000]}
                    speed={50}
                    wrapper="aside"
                    repeat={Infinity}
                  />
                </p>
              </div>
            </motion.div>
            <p
            >
              Não preciso de descrição.
            </p>

            <motion.div
              variants={fadeIn("up", 0.5)}
              whileInView={"show"}
              initial="hidden"
              className="flex items-center gap-x-3 max-w-max mx-auto md:mx-0 mt-5 mb-5"
            >
              <button className="btn btn-lg hover:animate-pulse"><a href="mailto:arthurromano@therionej.com.br">Entre em contato</a></button>
              <a className="text-gradient btn-link" href="https://arcseedai.com" target="_blank">
                Meu portifolio
              </a>
            </motion.div>
            <div className="flex gap-x-2 max-w-max mx-auto md:mx-0">
              <a href="https://github.com/mariaeduardapedroso" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/maria-eduarda-pedroso-7671951b2/" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/mariaeduarda.pedroso.397" target="_blank">
                <FaFacebook />
              </a>
            </div>
          </div>
          {/* IMAGE */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            whileInView={"show"}
            initial="hidden"
            viewport={{ once: false, amount: 0.7 }}
            className="hidden md:flex flex-1 justify-center"
          >
            <img 
            src={Avatar} 
            alt="" 
            className="object-cover rounded-xl size-[30vw]" />
            <div 
            className="absolute top-[2%] "/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
