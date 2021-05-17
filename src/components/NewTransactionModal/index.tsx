import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"  
    >

      <button type="submit" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Close" />
      </button>

      <Container>
        <h2>Add Transaction</h2>
        
        <input type="text" placeholder="Title"/>

        <input type="number" placeholder="Value"/>

        <input type="text" placeholder="Category"/>

        <button type="submit">
          Add transaction
        </button>
      </Container>
    </Modal>
  )
}