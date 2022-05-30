export type ExpensesType = {
  id: number
  card: string
  desc: string
  value: number
  paidInstallments: number
  totalInstallments: number
}

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
  function handleSubmit(e: any) {
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <form
      className="flex flex-wrap items-center justify-center border"
      onSubmit={handleSubmit}
    >
      <label htmlFor="cards">Cards</label>
      <select className="w-32 p-1 border" name="cards" id="cards">
        {cards.map((card, index) => (
          <option key={index} value={card.replace(' ', '').toLowerCase()}>
            {card}
          </option>
        ))}
      </select>
      <input
        className="w-32 p-1 border"
        type="text"
        placeholder="Description"
      />
      <input className="w-20 p-1 border" type="text" placeholder="Value" />
      <input
        className="w-20 p-1 border"
        type="text"
        placeholder="Paid Installments"
      />
      <input
        className="w-20 p-1 border"
        type="text"
        placeholder="Total Installments"
      />
      <button className="p-1 border" type="submit">
        Submit
      </button>
    </form>
  )
}
