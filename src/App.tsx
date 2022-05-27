import { useState } from 'react'
import { CurrentMonthMenu } from './components/CurrentMonthMenu'
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
      <div className="flex gap-2">
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
      {currentExpenseTab === ExpensesTabs.currentMonth ? (
        <CurrentMonthMenu />
      ) : (
        <FixedMonthlyMenu />
      )}
    </div>
  )
}
