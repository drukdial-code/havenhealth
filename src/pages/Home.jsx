import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import ImageCard from '../components/ImageCard'
import SectionTitle from '../components/SectionTitle'
import 'animate.css/animate.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Loving, Caring, & Compassionate</h1>
          <p>Enhancing elderly time with joy and laughter.  Trust worthy partners for your wellbeing.</p>
        </div>
        <div className="hero-image">
          <img
            src="imgs/nurse.png"
            alt="Welcoming illustration"
            className="floating-image"
          />
        </div>
      </section>

      <main className="main-content">
        <SectionTitle title="About Us" />
        <section id="about-section" className="section">
          <h2>Vision</h2>
          <p>At our heart, we are a compassionate, government-authorized home care provider proudly serving families in Columbus, Ohio and surrounding areas. Our mission is to bring comfort, dignity, and personalized support to every home we enter. We believe that every individual deserves to feel safe, respected, and cared for — right where they feel most at ease: at home.</p>
          <h2>Mission</h2>
          <p>We are dedicated to enhancing the quality of life for our clients through exceptional home care services. Our team of highly trained caregivers is committed to providing personalized, compassionate support that meets the unique needs of each individual. We strive to create a nurturing environment where our clients can thrive, maintaining their independence while receiving the care they deserve.</p>
          <h2>Values</h2>
          <p>Integrity, compassion, and respect are the cornerstones of our values. We believe in treating every client with the utmost dignity and kindness, ensuring their comfort and well-being. Our caregivers are not just skilled professionals; they are compassionate individuals who genuinely care about the people they serve.
          </p>
          
        </section>
        
        <SectionTitle title="Services We Provide" />
        <section id="services-section" className="section">
          <div className="cards-container">
            <ImageCard
              title="Personal Care Assistance"
              imageUrl="/imgs/hold-hands.jpg"
              description="Our caregivers provide gentle and respectful support with daily tasks like bathing, grooming, and dressing, helping your loved ones feel confident and comfortable. We understand that these moments require privacy, dignity, and kindness — and we’re honored to be there every step of the way. Your family becomes our family, and we care for each individual with heartfelt compassion."
            />
            <ImageCard
              title="Companionship Services"
              imageUrl="/imgs/companionship.jpg"
              description="Loneliness can be just as challenging as any illness, which is why we offer more than care — we offer friendship. Whether it’s sharing stories, enjoying a cup of tea, or simply being a kind presence in the home, our caregivers bring warmth and joy to every visit. We’re here to uplift spirits and ensure no one ever feels alone."
            />
            <ImageCard
              title="Home Making Services"
              imageUrl="/imgs/home-cleaning.jpg"
              description="Loneliness can be just as challenging as any illness, which is why we offer more than care — we offer friendship. Whether it’s sharing stories, enjoying a cup of tea, or simply being a kind presence in the home, our caregivers bring warmth and joy to every visit. We’re here to uplift spirits and ensure no one ever feels alone."
            />
          </div>
        </section>

        <SectionTitle title="Get in Touch" /> 
        <section className="section" style={{textAlign:'center' }}>
          
          <div className="cards-container" style={{textAlign:'center' }}>
            <ImageCard
              title="We are here to serve you"
              imageUrl="/imgs/team.jpg"
              description="Our team is made up of highly experienced health professionals who are not only skilled but deeply dedicated to their calling. With years of training and a heartfelt commitment to service, we tailor each care plan to meet your unique needs with love and excellence. From the moment you reach out, you become part of our extended family — and we’re honored to walk this journey with you."
            />

            <ImageCard
              title="Walk in at Our Office"
              imageUrl="/imgs/office.jpg"
              description="Choosing the right home care provider is a significant decision, and we are here to make that choice easier for you. We understand that every family is unique, and we take the time to listen, understand, and create a care plan that truly reflects your needs and values. With us, you’re not just choosing a service; you’re choosing a partner who will walk alongside you every step of the way."
            />

            <ImageCard
              title="Get in Touch With Us"
              imageUrl="/imgs/admin.jpg"
              description="We invite you to reach out and learn more about how we can support you and your family. Whether you have questions, need assistance, or simply want to explore your options, our friendly team is here to help. Contact us today to schedule a consultation or visit our office. We look forward to becoming a trusted partner in your home care journey."
            />
           
          </div>
        </section>

       
       <section className="section" style={{ textAlign: 'center' }}>
   
          <div style={{ margin: '1rem 0' }}>
            <strong>Havan Home Health Care LLC - Welcomes You !!</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11168.817148497616!2d-97.14985565829234!3d49.8314244223451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea75da3f610df7%3A0xaa5e7c6ef54a6db4!2sSt.%20Vital%20Park!5e0!3m2!1sen!2sca!4v1753822593448!5m2!1sen!2sca"
              width="1100"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Havan Home Health Care LLC Location"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home