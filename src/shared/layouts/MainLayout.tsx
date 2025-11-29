import React, { useState } from "react";
import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import { Modal } from "../ui/Modal/Modal";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>{children}</main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <h2>Информация о проекте</h2>
        </div>
      </Modal>
    </div>
  );
}

export default MainLayout;
