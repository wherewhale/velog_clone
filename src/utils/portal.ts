import { ReactNode, ReactPortal } from 'react';
import ReactDOM from 'react-dom';

export interface Props {
  children: ReactNode;
  container: Element | null;
}

const ModalPortal = ({ children, container }: Props): ReactPortal | null => {
  if (!container) return null;

  return ReactDOM.createPortal(children, container);
};

export default ModalPortal;
