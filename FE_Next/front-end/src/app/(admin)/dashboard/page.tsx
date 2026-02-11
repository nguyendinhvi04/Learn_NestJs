'use client';
import { useState } from 'react';
import ProductList from '@/components/PropductList';
import UserList from '@/components/UserList';
import AppointmentList from '@/components/AppointmentList';
import { TabView, TabPanel } from 'primereact/tabview';
import MenuDashboard from '@/components/MenuDashboard';
import ChartDashboard from '@/components/ChartDashboard';


export default function Dashboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeKey, setActiveKey] = useState('products');
  const handleMenuSelect = (key: string) => {
    setActiveKey(key);
    switch (key) {
      case 'charts': 
        setActiveIndex(0);
      case 'products':
        setActiveIndex(1);
        break;
      case 'users':
        setActiveIndex(2);
        break;
      case 'appointments':
        setActiveIndex(3);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow rounded-lg grid grid-cols-10 min-h-[600px]">
        <div className="col-span-3 p-4">
          <MenuDashboard onMenuSelect={handleMenuSelect} activeKey={activeKey} />
        </div>
        <div className="col-span-7 p-4">
          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <TabPanel header="Charts">
              <ChartDashboard />
            </TabPanel>
            <TabPanel header="Products">
              <ProductList />
            </TabPanel>
            <TabPanel header="Users">
              <UserList />
            </TabPanel>
            <TabPanel header="Appointments">
              <AppointmentList />
            </TabPanel>

          </TabView>
        </div>
      </div>
    </div>
  );
}
