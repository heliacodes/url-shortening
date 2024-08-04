import { footerLinks } from "../utils/data";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-veryDarkViolet min-h-36">
      <div className="container flex-center max-sm:flex-col sm:items-baseline sm:justify-between gap-3 py-5">
        <strong className="text-white text-2xl sm:text-xl pb-4">Shortly</strong>

        {footerLinks.map((item) => (
          <div key={item.id} className="text-center">
            <h6 className="text-sm text-white font-semibold pb-2">
              {item.title}
            </h6>
            <ul className="flex flex-col gap-2">
              {item.links.map((link) => (
                <li key={link} className="text-white text-xs font-light">
                  <a href="" className="hover:text-cyan transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <ul className="flex gap-3 text-white pb-5 pt-2">
          <li className="hover:text-cyan duration-200 cursor-pointer">
            <FaFacebookSquare />
          </li>
          <li className="hover:text-cyan duration-200 cursor-pointer">
            <FaTwitter />
          </li>
          <li className="hover:text-cyan duration-200 cursor-pointer">
            <FaPinterest />
          </li>
          <li className="hover:text-cyan duration-200 cursor-pointer">
            <FaInstagram />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
