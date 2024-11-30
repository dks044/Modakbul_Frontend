import {ReactNode} from 'react';

export interface DialogProps {
  icon?: string;
  title?: string;
  content?: ReactNode;
  scrollArea?: ReactNode;
}
