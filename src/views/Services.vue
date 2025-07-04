<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

const services = ref([
  { 
    id: 1,
    img: "/wmv7.png", // Replace with your image path
    title: "Financial Literacy Training",
    summary: "Gain essential money management skills to take control of your finances.",
    details: "Our comprehensive training covers budgeting, debt management, smart spending, and financial goal-setting. Designed for beginners and those looking to refine their skills, this program equips you with the confidence to navigate everyday financial challenges."
  },
  { 
    id: 2,
    img: "/wmv8.png", // Replace with your image path
    title: "Investment Master Workshops",
    summary: "Unlock the secrets of wealth-building through strategic investments.",
    details: "Dive deep into diverse investment vehicles, including money market funds, bonds, real estate, stocks, and alternative assets. Learn risk assessment, portfolio diversification, and long-term wealth strategies from industry experts."
  },
  { 
    id: 3,
    img: "/wmv9.png", // Replace with your image path
    title: "Personal Finance Coaching",
    summary: "Tailored guidance to transform your financial habits and future.",
    details: "Receive one-on-one mentoring to create a personalized financial plan. Whether you're tackling debt, saving for a milestone, or optimizing cash flow, our coaching helps you develop disciplined and sustainable money habits."
  },
  { 
    id: 4,
    img: "/wmv10.png", // Replace with your image path
    title: "Corporate Financial Wellness",
    summary: "Boost employee productivity and satisfaction through financial education.",
    details: "Companies that invest in financial wellness see higher engagement and reduced stress among staff. Our interactive workshops cover budgeting, retirement planning, and smart investing—fostering a financially healthy workforce."
  },
  { 
    id: 5,
    img: "/wmv5.png", // Replace with your image path
    title: "Student Financial Training",
    summary: "Equip the next generation with money skills for lifelong success.",
    details: "Interactive, age-appropriate sessions teach students budgeting, saving, credit management, and early investing. We prepare young adults to avoid common financial pitfalls and build a strong fiscal foundation."
  }
]);
</script>

<template>
    <Navbar />  

  <section class="position-relative w-100 d-flex align-items-center hero-section">
    <img
      src="/hero2.jpeg"
      alt="WMV Background"
      class="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
    />

    <div
      class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"
    ></div>

    <div
      class="position-absolute top-50 start-50 translate-middle text-center text-white px-3 container"
    >
      <h1 class="display-5 fw-semibold">
        <strong class="d-block">Services</strong>
        Wealth Mindset Ventures
      </h1>
    </div>
  </section>

  <section class="mission py-5 bg-light">
    <div class="container">
      <h2 class="text-center text-dark-green mb-2 position-relative section-title">
        Our Services
       
      </h2>
      <h4 class="text-center mb-5 fw-bold text-dark-green">
        Empowering Financial Futures Through Expert Guidance
        <span class="title-underline"></span>
      </h4>
      
      <div class="row g-4 justify-content-center">
        <div class="col-md-6 col-lg-4" v-for="service in services" :key="service.id">
          <div class="card h-100 shadow-lg border-0 overflow-hidden">
            <!-- Image at top of card -->
            <img 
              :src="service.img" 
              :alt="service.title" 
              class="card-img-top object-fit-cover"
              style="height: 180px;"
            >
            
            <div class="card-body text-center p-4">
              <h3 class="card-title">{{ service.title }}</h3>
              <p class="card-text">{{ service.summary }}</p>
              <!-- Always visible details -->
              <div class="mt-3">
                <p>{{ service.details }}</p>
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

.d-block {
  font-size: 4rem;
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

.title-underline {
  display: block;
  width: 100px;
  height: 4px;
  background: var(--bright-green);
  margin: 15px auto;
  border-radius: 2px;
}

/* Card Styles */
:root {
  --dark-green: rgb(2, 75, 2);
  --bright-green: rgb(7, 201, 7);
  --light-green: #979797;
}

.card {
  transition: all 0.3s ease;
  border-radius: 10px !important;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

.card-title {
  color: var(--dark-green);
  font-weight: 600;
  margin: 1rem 0;
}

.card-text {
  color: #555;
}
</style>