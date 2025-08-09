import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  // const BASE_URL = 'http://192.168.2.11:8080'
  const BASE_URL = 'https://havenhealthcare.us-east-2.elasticbeanstalk.com' // Replace with your actual API base URL

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${BASE_URL}/api/public/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        // alert('Thank you for your message!')
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        alert('There was an error submitting your message. Please try again.')
      }
    } catch (error) {
      alert(error+'There was an error submitting your message. Please try again.')
    }
  }

  return (
    <div className="contact">
      <Header />
      
      <main className="main-content">
        <h1>Contact Us</h1>
        {submitted ? (
          <div className="thank-you-message" style={{padding: '2rem', textAlign: 'center'}}>
            <h2>Thank you! Your message is submitted.</h2>
            <p>We shall get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        )}
      </main>
      
      <Footer />
    </div>
  )
}

export default ContactUs