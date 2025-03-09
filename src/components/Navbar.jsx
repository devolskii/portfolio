import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { toggleSidebar } = useGlobalContext();
  return (
    <header className=" bg-blood h-17 fixed top-0 w-full">
      <nav className="h-full lg:mx-auto lg:w-2/3 px-4 flex justify-between items-center">
        <a
          href="#"
          className="font-lp text-4xl hover:underline underline-offset-4 cursor-pointer"
        >
          devolskii
        </a>
        <button
          className="border-none bg-none text-4xl cursor-pointer lg:hidden"
          onClick={toggleSidebar}
        >
          <GiHamburgerMenu />
        </button>
        <div className="max-lg:hidden uppercase text-3xl flex justify-end gap-x-8">
          <a className=" hover:underline underline-offset-4 cursor-pointer">
            Blog
          </a>
          <a
            href="#projects"
            className=" hover:underline underline-offset-4 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            className=" hover:underline underline-offset-4 cursor-pointer"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
