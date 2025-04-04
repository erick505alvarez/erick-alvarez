import React, { createContext, useContext, useState } from "react";

import { PAGES } from "../types";

type PagesType = keyof typeof PAGES;

interface DesignContextType {
  currentPage: PagesType;
  setCurrentPage: React.Dispatch<PagesType>;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

interface DesignProviderProps {
  children: React.ReactNode;
}

export const DesignProvider = ({ children }: DesignProviderProps) => {
  const [currentPage, setCurrentPage] = useState<PagesType>(PAGES.HERO);

  return (
    <DesignContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </DesignContext.Provider>
  );
};

export const useDesignContext = () => {
  const context = useContext(DesignContext);
  if (!context)
    throw Error("useDesignContext must be used inside of DesignProvider");
  return context;
};
