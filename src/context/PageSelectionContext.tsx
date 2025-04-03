import { createContext, useContext, useState, ReactNode } from "react";
import { pages } from "@/utils/constants";

type SelectionContextType = {
  selectedPages: Record<string, boolean>;
  togglePage: (name: string) => void;
  setAll: (checked: boolean) => void;
};

const PageSelectionContext = createContext<SelectionContextType | undefined>(undefined);

export const usePageSelection = () => {
  const context = useContext(PageSelectionContext);
  if (!context) {
    throw new Error("usePageSelection must be used within PageSelectionProvider");
  }
  return context;
};

export const PageSelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPages, setSelectedPages] = useState<Record<string, boolean>>(
    () =>
      pages.reduce((acc, page) => {
        if (page?.name) acc[page.name] = false;
        return acc;
      }, {} as Record<string, boolean>)
  );

  const togglePage = (name: string) => {
    setSelectedPages((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const setAll = (checked: boolean) => {
    const newState: Record<string, boolean> = {};
    pages.forEach((page) => {
      if (page?.name) newState[page.name] = checked;
    });
    setSelectedPages(newState);
  };

  return (
    <PageSelectionContext.Provider value={{ selectedPages, togglePage, setAll }}>
      {children}
    </PageSelectionContext.Provider>
  );
};
