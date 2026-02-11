import Navbar from "./Navbar";

import { MapPin, Search } from "lucide-react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function Header(){

    return (
        <>
    <header className="bg-[#051622] text-white px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="tracking-widest">VILAND CAR</span>
      </div>
      {/* Nav */}
        <Navbar />
      {/* Actions */}
      <div className="flex items-center space-x-6">
        <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
          <MapPin size={18} /> <span className="text-sm">Tìm Chi Nhánh</span>
        </a>
        <Button label="Đăng nhập"/>
      </div>
    </header>
        </>
    )
}