import { ReactNode } from "react";
type ModalWindowProps = {
  children: ReactNode;
};
const ModalWindow: React.FC<ModalWindowProps> = ({ children }) => {
  return <div>{children}</div>;
};
