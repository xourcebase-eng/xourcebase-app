import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const WorkshopCheckoutPage = () => {
  const [timeLeft, setTimeLeft] = useState(900);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    currentRole: '',
    experience: '',
    coupon: '',
  });

  const [errors, setErrors] = useState({});
  const [couponStatus, setCouponStatus] = useState({ valid: false, message: '', discount: 0 });

  // Valid coupons - feel free to add more
  const validCoupons = {
    EARLYBIRD: { discount: 50, message: '🎉 EARLYBIRD applied! 50% OFF → ₹49' },
    XOURCE50: { discount: 50, message: '🎉 XOURCE50 applied! 50% OFF → ₹49' },
    WELCOME99: { discount: 0, message: '✅ Coupon applied!' },
    FREEPASS: { discount: 100, message: '🎊 FREEPASS applied! FREE ACCESS!' },
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';

    if (!formData.phone || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Valid phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const applyCoupon = () => {
    const code = formData.coupon.trim().toUpperCase();
    if (validCoupons[code]) {
      setCouponStatus({
        valid: true,
        message: validCoupons[code].message,
        discount: validCoupons[code].discount,
      });
    } else if (formData.coupon.trim()) {
      setCouponStatus({ valid: false, message: '❌ Invalid coupon code', discount: 0 });
    } else {
      setCouponStatus({ valid: false, message: '', discount: 0 });
    }
  };

  // Load Razorpay SDK
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fix the errors in the form.');
      return;
    }

    let baseAmount = 99; // in INR
    let finalAmount = baseAmount;

    if (couponStatus.valid && couponStatus.discount > 0) {
      finalAmount = Math.round(baseAmount * (100 - couponStatus.discount) / 100);
    }

    // Enforce minimum ₹1 for Razorpay
    if (finalAmount < 1) finalAmount = 1;

    // Handle FREE access
    if (couponStatus.discount === 100) {
      alert('🎉 Congratulations! You got FREE access with coupon FREEPASS!');
      // In production: redirect to thank you / workshop access page
      return;
    }

    try {
      // Create order via backend
      const response = await fetch('http://localhost:5000/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: finalAmount }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment order');
      }

      const order = await response.json();

      const options = {
        key: 'rzp_live_RrcDyp3XI1VwpV', // ← REPLACE WITH YOUR ACTUAL RAZORPAY TEST KEY ID
        amount: order.amount,
        currency: 'INR',
        name: 'XourceBase',
        description: 'Career Accelerator Workshop with Abhijeet Vishwakarma',
        image: 'https://your-logo-url.com/logo.png', // Optional
        order_id: order.id,
        handler: function (response) {
          alert(`Payment Successful! 🎉\nPayment ID: ${response.razorpay_payment_id}`);
          // Optional: redirect to success page
          // window.location.href = '/thank-you';
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone.replace(/\D/g, '').slice(-10),
        },
        theme: {
          color: '#eab308',
        },
        modal: {
          ondismiss: function () {
            console.log('Payment cancelled');
          },
        },
      };

      if (window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
          alert('Payment Failed: ' + (response.error.description || 'Unknown error'));
        });
        rzp.open();
      } else {
        alert('Razorpay SDK failed to load. Please refresh and try again.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again or contact support.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-slate-800 mb-6">
          Secure Your Seat – Final Step
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Join Abhijeet Vishwakarma's Exclusive 2-Hour Career Workshop
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Form Section */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold mb-8 text-slate-800">Your Details</h2>
              <form onSubmit={handlePayment} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-5 py-4 border rounded-xl focus:outline-none focus:border-yellow-500 transition ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-5 py-4 border rounded-xl focus:outline-none focus:border-yellow-500 transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <PhoneInput
                    country={'in'}
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                    inputProps={{ required: true }}
                    containerClass="react-tel-input"
                    inputClass={`w-full px-5 py-4 border rounded-xl focus:outline-none transition ${
                      errors.phone ? '!border-red-500' : ''
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number (Optional)</label>
                  <PhoneInput
                    country={'in'}
                    value={formData.whatsapp}
                    onChange={(whatsapp) => setFormData({ ...formData, whatsapp })}
                    containerClass="react-tel-input"
                    inputClass="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-500 transition"
                  />
                </div>

                {/* Role & Experience */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Designation / Role</label>
                  <input
                    type="text"
                    value={formData.currentRole}
                    onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-500 transition"
                    placeholder="e.g., Software Engineer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-500 transition"
                  >
                    <option value="">Select</option>
                    <option>0-1 Year</option>
                    <option>1-3 Years</option>
                    <option>3-5 Years</option>
                    <option>5-10 Years</option>
                    <option>10+ Years</option>
                  </select>
                </div>

                {/* Coupon */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Coupon Code</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={formData.coupon}
                      onChange={(e) => {
                        setFormData({ ...formData, coupon: e.target.value });
                        setCouponStatus({ valid: false, message: '', discount: 0 });
                      }}
                      className="flex-1 px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-500 transition"
                      placeholder="e.g., EARLYBIRD"
                    />
                    <button
                      type="button"
                      onClick={applyCoupon}
                      className="px-6 py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition"
                    >
                      Apply
                    </button>
                  </div>
                  {couponStatus.message && (
                    <p className={`text-sm mt-2 font-bold ${couponStatus.valid ? 'text-green-600' : 'text-red-500'}`}>
                      {couponStatus.message}
                    </p>
                  )}
                </div>

                {/* Pay Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-2xl py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  {couponStatus.discount === 100
                    ? 'CLAIM FREE ACCESS'
                    : couponStatus.discount >= 50
                    ? 'PAY ₹49 & JOIN NOW'
                    : 'PAY ₹99 & JOIN NOW'}
                </button>

                <p className="text-center text-sm text-gray-600 mt-6">
                  🔒 Secured by Razorpay • Instant Access • 100% Money Back Guarantee
                </p>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl shadow-2xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold mb-8">Order Summary</h3>
              <div className="flex items-center gap-5 mb-8">
                <img
                  src="https://as1.ftcdn.net/jpg/05/21/94/72/1000_F_521947221_VO1npq5R2Ia0dZeZmtex8gLGcdaVyDXD.jpg"
                  alt="Abhijeet Vishwakarma"
                  className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400"
                />
                <div>
                  <p className="text-sm opacity-80">Workshop by</p>
                  <p className="text-xl font-bold text-yellow-400">Abhijeet Vishwakarma</p>
                </div>
              </div>

              <div className="space-y-5 border-t border-white/20 pt-6">
                <div className="flex justify-between text-lg">
                  <span>Original Price</span>
                  <span className="line-through opacity-70">₹999</span>
                </div>
                <div className="flex justify-between text-3xl font-bold">
                  <span>Today's Price</span>
                  <span className="text-yellow-400">
                    {couponStatus.discount === 100 ? 'FREE' : couponStatus.discount >= 50 ? '₹49' : '₹99'}
                  </span>
                </div>
              </div>

              <div className="mt-8 p-5 bg-red-600/30 rounded-xl text-center">
                <p className="text-xl font-bold animate-pulse">
                  Offer Ends In: <span className="text-yellow-300 text-2xl">{formatTime(timeLeft)}</span>
                </p>
                <p className="text-sm mt-3">Workshop: 20th December</p>
              </div>

              <div className="mt-8 space-y-3 text-sm">
                <p>⭐ 4.95/5 Rated</p>
                <p>✅ Bonuses Worth ₹6,400</p>
                <p>✅ 100% Money Back Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCheckoutPage;