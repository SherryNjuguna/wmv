<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const submitForm = () => {
  console.log('Form submitted:', formData.value);
  alert('Thank you for your message! We will get back to you soon.');
  formData.value = { name: '', email: '', phone: '', subject: '', message: '' };
};
</script>

<template>
  <Navbar />

  <!-- Hero Section -->
  <section class="position-relative w-100 d-flex align-items-center hero-section">
    <img
      src="/hero2.jpeg"
      alt="Contact Us Background"
      class="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
    />
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
    <div class="position-absolute top-50 start-50 translate-middle text-center text-white px-3 container">
      <h1 class="display-5 fw-semibold">
        <strong class="d-block">Contact</strong>
        Wealth Mindset Ventures
      </h1>
    </div>
  </section>

  <!-- Contact Info - Three Columns in One Row -->
<section class="py-5 bg-light">
  <div class="container">
    <h2
        class="text-center text-dark-green mb-2 position-relative section-title"
      >
        Contact Us
      </h2>
      <h4 class="text-center mb-5 fw-bold text-dark-green">
        If You Have Any Query, Feel Free To Contact Us
        <span class="title-underline"></span>
      </h4>
    <div class="row g-4">
      <!-- Phone -->
      <div class="col-md-4">
        <div class="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm h-100">
          <div class="bg-dark-green rounded-circle p-3 me-3 flex-shrink-0">
            <i class="fas fa-phone-alt text-white fs-4"></i>
          </div>
          <div>
            <h5 class="text-dark-green mb-1">Phone</h5>
            <a href="tel:+254700000000" class="text-decoration-none text-dark fs-5">+254 706 651 438</a>
          
          </div>
        </div>
      </div>
      
      <!-- Email -->
      <div class="col-md-4">
        <div class="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm h-100">
          <div class="bg-dark-green rounded-circle p-3 me-3 flex-shrink-0">
            <i class="fas fa-envelope text-white fs-4"></i>
          </div>
          <div>
            <h5 class="text-dark-green mb-1">Email</h5>
            <a href="mailto:info@wealthmindset.co.ke" class="text-decoration-none text-dark fs-5">stuyofwealth101@gmail.com</a>
          </div>
        </div>
      </div>
      
      <!-- Location -->
      <div class="col-md-4">
        <div class="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm h-100">
          <div class="bg-dark-green rounded-circle p-3 me-3 flex-shrink-0">
            <i class="fas fa-map-marker-alt text-white fs-4"></i>
          </div>
          <div>
            <h5 class="text-dark-green mb-1">Location</h5>
            <p class="text-dark fs-5 mb-1">Nairobi, Kenya</p>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <!-- Form and Map Section - Equal Heights -->
<section class="py-5 bg-white">
  <div class="container">
    <div class="row g-5">
      <!-- Form Column -->
      <div class="col-lg-6 d-flex">
        <div class="card border-0 shadow-sm rounded-3 p-4 p-lg-5 w-100">
          <h3 class="text-dark-green mb-4">Send Us a Message</h3>
          <form @submit.prevent="submitForm" class="d-flex flex-column h-100">
            <div class="form-floating mb-3">
              <input 
                type="text" 
                class="form-control" 
                id="name" 
                placeholder="Full Name"
                v-model="formData.name" 
                required
              >
              <label for="name">Full Name</label>
            </div>
            <div class="form-floating mb-3">
              <input 
                type="email" 
                class="form-control" 
                id="email" 
                placeholder="Email Address"
                v-model="formData.email" 
                required
              >
              <label for="email">Email Address</label>
            </div>
            <div class="form-floating mb-3">
              <input 
                type="tel" 
                class="form-control" 
                id="phone" 
                placeholder="Phone Number"
                v-model="formData.phone"
              >
              <label for="phone">Phone Number</label>
            </div>
            <div class="form-floating mb-3">
              <select 
                class="form-select" 
                id="subject" 
                v-model="formData.subject"
              >
                <option value="" disabled selected></option>
                <option value="training">Financial Training</option>
                <option value="workshop">Workshop Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
              <label for="subject">Subject</label>
            </div>
            <div class="form-floating mb-3 flex-grow-1">
              <textarea 
                class="form-control h-100" 
                id="message" 
                placeholder="Your Message"
                v-model="formData.message" 
                required
              ></textarea>
              <label for="message">Your Message</label>
            </div>
            <button type="submit" class="btn btn-dark-green w-100 py-2 mt-auto">Send Message</button>
          </form>
        </div>
      </div>
      
      <!-- Map Column -->
      <div class="col-lg-6 d-flex">
        <div class="card border-0 shadow-sm rounded-3 overflow-hidden w-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.810908093139!2d36.82157831533021!3d-1.286826635969787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664fec3cd%3A0x9f4c5bb9a0cee0fd!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
            width="100%" 
            height="100%" 
            style="border:0; min-height: 450px;" 
            allowfullscreen="" 
            loading="lazy"
            title="WMV Nairobi CBD Location"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

   <!-- FAQ Section -->
   <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center text-dark-green mb-5">
        Frequently Asked Questions
        <span class="title-underline"></span>
      </h2>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="accordion" id="faqAccordion">
            <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
              <h3 class="accordion-header">
                <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne">
                  How quickly can I expect a response to my inquiry?
                </button>
              </h3>
              <div id="faqOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  We typically respond within 24-48 hours during business days (Monday to Friday).
                </div>
              </div>
            </div>
            
            <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
              <h3 class="accordion-header">
                <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo">
                  Do you offer virtual training sessions?
                </button>
              </h3>
              <div id="faqTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Yes! We provide both in-person and virtual training options tailored to your needs.
                </div>
              </div>
            </div>
            
            <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
              <h3 class="accordion-header">
                <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree">
                  What are your workshop fees?
                </button>
              </h3>
              <div id="faqThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Fees vary based on program duration and customization. Contact us for a tailored quote.
                </div>
              </div>
            </div>
            
            <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
              <h3 class="accordion-header">
                <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#faqFour">
                  Do you offer corporate discounts?
                </button>
              </h3>
              <div id="faqFour" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Yes, we provide special rates for organizations booking multiple sessions or large groups.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
.hero-section {
  height: 40vh;
  max-height: 400px;
}

/* Contact info cards */
.bg-dark-green {
  background-color: var(--dark-green);
}

/* Form floating labels */
.form-floating label {
  color: #6c757d;
  padding: 0.5rem 0.75rem;
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  color: #495057;
  opacity: 0.8;
  transform: scale(0.85) translateY(-0.9rem) translateX(0.15rem);
}

/* Make sure to include Font Awesome in your project */
</style>