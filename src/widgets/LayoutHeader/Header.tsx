import React from "react";
import { ButtonModal } from "../../shared/ui/Button/ButtonModal";

type Props = {
  onOpenModal?: () => void;
};

function Header({ onOpenModal }: Props) {
  return (
    <header>
      <h1>Header (заглушка)</h1>
      {onOpenModal && <ButtonModal onClick={onOpenModal}>О проекте</ButtonModal>}
    </header>
  );
}

export default Header;
