import { createContext, useEffect, useState } from "react";
import { ChildrenProps } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({});

const routes = ["/", "/about", "/stacks", "/tools", "/projects", "/contact"];

export const GlobalProvider = ({ children }: ChildrenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0 && currentIndex !== routes.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        navigate(routes[currentIndex + 1]);
      } else if (event.deltaY < 0 && currentIndex !== 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        navigate(routes[currentIndex - 1]);
      }
    };

    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex, navigate]);

  return (
    <GlobalContext.Provider value={{ currentIndex, setCurrentIndex, routes }}>
      {children}
    </GlobalContext.Provider>
  );
};
