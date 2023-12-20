import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../components/EmptyCart';
import CartAddedItem from '../components/CartAddedItem';
import PaymentSummary from '../components/PaymentSummary';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Cart = () => {
  const user = useSelector((state) => state.user);
  const cartProduct = useSelector((state) => state.cartProduct);
  const cartTotal = cartProduct.cartProductItem.reduce((acc, curr) => acc + curr.total, 0);
  const deliveryCharge = 0;
  const totalAmount = cartTotal + deliveryCharge;
  const receiptId = "qwsaq1";
  const razorpayURL = "http://localhost:4000/api/checkout";
  const razorpayKey = "rzp_test_SS49Ahe904DIC8";
  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();
    if (user.email) {
      try {
        
            
        console.log();
        const amount = totalAmount;
        const currency = "INR";

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const paymentRecord = {
          orderId: order.id,
          email: user.email,
          return: false,
          products: cartProduct.cartProductItem,
        };
        // Replace this with your MongoDB API endpoint for creating payment records
        await axios.post('http://localhost:4090/api/createPayment', paymentRecord);
  
        const options = {
          key: "rzp_test_SS49Ahe904DIC8",
          amount,
          currency,
          name: "Team405",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          callback_url: "http://localhost:4000/api/paymentverification",
          order_id: order.id,
          prefill: {
            name: "Web Dev Matrix",
            email: "webdevmatrix@example.com",
            contact: "9000000000",
          },
          notes: { address: "Razorpay Corporate Office" },
          theme: { color: "#3399cc" },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", (response) => {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });

        rzp1.open();
      } catch (error) {
        console.error("Error in handlePayment:", error);
      }
    } else {
      toast("You are not logged in!!");
    }
  };

  return (
    <div className="p-4">
      <h1 className="capitalize text-lg md:text-2xl font-semibold before:rounded-lg relative before:absolute before:-bottom-2 before:content before:left-0 before:w-32 before:h-1 before:bg-red-500 transition-all ease-in-out duration-100">
        Your Shopping Cart
      </h1>

      {cartProduct.cartProductItem[0] ? (
        <>
          <p className="mt-3 ">Product</p>
          <div className="flex flex-col md:flex-row w-full mt-1 ">
            <div className="w-full ">
              {cartProduct.cartProductItem.map((el) => (
                <CartAddedItem
                  key={el.id}
                  id={el.id}
                  img={el.imgURL}
                  title={el.title}
                  qty={el.qty}
                  price={el.price}
                  total={el.total}
                />
              ))}
            </div>
            <div className="w-full min-w-210 mt-5 md:mt-0 md:min-w-350 max-w-lg  relative">
              <PaymentSummary
                cartTotal={cartTotal}
                deliveryCharge={deliveryCharge}
                Total={totalAmount}
                handlePayment={handlePayment}
              />
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;