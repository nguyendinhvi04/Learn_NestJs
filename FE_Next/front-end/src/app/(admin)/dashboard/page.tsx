'use client';

import { useState } from 'react';
import Overview from '@/components/Overview';
import CarList from '@/components/CarList';
import UserList from '@/components/UserList';
import AppointmentList from '@/components/AppointmentList';

const tabs = [
  { name: 'Tổng quan', component: Overview },
  { name: 'Quản lí xe', component: CarList },
  { name: 'Quản lí người dùng', component: UserList },
  { name: 'Quản lí lịch hẹn', component: AppointmentList },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const ActiveComponent = tabs[activeTab].component;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === index
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ActiveComponent />
      </div>
    </div>
  );
}
