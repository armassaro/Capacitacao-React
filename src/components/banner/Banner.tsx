import Avatar from "@/assets/avatar.jpeg";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useEffect, useRef, useState } from "react";

export const Banner = () => {
  const [iconHovered, setIconHovered] = useState<keyof typeof socialMedia | "">("");
  const ref = useRef(null);

  const socialMedia = {
    "github": {
      url: "https://github.com/armassaro",
      icon: <FaGithub/>
    },
    "facebook": {
      url: "https://google.com",
      icon: <FaFacebook/>
    },
    "linkedin": {
      url: "https://br.linkedin.com/in/arthur-romano-massaro-465a61264",
      icon: <FaLinkedin/>
    }
  }

  const [renderingUrl, setRenderingUrl] = useState(false);

  useEffect(() => {
    if(iconHovered === "") {
      const timer = setTimeout(() => {
        setRenderingUrl(false);
      }, 300);
      return () => clearTimeout(timer);
    }
    else {
      setRenderingUrl(true);
    }
  }, [iconHovered])

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
              <button className="btn btn-lg hover:animate-pulse transition-all"><a href="mailto:arthurromano@therionej.com.br">Entre em contato</a></button>
              <a className="text-gradient btn-link transition-all ease-in-out duration-300" href="https://arcseedai.com" target="_blank">
                Meu portifolio
              </a>
            </motion.div>
            <div 
            className="flex flex-col">
            <div 
            onMouseLeave={() => setIconHovered("")}
            className="flex gap-x-4 mx-auto md:mx-0 group relative min-w-[100%]">
              {Object.entries(socialMedia).map(([key, { url, icon }]) => (
                <div
                className={`
                ${iconHovered === key && `outline outline-[1px] outline-white outline-offset-2 rounded-sm`}`}>
                <a
                onMouseEnter={() => {setIconHovered(key)}}
                  key={key}
                  href={url}
                  target="_blank"
                  className={`transition-all ease-in-out duration-300 text-xl scale-100
                    ${iconHovered === "" ? `opacity-100` : 
                      iconHovered === key ? `opacity-100` : `opacity-0` }`}
                >
                  {icon}
                </a>
                </div>
              ))}
            </div>
            <div
            className="w-full h-[1px] relative">
            <div 
            className={`
            ${iconHovered !== "" ? `w-full opacity-100` : `w-0 opacity-0`}
            transition-all ease-in-out duration-300 border-b-[1px]
            border-solid border-white absolute text-nowrap top-0 flex
            `}>
              {socialMedia[iconHovered]?.url}<p className="text-transparent">.</p>
            </div>
            <p className="text-transparent opacity-0">text</p>
            </div>
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
