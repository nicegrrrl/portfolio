import { createContext, useEffect, useState } from "react";
import { ChildrenProps } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }: ChildrenProps) => {
  const routes = ["/", "/about", "/stacks", "/tools", "/projects", "/contact"];
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
  }, [currentIndex, navigate, routes]);

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
