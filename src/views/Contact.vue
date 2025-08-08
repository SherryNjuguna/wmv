<script setup>
// Import necessary components
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
  <Navbar />

  <!-- Hero Section with Contact Title -->
  <section class="hero-section position-relative d-flex align-items-center">
    <img src="/hero2.jpeg" alt="Contact Us Background" 
         class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" />
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
    <div class="position-absolute top-50 start-50 translate-middle text-center text-white container px-3">
      <h1 class="display-5 fw-semibold">
        <strong class="d-block">Contact</strong>
        Wealth Mindset Ventures
      </h1>
    </div>
  </section>

  <!-- Contact Information Section -->
  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center text-dark-green mb-2 section-title">Contact Us</h2>
      <h4 class="text-center fw-bold text-dark-green mb-5">
        Reach out directly via email or phone
        <span class="title-underline"></span>
      </h4>
      
      <div class="row g-4 justify-content-center">
        <!-- Phone -->
        <div class="col-md-4">
          <div class="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm h-100">
            <div class="bg-dark-green rounded-circle p-3 me-3 flex-shrink-0">
              <i class="fas fa-phone-alt text-white fs-4"></i>
            </div>
            <div>
              <h5 class="text-dark-green mb-1">Phone</h5>
              <a href="tel:+254706651438" class="text-dark fs-5 text-decoration-none">+254 706 651 438</a>
            </div>
          </div>
        </div>

        <!-- Email - Primary Contact Method -->
        <div class="col-md-4">
          <div class="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm h-100">
            <div class="bg-dark-green rounded-circle p-3 me-3 flex-shrink-0">
              <i class="fas fa-envelope text-white fs-4"></i>
            </div>
            <div>
              <h5 class="text-dark-green mb-1">Email</h5>
              <a href="mailto:stuyofwealth101@gmail.com" 
                 class="text-dark fs-5 text-decoration-none"
                 title="Click to send us an email">
                stuyofwealth101@gmail.com
              </a>
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
              <p class="text-dark fs-5 mb-0">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ & Map Section -->
  <section class="py-5 bg-white">
    <div class="container">
      <div class="row g-5">
        <!-- FAQ Section -->
        <div class="col-lg-6">
          <div class="card border-0 shadow-sm rounded-3 p-4 p-lg-5 h-100">
            <h3 class="text-dark-green mb-4">Frequently Asked Questions</h3>
            <div class="accordion" id="faqAccordion">
              <!-- FAQ Item 1 -->
              <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed bg-white" data-bs-toggle="collapse" data-bs-target="#faqOne">
                    How quickly can I expect a response to my inquiry?
                  </button>
                </h3>
                <div id="faqOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    We typically respond within 24-48 hours during business days (Monday to Friday).
                  </div>
                </div>
              </div>

              <!-- FAQ Item 2 -->
              <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed bg-white" data-bs-toggle="collapse" data-bs-target="#faqTwo">
                    Do you offer virtual training sessions?
                  </button>
                </h3>
                <div id="faqTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Yes! We provide both in-person and virtual training options tailored to your needs.
                  </div>
                </div>
              </div>

              <!-- FAQ Item 3 -->
              <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed bg-white" data-bs-toggle="collapse" data-bs-target="#faqThree">
                    What are your workshop fees?
                  </button>
                </h3>
                <div id="faqThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Fees vary based on program duration and customization. Contact us for a tailored quote.
                  </div>
                </div>
              </div>

              <!-- FAQ Item 4 -->
              <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed bg-white" data-bs-toggle="collapse" data-bs-target="#faqFour">
                    Do you offer corporate discounts?
                  </button>
                </h3>
                <div id="faqFour" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Yes, we offer special rates for organizations booking multiple sessions or large groups.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Google Map -->
        <div class="col-lg-6">
          <div class="card border-0 shadow-sm rounded-3 overflow-hidden h-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.810908093139!2d36.82157831533021!3d-1.286826635969787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664fec3cd%3A0x9f4c5bb9a0cee0fd!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
              width="100%" height="100%" style="min-height: 450px; border:0;" allowfullscreen="" loading="lazy"
              title="Our Location in Nairobi CBD">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
/* Hero section styling */
.hero-section {
  height: 40vh;
  max-height: 400px;
  position: relative;
}

/* Section title styling */
.section-title {
  font-weight: 600;
}

/* Color variable for dark green elements */
.bg-dark-green {
  background-color: var(--dark-green);
}

/* Underline effect for headings */
.title-underline {
  display: block;
  width: 80px;
  height: 3px;
  background: var(--dark-green);
  margin: 15px auto;
}

/* Card hover effect */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* Make email link stand out */
a[href^="mailto:"] {
  color: var(--dark-green);
  font-weight: 500;
}
a[href^="mailto:"]:hover {
  text-decoration: underline;
}
</style>