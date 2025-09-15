'use client';

import { useEffect, useState } from 'react';

interface Appointment {
  id: number;
  date: string;
  user: string;
  car: string;
}

export default function AppointmentList() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Placeholder: fetch from API later
    setTimeout(() => {
      setAppointments([
        { id: 1, date: '2023-10-01', user: 'Nguyen Van A', car: 'Kia K4' },
        { id: 2, date: '2023-10-02', user: 'Tran Thi B', car: 'Kia Sorento' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div>Loading appointments...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Quản lí lịch hẹn</h2>
      <div className="bg-white rounded shadow">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Ngày</th>
              <th className="p-4 text-left">Người dùng</th>
              <th className="p-4 text-left">Xe</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-t">
                <td className="p-4">{appt.id}</td>
                <td className="p-4">{appt.date}</td>
                <td className="p-4">{appt.user}</td>
                <td className="p-4">{appt.car}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
