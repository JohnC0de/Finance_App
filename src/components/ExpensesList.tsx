import { useEffect, useState } from 'react'

export type ExpensesType = {
  id?: number
  card: string
  description: string
  value: number
  paidInstallments: number
  totalInstallments: number
}

export function ExpensesList() {
  const [expensesList, setExpensesList] = useState([] as ExpensesType[])
  useEffect(() => {
    const fetchExpensesList = async () => {
      const data = await fetch('http://localhost:4000/expenses')
      const json = await data.json()
      setExpensesList(json)
    }
    fetchExpensesList()
  }, [])

  const total = expensesList
    .map(expense => Number(expense.value))
    .reduce((total, num) => {
      return total + num
    }, 0)

  return (
    <>
      <div></div>
      <table className="border">
        <thead className="border">
          <tr>
            <th className="border">Card</th>
            <th className="border">Description</th>
            <th className="border">Value</th>
            <th className="border">Paid Inst.</th>
            <th className="border">Total Inst.</th>
          </tr>
        </thead>
        <tbody>
          {expensesList.map((expense, index) => (
            <tr key={index}>
              {Object.values(expense).map((property, index) => (
                <td key={index} className="border">
                  {property}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total of expenses:</td>
            <td></td>
            <td className="border-x">{total}</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}
