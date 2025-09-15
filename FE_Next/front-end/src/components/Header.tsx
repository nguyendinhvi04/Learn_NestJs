import Navbar from "./Navbar";

import { MapPin, Search } from "lucide-react";

export default function Header(){

    return (
        <>
    <header className="bg-[#051622] text-white px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="tracking-widest">VILAND</span>
      </div>
      {/* Nav */}
        <Navbar />
      {/* Actions */}
      <div className="flex items-center space-x-6">
        <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
          <MapPin size={18} /> <span className="text-sm">Tìm Đại Lý</span>
        </a>
        <button className="hover:text-gray-300 flex items-center space-x-1">
          <Search size={18} /> <span className="text-sm">Search</span>
        </button>
      </div>
    </header>
        </>
    )
}