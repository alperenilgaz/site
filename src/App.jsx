import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import Header from "./Components/Header/Header.jsx";
import Card from "./Components/Card/Card.jsx";
import SocialMedia from "./Components/SocialMedia/SocialMedia.jsx";



function App() {
  const getStoredTheme = localStorage.getItem("theme") || "light"
  const [theme, setTheme] = useState(getStoredTheme)

  const changeTheme = (newTheme) => {
    const previuosTheme = localStorage.getItem("theme")
    if(previuosTheme){
      document.body.classList.remove(previuosTheme)
    }
    if(newTheme){
      document.body.classList.add(newTheme)
      localStorage.setItem("theme",newTheme)
    }
  }
  useEffect(() => {
    changeTheme(theme)
  },[theme])
  return (
    <>
     <div  className="theme-button">
      <input checked={theme === "dark"} type="checkbox" id="darkmode-toogle" />
      <label onClick={() => setTheme(theme==="dark" ? "light":'dark')} htmlFor="darkmode-toogle">
        <div className="moon">
          <FaMoon />
        </div>
        <div className="sun">
         <GoSun />
        </div>
      </label>
      
     </div>

     <div className="content">
        <Header/>
        <Card/>
        <SocialMedia/>
     </div>
    </>
  );
}

export default App;
