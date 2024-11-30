import {defaultFont, subBrandColor} from '@/constants';
import {DialogProps} from '@/types/Dialog.types';
import React from 'react';
import {Dialog as CustomDialog, Dialog, Portal} from 'react-native-paper';
import styled from 'styled-components/native';
import Button from './Button';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  dialog: DialogProps;
}

// StyledModal 설정
const StyledCustomDialog = styled(CustomDialog)`
  background-color: ${subBrandColor};
  width: 300px;
  margin: auto;
`;

const DialogInitial = ({show, onClose, dialog}: ModalProps) => {
  return (
    <Portal>
      <StyledCustomDialog
        visible={show}
        onDismiss={onClose}
        dismissable={false}>
        {dialog?.icon && <Dialog.Icon icon={dialog.icon} />}
        <Dialog.Title
          style={{textAlign: 'center', fontFamily: `${defaultFont}`}}>
          {dialog?.title}
        </Dialog.Title>

        {dialog?.content && <Dialog.Content>{dialog?.content}</Dialog.Content>}
        {dialog?.scrollArea && (
          <Dialog.ScrollArea>{dialog?.scrollArea}</Dialog.ScrollArea>
        )}

        <Button onPress={onClose} title="닫기" />
      </StyledCustomDialog>
    </Portal>
  );
};

export default DialogInitial;
