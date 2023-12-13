import React, { useState, useRef } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import '../Style/RegistrationForm.css'; // Import your custom styles

const API_URL = "http://localhost:4000/api/v1/createform";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    transactionId: '',
    Eventname: '',
  });

  const [loading, setLoading] = useState(false);

  const submitBtnRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Special handling for the 'Eventname' field
    const EventNameValue = name === 'Eventname' ? value.toUpperCase() : value;
  
    setFormData({
      ...formData,
      [name]: EventNameValue,
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Disable the submit button to prevent multiple submissions
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      // Create an object with all required fields
      const eventData = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        transactionId: formData.transactionId,
        Eventname: formData.Eventname,
      };

      const response = await axios.post(API_URL, eventData);
      if (response.status === 200) {
        toast.success('Form submitted successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });

        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          transactionId: '',
          Eventname: '',
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Form submission failed', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } finally {
      // Enable the submit button after the request is complete
      setLoading(false);
    }
  };

  return (
    <div className="container registration-form">
      <h2 className="form-title">Registration Form</h2>
      <form onSubmit={handleSubmit} className="custom-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <MDBInput
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email address</label>
          <MDBInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">Phone number</label>
          <MDBInput
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="transactionId" className="form-label">Transaction Id</label>
          <MDBInput
            id="transactionId"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Eventname" className="form-label">Eventname </label>
          <select
            id="Eventname"
            name="Eventname"
            value={formData.Eventname}
            onChange={handleInputChange}
          >
            <option value="">Select the option</option>
            <option value="ZONAL">ZONAL</option>
            <option value="D CUP">D CUP</option>
            <option value="OTHER EventS">OTHER Events</option>
          </select>
        </div>

        <MDBBtn
          type="submit"
          className="custom-btn"
          ref={submitBtnRef}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </MDBBtn>

        <Link to="/" className="back-link">Back to Home</Link>
        <ToastContainer />
      </form>
      <div className="mb-5"></div>
    </div>
  );
}
