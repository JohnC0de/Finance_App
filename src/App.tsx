import { useState } from 'react'
import { CurrentMonthMenu } from './components/CurrentMonthMenu'
import { ExpensesList } from './components/ExpensesList'
import { FixedMonthlyMenu } from './components/FixedMonthlyMenu'

enum ExpensesTabs {
  currentMonth = 'Expenses of current month',
  fixedMonthly = 'Fixed Monthly Expenses'
}

export function App() {
  const [currentExpenseTab, setCurrentExpenseTab] = useState(
    ExpensesTabs.currentMonth
  )

  const expensesTabs = Object.values(ExpensesTabs)

  return (
    <div className="p-4 bg-white border-2">
      <div>
        {expensesTabs.map((expenseTab, index) => (
          <button
            onClick={() => setCurrentExpenseTab(expenseTab as ExpensesTabs)}
            key={index}
            className="p-1 border"
          >
            {expenseTab}
          </button>
        ))}
      </div>
      <div>
        {currentExpenseTab === ExpensesTabs.currentMonth ? (
          <CurrentMonthMenu />
        ) : (
          <FixedMonthlyMenu />
        )}
      </div>
      <div>
        <ExpensesList />
      </div>
    </div>
  )
}
