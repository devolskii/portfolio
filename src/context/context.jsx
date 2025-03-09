import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  //   const openSidebar = () => setIsSidebarOpen(true);
  //   const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <GlobalContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};
