import { Container } from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext'

export function TransactionsTable() {
  const transactions = useContext(TransactionsContext)
  
  return (
    <Container >
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('en-ie', {
                  style: 'currency',
                  currency: 'EUR'
                }).format(transaction.value)}
              </td>
              <td>{transaction.category}</td>
              <td> 
                {new Intl.DateTimeFormat('en-ie').format(
                  new Date(transaction.createdAt)
                )}
              </td>
          </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}