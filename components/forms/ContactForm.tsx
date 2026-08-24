'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormData } from '@/lib/types';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // In a real app, you'd send this to an API endpoint
      console.log('Form data:', data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          Thank you for your inquiry! We&apos;ll get back to you shortly.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-text-dark mb-2">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-text-dark mb-2">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Phone is required' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="+91 xxxxxx xxxx"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-text-dark mb-2">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Origin */}
        <div>
          <label htmlFor="origin" className="block text-sm font-semibold text-text-dark mb-2">
            Origin Location
          </label>
          <input
            id="origin"
            type="text"
            {...register('origin')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Pickup location"
          />
        </div>

        {/* Destination */}
        <div>
          <label htmlFor="destination" className="block text-sm font-semibold text-text-dark mb-2">
            Destination
          </label>
          <input
            id="destination"
            type="text"
            {...register('destination')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Delivery location"
          />
        </div>

        {/* Container Type */}
        <div>
          <label htmlFor="containerType" className="block text-sm font-semibold text-text-dark mb-2">
            Vehicle Type
          </label>
          <select
            id="containerType"
            {...register('containerType')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select vehicle type</option>
            <option value="20ft">20 ft Tonnage Truck</option>
            <option value="32ft">32 ft Tonnage Truck</option>
            <option value="dedicated">Dedicated Vehicle</option>
          </select>
        </div>

        <div>
          <label htmlFor="temperature" className="block text-sm font-semibold text-text-dark mb-2">
            Service Required
          </label>
          <select
            id="temperature"
            {...register('temperature')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select service</option>
            <option value="ftl">Full Truck Load (FTL)</option>
            <option value="dedicated">Dedicated Vehicle</option>
            <option value="express">Time-Critical / Express</option>
            <option value="distribution">Distribution / Secondary</option>
            <option value="custom">Customized Solution</option>
          </select>
        </div>

        {/* Cargo Type */}
        <div>
          <label htmlFor="cargoType" className="block text-sm font-semibold text-text-dark mb-2">
            Type of Cargo
          </label>
          <select
            id="cargoType"
            {...register('cargoType')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select cargo type</option>
            <option value="ecommerce">E-commerce</option>
            <option value="express">Express parcels</option>
            <option value="retail">Retail</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="general">General cargo</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-text-dark mb-2">
          Additional Details
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Tell us more about your shipment..."
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full btn-primary text-lg py-4">
        Send Inquiry
      </button>

      <p className="text-sm text-gray-500 text-center">
        We&apos;ll respond to your inquiry within 24 hours.
      </p>
    </form>
  );
}
