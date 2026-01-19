import "./navigation.css";

import Icon from "../Icon";
import NavigationTrayLink from "./NavigationTrayLink";
import { useEffect, useRef, useState } from "react";

const NavigationTray = () => {
  const [isHide, setHide] = useState(false);
  let prev = 0;

  const hideBar = () => {
    setHide(window.scrollY > prev);
    prev = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", hideBar);

    return () => {
      window.removeEventListener("scroll", hideBar);
    };
  }, []);

  return (
    <nav className="c-navigation-tray" hidden={isHide}>
      <NavigationTrayLink to="/">
        <span className="c-navigation-tray__icon o-interactive">
          <Icon>group</Icon>
        </span>
        Sessions
      </NavigationTrayLink>
      <NavigationTrayLink to="/games">
        <span className="c-navigation-tray__icon o-interactive">
          <Icon>casino</Icon>
        </span>
        Games
      </NavigationTrayLink>
      <NavigationTrayLink to="/settings">
        <span className="c-navigation-tray__icon o-interactive">
          <Icon>settings</Icon>
        </span>
        Settings
      </NavigationTrayLink>
    </nav>
  );
};

export default NavigationTray;
