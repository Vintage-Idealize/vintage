import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ResponsiveContainer
} from 'recharts';

import './dashboard.css';
import ResponsiveAppBar from '../nav-bar/ca-nav-bar';


const dataSales = [
  { day: 1, sales: 200 },
  { day: 2, sales: 100 },
  { day: 3, sales: 150 },
  { day: 4, sales: 100 },
  { day: 5, sales: 200 },
  { day: 6, sales: 400 },
  { day: 7, sales: 300 },
  { day: 8, sales: 200 },
  { day: 9, sales: 500 },
];

const dataOrders = [
  { day: 1, orders: 150 },
  { day: 2, orders: 100 },
  { day: 3, orders: 200 },
  { day: 4, orders: 250 },
  { day: 5, orders: 300 },
  { day: 6, orders: 350 },
  { day: 7, orders: 400 },
];

const dataCustomers = [
  { day: 1, customers: 200 },
  { day: 2, customers: 150 },
  { day: 3, customers: 250 },
  { day: 4, customers: 300 },
  { day: 5, customers: 350 },
  { day: 6, customers: 400 },
  { day: 7, customers: 450 },
];

const dataCategory = [
  { name: 'Men', value: 53 },
  { name: 'Women', value: 412 },
  { name: 'Kids', value: 731 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <ResponsiveAppBar position="sticky"/>
      <main>
        <h2 className='hello'>Hello, Ashan!</h2>
        <div className="charts-container">
          <div className="chart">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataSales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataCategory}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat">
            <p>Average Daily Sales</p>
            <h2>LKR 20,000</h2>
            <p>Average Daily Orders</p>
            <h2>100</h2>
            <p>Pending Orders</p>
            <h2>500</h2>
          </div>
          <div className="chart">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataOrders}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataCustomers}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="customers" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="actions-container">
          <button>View Orders</button>
          <button>Add New Product</button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

