import Link from 'next/link';
import pravassa from "next/image"
const Navbar = () => {
  return (
    <>
    {/* primary navbar with all the other pages */}
    <nav className="bg-black p-1">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <img src='./images/pravaasa.png' alt='companylogo' width={70}/>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
          <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
