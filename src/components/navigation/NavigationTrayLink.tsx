import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

const NavigationTrayLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`c-navigation-tray__item ${
        match ? "o-interactive--active" : ""
      }`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavigationTrayLink;
