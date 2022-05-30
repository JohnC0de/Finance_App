import { SubmitHandler, useForm } from 'react-hook-form'
import { ExpensesType } from './ExpensesList'

const cards = [
  'Nubank',
  'C6 Bank',
  'XP',
  'Banco Inter',
  'Pan Zero',
  'Buscapé',
  'PicPay',
  'Neon',
  'Next',
  'Credicard',
  'Samsung Itaucard',
  'Digio',
  'PagBank',
  'Magalu',
  'Digi+ Visa',
  'Itaucard Click',
  'Iti Itaú',
  'Santander',
  'Bradesco Neo'
]

export function CurrentMonthMenu() {
  const { register, handleSubmit } = useForm<ExpensesType>()
  const onSubmit: SubmitHandler<ExpensesType> = async data => {
    const response = await fetch('http://localhost:4000/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (response.status === 200) {
      console.log('Data submitted', data)
    } else console.log('Something Went Wrong', response.status)
  }

  return (
    <form
      className="flex flex-wrap items-center justify-center border"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="cards">Cards</label>
      <select className="w-32 p-1 border" {...register('card')} id="cards">
        {cards.map((card, index) => (
          <option key={index} value={card}>
            {card}
          </option>
        ))}
      </select>

      <input
        className="w-32 p-1 border"
        {...register('description', { maxLength: 255, required: true })}
        type="text"
        placeholder="Description"
      />
      <input
        className="w-20 p-1 border"
        {...register('value', { min: 0, max: 999999999, required: true })}
        type="number"
        step="any"
        placeholder="Value"
      />
      <input
        className="w-20 p-1 border"
        {...register('paidInstallments', { min: 0, max: 99, required: true })}
        type="number"
        placeholder="Paid Installments"
      />
      <input
        className="w-20 p-1 border"
        {...register('totalInstallments', { min: 0, max: 99, required: true })}
        type="number"
        placeholder="Total Installments"
      />
      <button className="p-1 border" type="submit">
        Submit
      </button>
    </form>
  )
}
