import incomesImg from '../../assets/income.svg'
import expensesImg from '../../assets/outcome.svg'
import balanceImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'

import { Container } from './styles'

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.value
      acc.total += transaction.value
    } else {
      acc.withdraws += transaction.value
      acc.total -= transaction.value
    }

    return acc
  } , {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomesImg} alt="incomes" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-ie', {
              style: 'currency',
              currency: 'EUR'
            }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Expenses</p>
          <img src={expensesImg} alt="expenses" />
        </header>
        <strong>
          - {new Intl.NumberFormat('en-ie', {
              style: 'currency',
              currency: 'EUR'
            }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Balance</p>
          <img src={balanceImg} alt="balance" />
        </header>
        <strong>
         {new Intl.NumberFormat('en-ie', {
            style: 'currency',
            currency: 'EUR'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}