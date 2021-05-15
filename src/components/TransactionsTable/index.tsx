import { Container } from './styles'

export function TransactionsTable() {
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
          <tr>
            <td>Website development</td>
            <td className="deposit">€1000</td>
            <td>Freelancer</td>
            <td>04/05/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw" >- €800</td>
            <td>Housing</td>
            <td>07/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}