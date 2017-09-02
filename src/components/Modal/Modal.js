// @flow

import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import './Modal.css';

type Props = {
  children?: React$Node,
  isOpen: boolean,
  onRequestClose: () => void,
};

const Modal = (props: Props) => (
  <ReactModal
    isOpen={props.isOpen}
    className="modal-content"
    overlayClassName="modal-overlay"
    contentLabel="Modal"
    onRequestClose={props.onRequestClose}
  >
    {props.children}
  </ReactModal>
);

export default Modal;
