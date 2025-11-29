import React from "react";
import ReactDOM from "react-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  coords?: DOMRect;
};

export const Modal = ({ isOpen, onClose, children, coords }: Props) => {
  if (!isOpen) return null;

  const style: React.CSSProperties = {
    position: "absolute",
    top: coords ? coords.bottom + window.scrollY : 100,
    left: coords ? coords.left + window.scrollX : 100,
    border: "2px solid red",
    background: "white",
    padding: "0.5rem",
    zIndex: 1000
  };

  return ReactDOM.createPortal(
    <div style={style} onClick={onClose}>
      {children}
    </div>,
    document.body
  );
};
