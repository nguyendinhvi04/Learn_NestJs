export default function Overview() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tổng quan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Tổng số xe</h3>
          <p className="text-2xl">10</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Tổng số người dùng</h3>
          <p className="text-2xl">50</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Lịch hẹn hôm nay</h3>
          <p className="text-2xl">5</p>
        </div>
      </div>
    </div>
  );
}
