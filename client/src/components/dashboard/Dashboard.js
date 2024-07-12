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
import SellerAppBar from '../nav-bar/seller-nav-bar';
import ProductMenu from './product-menu';
import DayMenu from './day-menu';
import AddProductDialog from '../addProduct/addProduct';


const dataSales = [
  { day: 1, sales: 20000 },
  { day: 2, sales: 10000 },
  { day: 3, sales: 15000 },
  { day: 4, sales: 10000 },
  { day: 5, sales: 20000 },
  { day: 6, sales: 40000 },
  { day: 7, sales: 30000 },
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
  { name: 'Kids', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SellerAppBar/>
      <main>
        <h2 className='hello'>Hello, Ashan!</h2>
        <div className="charts-container">
          <div className="line-chart">
            <div class="line-header">
              <div><h3>Sales For Products</h3></div>
              <div className='menu'>
              <div><DayMenu/></div>
                <div><ProductMenu/></div>
                </div>
              </div>
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
          <h3>Orders By Category</h3>
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
            <h3>Sales static</h3>
            <div className='each-stat'><div className='stat-title'>Average Daily Sales</div><div className='stat-value'>LKR 20,000</div></div>
            <div className='each-stat'><div className='stat-title'>Average Daily Orders</div><div className='stat-value'>500</div></div>
            <div className='each-stat'><div className='stat-title'>Pending Orders</div><div className='stat-value'>300</div></div>
           
          </div>
          <div className="chart">
            <h3>Daily Number Of Orders</h3>
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
            <h3>Daily Number of New Customers</h3>
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
        <AddProductDialog/>
      </main>
    </div>
  );
};

export default Dashboard;

