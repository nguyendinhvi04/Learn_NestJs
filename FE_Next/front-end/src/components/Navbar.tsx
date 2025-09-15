

export default function Navbar() {

    return (
        <>
       <nav className="hidden md:flex space-x-8 text-sm font-medium">
      <a href="#" className="hover:text-gray-300">Các Loại Xe</a>
      <a href="#" className="hover:text-gray-300">Hỗ Trợ Mua Sắm</a>
      <a href="#" className="hover:text-gray-300">Tìm Kiếm Sản Phẩm</a>
      <div className="relative group">
        <button className="hover:text-gray-300">Sáng Kiến của Kia ▾</button>
        {/* Dropdown mẫu */}
        <div className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 px-4 rounded shadow-lg">
          <a href="#" className="block hover:text-red-600">Bền vững</a>
          <a href="#" className="block hover:text-red-600">Công nghệ</a>
        </div>
      </div>
      <a href="#" className="hover:text-gray-300">Chủ Sở Hữu</a>
    </nav>
        </>
    )
}