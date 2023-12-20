import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = 'ashish.goutham@gmail.com'; // Replace with the actual user's email

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:4090/api/getPaymentsByEmail/${userEmail}`);
        console.log("response is " + response);
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };
    fetchOrders();
  }, [userEmail]);

  const handleCancelOrder = async (orderId) => {
    try {
      // Perform cancellation logic (you may need to call an API endpoint to update the order status)
      // For now, let's assume a successful cancellation and update the state accordingly
      setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
      Swal.fire('Order Cancelled');
    } catch (error) {
      console.error('Error cancelling order:', error);
    }
  };

  return (
    <div>
      <h2
        data-aos="fade-right"
        className="pt-8 capitalize text-lg md:text-2xl font-semibold before:rounded-lg relative before:absolute before:-bottom-2 before:content before:left-0 before:w-32 before:h-1 before:bg-red-500 transition-all ease-in-out duration-100"
      >
        My Orders
      </h2>

      {loading ? (
        <p>Loading orders...</p>
      ) : (
        <div className="py-6">
          {orders.map((order) => (
            <div key={order._id} className="border p-4 my-4">
              <div className="flex">
                <h1>Email ID:</h1>
                <h1 className="px-2">{order.email}</h1>
              </div>
              <div className="flex">
                <h1>Order ID:</h1>
                <h1 className="px-2">{order.orderId}</h1>
              </div>
              <div className="flex">
                <h1>Items:</h1>
                <h1 className="px-2">{Math.floor(Math.random() * 10)}</h1>
              </div>
              <div className="py-8">
                <button
                  type="button"
                  className="bg-gradient-to-br from-red-400 to-red-500 w-full md:w-auto px-6 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out font-semibold duration-300 flex justify-center md:justify-self-start hover:scale-105"
                  onClick={() => handleCancelOrder(order.orderId)}
                >
                  Cancel Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
