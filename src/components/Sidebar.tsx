import { useGlobalContext } from "../context/context";

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "block" : "hidden"}>
      <div className="bg-blood px-2 mr-4 border-4 border-black fixed top-[4.25rem] w-2/5 h-1/4 right-0 uppercase text-2xl flex flex-col justify-around items-start">
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
    </aside>
  );
};
export default Sidebar;
