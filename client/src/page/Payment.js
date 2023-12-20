import React from 'react'

const Payment = () => {
    return (
        <div>
          <h1 className='text-xl font-semibold'>Payment Policy</h1>
          <div>
            <p>Last Updated: 20-12-23</p>
    
            <h2>1. Payment Methods</h2>
            <div className='px-6'>
              <p>We accept the following payment methods:</p>
              <ul className='list-disc list-inside'>
                <li>Credit Card</li>
                <li>Debit Card</li>
                <li>Net Banking</li>
                <li>Mobile Wallets</li>
                <li>Other electronic payment methods</li>
              </ul>
            </div>
    
            <h2>2. Payment Security</h2>
            <div className='px-6'>
              <p>Your payment details are securely processed using industry-standard encryption technologies. We do not store your credit card information on our servers.</p>
            </div>
    
            <h2>3. Order Confirmation</h2>
            <div className='px-6'>
              <p>Upon successful payment, you will receive an invoice</p>
            </div>
    
            <h2>4. Refund Policy</h2>
            <div className='px-6'>
              <p>Refund is done only before 7 days of purchase</p>
            </div>
    
            <h2>5. Contact Us</h2>
            <div className='px-6'>
              <p>If you have any questions or concerns about our Payment Policy, please contact us at isarohit8639@gmail.com</p>
    
              <p className='my-4'>By making a payment on our website, you agree to the terms outlined in this Payment Policy.</p>
            </div>
    
            <h1 className='text-xl font-semibold py-2'>My Nation</h1>
          </div>
        </div>
      );    
}

export default Payment
