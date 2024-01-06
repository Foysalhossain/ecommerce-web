import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";


const DarkMode = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme]);

    // button handle
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    return (
        <div>
            <MdLightMode onClick={handleThemeSwitch} className={` cursor-pointer ${theme === "dark" ? "hidden" : "opacity-100"}`} />

            <MdNightlight onClick={handleThemeSwitch} className={`cursor-pointer ${theme === "light" ? "hidden" : "opacity-100"}`} />
        </div>
    );
};

export default DarkMode;