import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, NewTransactionType, RadioBox } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/outcome.svg'
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = [
      title,
      value,
      type,
      category
    ]

    api.post('/transactions', data)
  }
  
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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Add Transaction</h2>
        
        <input 
          type="text" 
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number" 
          placeholder="Value"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <NewTransactionType>
          <RadioBox 
            type="button" 
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
              <img src={incomeImg} alt="Income" />
              <span>Income</span>
          </RadioBox>

          <RadioBox 
            type="button" 
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
              <img src={expenseImg} alt="Expense" />
              <span>Expense</span>
          </RadioBox>
        </NewTransactionType>

        <input 
          type="text" 
          placeholder="Category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Add transaction
        </button>
      </Container>
    </Modal>
  )
}