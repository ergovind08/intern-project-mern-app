// src/components/Dashboard.js
import React from "react";
import { FiShoppingCart, FiUsers, FiBarChart, FiPackage } from "react-icons/fi";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Sales */}
      <motion.div
        className="bg-blue-600 text-white p-6 rounded-lg shadow-lg flex items-center justify-between"
        whileHover={{ scale: 1.05 }}
      >
        <div>
          <h2 className="text-2xl font-semibold">Total Sales</h2>
          <p className="mt-2 text-xl">$25,000</p>
        </div>
        <FiShoppingCart size={45} />
      </motion.div>

      {/* Total Users */}
      <motion.div
        className="bg-green-600 text-white p-6 rounded-lg shadow-lg flex items-center justify-between"
        whileHover={{ scale: 1.05 }}
      >
        <div>
          <h2 className="text-2xl font-semibold">Total Users</h2>
          <p className="mt-2 text-xl">1,200</p>
        </div>
        <FiUsers size={45} />
      </motion.div>

      {/* Active Orders */}
      <motion.div
        className="bg-yellow-600 text-white p-6 rounded-lg shadow-lg flex items-center justify-between"
        whileHover={{ scale: 1.05 }}
      >
        <div>
          <h2 className="text-2xl font-semibold">Active Orders</h2>
          <p className="mt-2 text-xl">80</p>
        </div>
        <FiPackage size={45} />
      </motion.div>

      {/* Revenue */}
      <motion.div
        className="bg-red-600 text-white p-6 rounded-lg shadow-lg flex items-center justify-between"
        whileHover={{ scale: 1.05 }}
      >
        <div>
          <h2 className="text-2xl font-semibold">Revenue</h2>
          <p className="mt-2 text-xl">$10,000</p>
        </div>
        <FiBarChart size={45} />
      </motion.div>

      {/* Recent Orders */}
      <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-white p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Order ID</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Date</th>
              <th className="py-2">Status</th>
              <th className="py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">#001</td>
              <td className="py-2">John Doe</td>
              <td className="py-2">08/28/2024</td>
              <td className="py-2 text-green-500">Completed</td>
              <td className="py-2">$250</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
