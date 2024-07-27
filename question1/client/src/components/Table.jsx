import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);

  const clientCredentials = {
    companyName: "Hindustan College Of Science and Technology",
    clientID: "34df8476-2e0d-45bd-92ff-fa1fc50eae39",
    clientSecret: "xzEwBMcLnTJHGaeR",
    ownerName: "Agam Pandey",
    ownerEmail: "agampandey705@gmail.com",
    rollNo: "2100640100004"
  };

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.post('http://20.244.56.144/test/auth', clientCredentials);
        setToken(response.data.access_token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Table</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Availability</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.productName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.rating}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.discount}%</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.availability ? 'In Stock' : 'Out of Stock'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
