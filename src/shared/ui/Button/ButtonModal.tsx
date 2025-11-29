import React from "react";

type ButtonModalProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

export const ButtonModal = ({ onClick, children }: ButtonModalProps) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};
