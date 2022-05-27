export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-2 text-green-500 bg-white border-2">
      <h1 className="ml-4 text-2xl font-medium hover:cursor-pointer">
        Finance App
      </h1>
      <ul className="flex gap-10">
        <li className="hover:underline hover:cursor-pointer">
          <p>Dashboard</p>
        </li>
        <li className="hover:underline hover:cursor-pointer">
          <p>About</p>
        </li>
        <li className="hover:underline hover:cursor-pointer">
          <p>Account</p>
        </li>
        <li className="hover:underline hover:cursor-pointer">
          <p>Wallet</p>
        </li>
      </ul>
      <a
        className="px-3 py-2 mr-4 text-white bg-green-500 rounded"
        href="/"
        type="button"
      >
        Sign In
      </a>
    </nav>
  )
}
