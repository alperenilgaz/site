import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import Header from "./Components/Header/Header.jsx";
import Card from "./Components/Card/Card.jsx";
import SocialMedia from "./Components/SocialMedia/SocialMedia.jsx";

function App() {
  // Geçerli bir varsayılan tema belirleyin (boş string yerine "light")
  const getStoredTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(getStoredTheme);

  const changeTheme = (newTheme) => {
    const previousTheme = localStorage.getItem("theme");
    if (previousTheme) {
      document.body.classList.remove(previousTheme);
    }
    if (newTheme) {
      document.body.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  return (
    <>
      <div className="theme-button">
        <input
          checked={theme === "dark"}
          type="checkbox"
          id="darkmode-toggle"
          readOnly
        />
        <label
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          htmlFor="darkmode-toggle"
        >
          <div className="moon">
            <FaMoon />
          </div>
          <div className="sun">
            <GoSun />
          </div>
        </label>
      </div>

      <div className="content">
        <Header />
        <Card />
        <SocialMedia />
      </div>
    </>
  );
}

export default App;
