import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

type Props = {};

export const Footer = (props: Props) => {
  const styleLink = "cursor-pointer flex items-center gap-x-2 ease-in-out transition-colors duration-300 hover:text-[#ff00ff]";

  return (
    <footer className="shadow-lg py-16 w-full mt-16" id="footer">
      <div className="container mx-auto">
        <div className="flex lg:flex-row mb-10 justify-between">
          <div className="flex">
            <a href="" className="text-gradient">
              Tutu <br />
              <span className="text-white">Da Massa</span>
            </a>
          </div>
          <div className="flex flex-col lg:basis-1/2">
            <h3 className="h3">Front-end Developer</h3>
          </div>
          <div className="flex-col flex">
            <Link
              to="home"
              className={styleLink}
              activeClass="border-b text-accent"
              smooth={true}
              spy={true}
              offset={-200}
            >
              <BiHomeAlt />
              <span>Home</span>
            </Link>
            <Link
              to="about"
              className={styleLink}
              activeClass="border-b hover:text-accent ease-in-out transition-all duration-300"
              smooth={true}
              spy={true}
              offset={-200}
            >
              <BiUser />
              <span>Sobre</span>
            </Link>

            <Link
              to="services"
              className={styleLink}
              activeClass="border-b hover:text-accent ease-in-out transition-all duration-300"
              smooth={true}
              spy={true}
              offset={-200}
            >
              <BsClipboardData />
              <span>Seviço</span>
            </Link>

            <Link
              to="work"
              className={styleLink}
              activeClass="border-b hover:text-accent ease-in-out transition-all duration-300"
              smooth={true}
              spy={true}
              offset={-200}
            >
              <BsBriefcase />
              <span>Trabalho</span>
            </Link>
            <Link
              to="contact"
              className={styleLink}
              activeClass="hover:text-accent ease-in-out transition-all duration-300"
              smooth={true}
              spy={true}
              offset={-200}
            >
              <BsChatSquare /> <span>Contato</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
