import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [data, setData] = useState({
    totalOrders: 0,
    totalUsers: 0,
    totalSales: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ordersRes, usersRes, salesRes] = await Promise.all([
          axios.get('/api/dashboard/total-orders'),
          axios.get('/api/dashboard/total-users'),
          axios.get('/api/dashboard/total-sales'),
        ]);

        setData({
          totalOrders: ordersRes.data.totalOrders,
          totalUsers: usersRes.data.totalUsers,
          totalSales: salesRes.data.totalSales,
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  const userOrderChartData = {
    labels: ['Users', 'Orders'],
    datasets: [
      {
        label: 'Count',
        data: [data.totalUsers, data.totalOrders],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
      },
    ],
  };

  const salesOrderChartData = {
    labels: ['Sales', 'Orders'],
    datasets: [
      {
        label: 'Amount',
        data: [data.totalSales, data.totalOrders],
        backgroundColor: ['rgba(255, 159, 64, 0.6)', 'rgba(153, 102, 255, 0.6)'],
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 ml-[280px] w-fit">
      <h1 className="text-2xl font-bold my-10">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 ">
        <div className=" p-4 rounded shadow bg-grey-light">
          <h2 className="text-xl font-semibold flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>Total Users</h2>
          <p className="text-5xl font-semibold mt-6">{data.totalUsers}</p>
        </div>
        <div className="bg-grey-light p-4 rounded shadow">
          <h2 className="text-xl font-semibold flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-logs"><path d="M13 12h8"/><path d="M13 18h8"/><path d="M13 6h8"/><path d="M3 12h1"/><path d="M3 18h1"/><path d="M3 6h1"/><path d="M8 12h1"/><path d="M8 18h1"/><path d="M8 6h1"/></svg>Total Orders</h2>
          <p className="text-5xl font-semibold mt-6">{data.totalOrders}</p>
        </div>
        <div className="bg-grey-light p-6 rounded shadow">
          <h2 className="text-xl font-semibold flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>Total Sales</h2>
          <p className="text-5xl text-primary font-semibold mt-6">Rs.{data.totalSales}</p>
        </div>
      </div>
      <div className='flex gap-10 mt-14'>
      <div className="bg-white p-4 rounded shadow mb-8 w-[600px]">
        <h2 className="text-xl font-semibold mb-4">Users vs Orders</h2>
        <Bar data={userOrderChartData} />
      </div>
      <div className="bg-white p-4 rounded shadow  w-[600px]">
        <h2 className="text-xl font-semibold mb-4">Sales vs Orders</h2>
        <Bar data={salesOrderChartData} />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
