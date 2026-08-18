import { createContext, useContext, useState, type ReactNode } from "react";

interface GlobalContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = () => {
  const ctx = useContext(GlobalContext);
  if (!ctx) throw new Error("useGlobalContext must be used within AppContext");
  return ctx;
};

export const AppContext = ({ children }: { children: ReactNode }) => {
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