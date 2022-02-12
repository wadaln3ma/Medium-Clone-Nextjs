
import Link from "next/link"

const Header = ()=>{
  return (
    <header className="sticky top-0 bg-white flex max-w-7xl mx-auto justify-between p-5">
      <div className="flex space-x-5 items-center">
        <Link href={'/'}>
            <img alt="logo" src="/images/medium-logo.png" className="cursor-pointer w-40 object-contain" />
        </Link>

        <div className="hidden md:inline-flex items-center space-x-5">
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className="bg-green-600 text-white px-4 py-1 rounded-full">Follow</h3>
         </div>

      </div>

      <div className="flex items-center text-green-600 space-x-5">
        <h3>Sign In</h3>
        <h3 className="border border-green-600 px-4 py-1 rounded-full">Get Started</h3>
      </div>
    </header>
)}

export default Header
