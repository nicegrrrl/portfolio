import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { MdOutlineDarkMode, MdLightbulbOutline } from "react-icons/md";

export const DarkMode = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const selectedTheme = localStorage.getItem("@alanaDev:theme");
    if (selectedTheme === "dark") {
      setTheme("dark");
      document.querySelector("body")?.setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body")?.setAttribute("data-theme", "light");
      setTheme("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("@alanaDev:theme", newTheme);
  };

  return (
    <>
      <div className={styles.dark_mode}>
        <input
          className={styles.dark_mode_input}
          type="checkbox"
          id="darkmode-toggle"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <label className={styles.dark_mode_label} htmlFor="darkmode-toggle">
          {theme === "dark" ? (
            <MdOutlineDarkMode className={styles.moon} />
          ) : (
            <MdLightbulbOutline className={styles.sun} />
          )}
        </label>
      </div>
    </>
  );
};
