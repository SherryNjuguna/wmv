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
  // Handle form submission logic here
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
        <strong class="d-block">Contact Us</strong>
        Let's Start Your Financial Journey
      </h1>
    </div>
  </section>

  <!-- Contact Content -->
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row g-5">
        <!-- Contact Info Column -->
        <div class="col-lg-5">
          <div class="pe-lg-4">
            <h2 class="text-dark-green mb-4">Get in Touch</h2>
            <p class="mb-4">Have questions about our financial literacy programs? Reach out to our team for personalized assistance.</p>
            
            <!-- Contact Cards -->
            <div class="d-flex flex-column gap-4">
              <div class="card border-0 shadow-sm rounded-3 p-4 bg-white">
                <div class="d-flex align-items-center">
                  <div class="bg-light-green p-3 rounded-circle me-3">
                    <i class="bi bi-telephone-fill text-dark-green fs-4"></i>
                  </div>
                  <div>
                    <h5 class="mb-1">Phone</h5>
                    <a href="tel:+254700000000" class="text-decoration-none text-dark">+254 700 000 000</a>
                  </div>
                </div>
              </div>
              
              <div class="card border-0 shadow-sm rounded-3 p-4 bg-white">
                <div class="d-flex align-items-center">
                  <div class="bg-light-green p-3 rounded-circle me-3">
                    <i class="bi bi-envelope-fill text-dark-green fs-4"></i>
                  </div>
                  <div>
                    <h5 class="mb-1">Email</h5>
                    <a href="mailto:info@wealthmindset.co.ke" class="text-decoration-none text-dark">info@wealthmindset.co.ke</a>
                  </div>
                </div>
              </div>
              
              <div class="card border-0 shadow-sm rounded-3 p-4 bg-white">
                <div class="d-flex align-items-center">
                  <div class="bg-light-green p-3 rounded-circle me-3">
                    <i class="bi bi-geo-alt-fill text-dark-green fs-4"></i>
                  </div>
                  <div>
                    <h5 class="mb-1">Location</h5>
                    <p class="mb-0">Westlands, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="mt-5">
              <h5 class="mb-3">Follow Us</h5>
              <div class="d-flex gap-3">
                <a href="#" class="text-dark-green fs-4"><i class="bi bi-facebook"></i></a>
                <a href="#" class="text-dark-green fs-4"><i class="bi bi-twitter-x"></i></a>
                <a href="#" class="text-dark-green fs-4"><i class="bi bi-linkedin"></i></a>
                <a href="#" class="text-dark-green fs-4"><i class="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>

        <!-- Form and Map Column -->
        <div class="col-lg-7">
          <!-- Contact Form -->
          <div class="card border-0 shadow-sm rounded-3 p-4 p-lg-5 mb-5 bg-white">
            <h3 class="text-dark-green mb-4">Send Us a Message</h3>
            <form @submit.prevent="submitForm">
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="name" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="name" v-model="formData.name" required>
                </div>
                <div class="col-md-6">
                  <label for="email" class="form-label">Email Address</label>
                  <input type="email" class="form-control" id="email" v-model="formData.email" required>
                </div>
                <div class="col-md-6">
                  <label for="phone" class="form-label">Phone Number</label>
                  <input type="tel" class="form-control" id="phone" v-model="formData.phone">
                </div>
                <div class="col-md-6">
                  <label for="subject" class="form-label">Subject</label>
                  <select class="form-select" id="subject" v-model="formData.subject">
                    <option value="" disabled selected>Select a topic</option>
                    <option value="training">Financial Training</option>
                    <option value="workshop">Workshop Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="col-12">
                  <label for="message" class="form-label">Your Message</label>
                  <textarea class="form-control" id="message" rows="5" v-model="formData.message" required></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-dark-green px-4 py-2">Send Message</button>
                </div>
              </div>
            </form>
          </div>

          <!-- Map -->
          <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808477395885!2d36.80564731533022!3d-1.268835535975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske" 
              width="100%" 
              height="300" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
              title="WMV Nairobi Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section (Optional) -->
  <section class="py-5 bg-white">
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
                  We typically respond within 24-48 hours during business days.
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

.bg-light-green {
  background-color: rgba(7, 201, 7, 0.1);
}

/* Ensure map has proper aspect ratio */
.card iframe {
  min-height: 300px;
}

/* Style adjustments for contact cards */
.contact-card {
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .pe-lg-4 {
    padding-right: 0 !important;
  }
}
</style>