import logo from "../../public/logo.svg";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const navLinks = ["Features", "Pricing", "Resources"];

  return (
    <header className="w-full py-10">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center justify-between gap-10">
          <img src={logo} alt="" height={50} width={100} />
          <ul className="max-sm:hidden flex items-center gap-7 justify-between text-gray text-sm">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-darkBlue transition-all">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-sm:hidden flex items-center gap-3">
          <a href="#" className="text-sm font-semibold text-gray">
            Login
          </a>
          <a href="#" className="button px-4 rounded-full">
            Sign Up
          </a>
        </div>

        <FiMenu color="gray" size={20} className="sm:hidden" />
      </nav>
    </header>
  );
};

export default NavBar;
