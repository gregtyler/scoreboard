import "./navigation.css";

import Icon from "../Icon";
import NavigationTrayLink from "./NavigationTrayLink";

const NavigationTray = () => {
  return (
    <nav className="c-navigation-tray">
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
