import { Children, ReactNode, useState } from "react";
import "./tabs.css";

interface Props {
  tabs: string[];
  children: ReactNode;
}

const Tabs = ({ children, tabs }: Props) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div>
      <div className="c-tabs__container">
        {tabs.map((label, index) => (
          <div
            className={`c-tabs__item o-interactive ${
              index === currentTab ? "o-interactive--active" : ""
            }`}
            key={index}
            onClick={() => setCurrentTab(index)}
          >
            {label}
          </div>
        ))}
      </div>
      {Children.toArray(children).map((child, index) => (
        <div
          className="c-tabs__panel"
          key={index}
          hidden={index !== currentTab}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
