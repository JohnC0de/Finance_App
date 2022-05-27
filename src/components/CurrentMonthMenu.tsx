import { useState } from 'react'

interface Expenses {
  id: number
  card: string
  desc: string
  value: number
  paidInstallments: number
  totalInstallments: number
}

const cards = [
  'Nubank',
  'Banco Inter',
  'Pan Zero',
  'XP Infinite',
  'C6 Bank',
  'Buscapé',
  'PicPay',
  'Neon',
  'Next',
  'Credicard Platinum',
  'Pão de Açúcar Internacional',
  'Samsung Itaucard',
  'Digio',
  'Caixa Sim',
  'PagBank',
  'BMG Mastercard',
  'Banco Original',
  'Saraiva',
  'Magalu',
  'Petrobras',
  'Digi+ Visa',
  'Itaucard Click',
  'Iti Itaú',
  'Rappi Gold',
  'ModalMais Internacional',
  'BTG+ Gold',
  'Santander SX',
  'Carrefour',
  'Bradesco Neo'
]

export function CurrentMonthMenu() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <form
      className="flex flex-col items-center justify-center gap-2 p-8 border"
      onSubmit={handleSubmit}
    >
      <input className="p-1 border" type="text" placeholder="Card" />
      <label htmlFor="cards">Cards</label>
      <select className="p-1 border" name="cards" id="cards">
        {cards.map(card => (
          <option value={card.replace(' ', '').toLowerCase()}>{card}</option>
        ))}
      </select>
      <input className="p-1 border" type="text" placeholder="Description" />
      <input className="p-1 border" type="text" placeholder="Value" />
      <input
        className="p-1 border"
        type="text"
        placeholder="Paid Installments"
      />
      <input
        className="p-1 border"
        type="text"
        placeholder="Total Installments"
      />
      <button className="p-1 border" type="submit">
        Submit
      </button>
    </form>
  )
}
