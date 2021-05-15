import incomesImg from '../../assets/income.svg'
import expensesImg from '../../assets/outcome.svg'
import balanceImg from '../../assets/total.svg'

import { Container } from './styles'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomesImg} alt="incomes" />
        </header>
        <strong>€1000,00</strong>
      </div>

      <div>
        <header>
          <p>Expenses</p>
          <img src={expensesImg} alt="expenses" />
        </header>
        <strong>- €500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Balance</p>
          <img src={balanceImg} alt="balance" />
        </header>
        <strong>€500,00</strong>
      </div>
    </Container>
  )
}