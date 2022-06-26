import "./modal.css";

import { HTMLAttributes, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "../button/Button";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  buttons?: ReactNode;
}

const Modal = ({
  buttons,
  title,
  children,
  onClose,
  open,
  ...props
}: Props) => {
  const container = useRef(document.createElement("div"));
  const id = Math.random().toString(36).substring(2);

  useEffect(() => {
    document.body.appendChild(container.current);
    return () => {
      document.body.removeChild(container.current);
    };
  }, []);

  return createPortal(
    open ? (
      <>
        <div className="c-modal__backdrop" onClick={onClose}></div>
        <dialog
          className="c-modal"
          aria-describedby={`${id}-label`}
          open
          {...props}
        >
          <form>
            <div className="c-modal__content">
              <h2 className="c-modal__title headline-small" id={`${id}-label`}>
                {title}
              </h2>
              {children}
            </div>
            <div className="c-modal__buttons">
              {buttons || <Button onClick={onClose}>Close</Button>}
            </div>
          </form>
        </dialog>
      </>
    ) : null,
    container.current
  );
};
export default Modal;
