<script setup>
// Importing necessary modules and components
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

// List of services offered
const services = ref([
  {
    id: 1,
    img: "/wmv7.png",
    title: "Financial Literacy Training",
    summary: "Gain essential money management skills to take control of your finances.",
    details: "Our comprehensive training covers budgeting, debt management, smart spending, and financial goal-setting. Designed for beginners and those looking to refine their skills, this program equips you with the confidence to navigate everyday financial challenges.",
  },
  {
    id: 2,
    img: "/wmv8.png",
    title: "Investment Master Workshops",
    summary: "Unlock the secrets of wealth-building through strategic investments.",
    details: "Dive deep into diverse investment vehicles, including money market funds, bonds, real estate, stocks, and alternative assets. Learn risk assessment, portfolio diversification, and long-term wealth strategies from industry experts.",
  },
  {
    id: 3,
    img: "/wmv9.png",
    title: "Personal Finance Coaching",
    summary: "Tailored guidance to transform your financial habits and future.",
    details: "Receive one-on-one mentoring to create a personalized financial plan. Whether you're tackling debt, saving for a milestone, or optimizing cash flow, our coaching helps you develop disciplined and sustainable money habits.",
  },
  {
    id: 4,
    img: "/wmv10.png",
    title: "Corporate Financial Wellness",
    summary: "Boost employee productivity and satisfaction through financial education.",
    details: "Companies that invest in financial wellness see higher engagement and reduced stress among staff. Our interactive workshops cover budgeting, retirement planning, and smart investing—fostering a financially healthy workforce.",
  },
  {
    id: 5,
    img: "/wmv5.png",
    title: "Student Financial Training",
    summary: "Equip the next generation with money skills for lifelong success.",
    details: "Interactive, age-appropriate sessions teach students budgeting, saving, credit management, and early investing. We prepare young adults to avoid common financial pitfalls and build a strong fiscal foundation.",
  },
]);
</script>

<template>
  <!-- Navigation -->
  <Navbar />

  <!-- Hero Section -->
  <section class="hero-section position-relative w-100 d-flex align-items-center">
    <img
      src="/hero2.jpeg"
      alt="WMV Background"
      class="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
    />
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
    <div class="position-absolute top-50 start-50 translate-middle text-center text-white px-3 container">
      <h1 class="display-5 fw-semibold">
        <strong class="d-block">Services</strong>
        Wealth Mindset Ventures
      </h1>
    </div>
  </section>

  <!-- Services Section -->
  <section class="mission py-5 bg-light">
    <div class="container">
      <h2 class="text-center text-dark-green mb-2 section-title position-relative">
        Our Services
      </h2>
      <h4 class="text-center mb-5 fw-bold text-dark-green">
        Empowering Financial Futures Through Expert Guidance
        <span class="title-underline"></span>
      </h4>

      <div class="row g-4 justify-content-center">
        <!-- Render each service -->
        <div class="col-md-6 col-lg-4" v-for="service in services" :key="service.id">
          <div class="card h-100 shadow-lg border-0 overflow-hidden">
            <img
              :src="service.img"
              :alt="service.title"
              class="card-img-top object-fit-cover"
              style="height: 180px"
            />
            <div class="card-body text-center p-4">
              <h3 class="card-title">{{ service.title }}</h3>
              <p class="card-text">{{ service.summary }}</p>
              <div class="mt-3">
                <p>{{ service.details }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Audience Target Section -->
  <section class="py-5 bg-white">
    <div class="container">
      <h2 class="text-center text-dark-green mb-5 section-title">
        Our Approach
        <span class="title-underline"></span>
      </h2>

      <!-- Bootstrap Accordion -->
      <div class="accordion" id="audienceAccordion">
        <!-- Tertiary Students -->
        <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
          <h3 class="accordion-header">
            <button
              class="accordion-button collapsed bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <span class="me-2">TERTIARY-LEVEL STUDENTS</span>
            </button>
          </h3>
          <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#audienceAccordion">
            <div class="accordion-body">
              <p><strong>Why?</strong> To introduce investment opportunities and advanced financial principles.</p>
              <p><strong>Approach:</strong> Engaging student leaders and faculty members to promote learning sessions.</p>
            </div>
          </div>
        </div>

        <!-- Organizations -->
        <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
          <h3 class="accordion-header">
            <button
              class="accordion-button collapsed bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              <span class="me-2">ORGANIZATIONS & EMPLOYEE GROUPS</span>
            </button>
          </h3>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#audienceAccordion">
            <div class="accordion-body">
              <p><strong>Why?</strong> Financially empowered employees are more productive, motivated, and secure.</p>
              <p><strong>Approach:</strong> We partner with employers and HR departments to offer tailored financial literacy programs.</p>
            </div>
          </div>
        </div>

        <!-- Social and Faith-based -->
        <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
          <h3 class="accordion-header">
            <button
              class="accordion-button collapsed bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              <span class="me-2">SOCIAL & FAITH-BASED GROUPS</span>
            </button>
          </h3>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#audienceAccordion">
            <div class="accordion-body">
              <p><strong>Why?</strong> These groups offer supportive environments for learning and discussion.</p>
              <p><strong>Approach:</strong> We organize forums and workshops designed to match each group's values.</p>
            </div>
          </div>
        </div>

        <!-- High School Students -->
        <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
          <h3 class="accordion-header">
            <button
              class="accordion-button collapsed bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
            >
              <span class="me-2">HIGH SCHOOL STUDENTS</span>
            </button>
          </h3>
          <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#audienceAccordion">
            <div class="accordion-body">
              <p><strong>Why?</strong> Early exposure to financial literacy helps build responsible future earners.</p>
              <p><strong>Approach:</strong> We collaborate with teachers and parents to introduce foundational money lessons.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <Footer />
</template>

<style scoped>
/* Hero section height settings */
.hero-section {
  height: 40vh;
  max-height: 400px;
}

@media (min-width: 640px) {
  .hero-section {
    height: 50vh;
  }
}
@media (min-width: 1024px) {
  .hero-section {
    height: 60vh;
  }
}

/* Custom heading font size */
.d-block {
  font-size: 4rem;
}

/* Section title styling */
.section-title {
  font-weight: 600;
}

/* Title underline styling */
.title-underline {
  display: block;
  width: 100px;
  height: 4px;
  background: var(--bright-green);
  margin: 15px auto;
  border-radius: 2px;
}

/* Root CSS variables */
:root {
  --dark-green: rgb(2, 75, 2);
  --bright-green: rgb(7, 201, 7);
  --light-green: #979797;
}

/* Card styling */
.card {
  transition: all 0.3s ease;
  border-radius: 10px !important;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}
.card-title {
  color: var(--dark-green);
  font-weight: 600;
  margin: 1rem 0;
}
.card-text {
  color: #555;
}

/* Hide scrollbar when needed */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
