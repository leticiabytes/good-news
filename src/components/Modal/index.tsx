/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import {
  Tooltip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@material-ui/core';
import { FiXCircle } from 'react-icons/fi';

// import { useStyles } from './styles';

interface IModalProps {
  children: any;
  title: string;
  icon: any;
}
const Modal: React.FC<IModalProps> = ({ children, icon, title }) => {
  // const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <Tooltip title={title}>
        <IconButton onClick={handleModal}>
          {/* // className={classes.iconButtonClose}> */}
          {icon}
        </IconButton>
      </Tooltip>
      <Dialog
        // className={classes.modal}
        open={open}
        onClose={handleModal}
        scroll="paper"
      >
        <DialogTitle>
          {title}
          <IconButton
            aria-label="close"
            className="iconButtonClose"
            onClick={handleModal}
          >
            <FiXCircle />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers style={{ overflowX: 'hidden' }}>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
};
export default Modal;
