"use client";
import { useState } from 'react';
import { useCart } from '../../components/CartContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Bengaluru',
    pincode: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the order to a backend.
    // We are mocking a Cash on Delivery order.
    setIsSubmitted(true);
    clearCart();
  };

  if (isSubmitted) {
    return (
      <div className="checkout-container" style={{ textAlign: 'center' }}>
        <div style={{ color: 'var(--forest)', marginBottom: '20px' }}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h1>Order Confirmed!</h1>
        <p style={{ fontSize: '18px', color: 'var(--ink-soft)' }}>
          Thank you for your order, {formData.name}.<br />
          We will deliver your freshly pressed oil soon and collect the payment (₹{cartTotal}) on delivery.
        </p>
        <Link href="/" className="btn gold" style={{ marginTop: '30px' }}>
          Return to Home
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-container" style={{ textAlign: 'center' }}>
        <h1>Your Cart is Empty</h1>
        <p style={{ marginBottom: '30px' }}>Please add some items to your cart before checking out.</p>
        <Link href="/" className="btn">Browse Oils</Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px', color: 'var(--ink-soft)', textDecoration: 'none' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back to Mill
      </Link>
      
      <h1>Checkout</h1>
      
      <div style={{ marginBottom: '40px', padding: '24px', background: 'var(--cream)', borderRadius: '8px', border: '1px solid var(--line)' }}>
        <h3 style={{ marginBottom: '16px' }}>Order Summary</h3>
        {cart.map(item => (
          <div key={`${item.id}-${item.variant}`} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span>{item.qty}x {item.name} ({item.variant})</span>
            <span style={{ fontFamily: 'var(--mono)' }}>₹{item.price * item.qty}</span>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--line)', fontWeight: 'bold', fontSize: '18px' }}>
          <span>Total (Cash on Delivery)</span>
          <span>₹{cartTotal}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <h3 style={{ marginBottom: '20px' }}>Delivery Details</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="10-digit mobile number" />
          </div>
        </div>

        <div className="form-group">
          <label>Delivery Address</label>
          <textarea required rows="3" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} placeholder="House/Flat No., Building Name, Street"></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input type="text" readOnly value={formData.city} style={{ background: '#f0ede4', color: 'var(--ink-soft)' }} />
          </div>
          <div className="form-group">
            <label>PIN Code</label>
            <input required type="text" value={formData.pincode} onChange={e => setFormData({...formData, pincode: e.target.value})} placeholder="e.g. 560100" />
          </div>
        </div>

        <button type="submit" className="btn gold" style={{ width: '100%', justifyContent: 'center', marginTop: '20px', fontSize: '16px', padding: '16px' }}>
          Confirm Order
        </button>
      </form>
    </div>
  );
}
