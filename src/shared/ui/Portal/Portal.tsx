import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
  container?: HTMLElement;
}

const _container = document.getElementById('root') as HTMLElement;

export const Portal = (props: PortalProps) => {
    const {
        children,
        container = _container,
    } = props;

    return createPortal(children, container);
};
