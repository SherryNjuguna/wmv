<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import AOS from "aos";
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";

// Swiper imports
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

onMounted(() => {
  AOS.refresh();
  
  // Initialize Swiper carousel
  new Swiper(".blog-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  // Card toggle functionality
  document.querySelectorAll(".card").forEach((card) => {
    const toggleBtn = card.querySelector(".card-toggle-btn");
    toggleBtn?.addEventListener("click", () => {
      card.classList.toggle("active");
      const isActive = card.classList.contains("active");
      toggleBtn.innerHTML = isActive 
        ? 'Show Less <i class="fas fa-chevron-up"></i>' 
        : 'Learn More <i class="fas fa-chevron-down"></i>';
    });
  });
});
</script>

<template>
  <Navbar />
  <Hero />
  
  <!-- Main About Section -->
  <section class="bg-light-green py-5" data-aos="fade-up">
    <div class="container d-flex flex-wrap align-items-center">
      <div class="col-lg-6 pe-lg-4">
        <h1 class="text-dark-green mb-4">Who we are</h1>
        <p class="mb-4">
          At The Wealth Mindset Ventures, we believe that financial literacy is
          the cornerstone of building lasting wealth and achieving financial
          independence. <br>Our mission is to empower individuals across all
          stages of life—students, employees, and social groups—with the skills,
          knowledge, and confidence to make informed financial decisions.
        </p>
        <router-link to="/about" class="text-decoration-none">
          <button class="btn btn-success btn-lg rounded-pill px-4">
            Learn More
          </button>
        </router-link>
      </div>
      <div class="col-lg-6 text-center mt-4 mt-lg-0">
        <img src="/bulb.png" alt="about bulb" class="img-fluid" style="max-height: 400px;">
      </div>
    </div>
  </section>

  <!-- Mission Section -->
  <section class="bg-light py-5" data-aos="fade-up">
    <div class="container">
      <h2 class="text-center text-dark-green mb-5 position-relative section-title">
        Our Purpose
        <span class="title-underline"></span>
      </h2>
      
      <div class="row g-4 justify-content-center">
        <!-- Mission Card -->
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm border-0 overflow-hidden">
            <div class="card-body text-center p-4">
              <i class="fas fa-plane-departure text-success fs-1 mb-3"></i>
              <h3 class="card-title">Our Mission</h3>
              <p class="card-text">
                We are dedicated to empowering individuals with essential
                financial knowledge, fostering a strong wealth mindset.
              </p>
              <div class="card-hidden">
                <p class="mb-0">
                  We achieve this through comprehensive workshops, one-on-one
                  coaching, and accessible digital resources.
                </p>
              </div>
            </div>
            <button class="card-toggle-btn btn w-100 border-top rounded-0 py-3">
              Learn More <i class="fas fa-chevron-down"></i>
            </button>
            <div class="card-shine"></div>
          </div>
        </div>

        <!-- Vision Card -->
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm border-0 overflow-hidden">
            <div class="card-body text-center p-4">
              <i class="fas fa-eye text-success fs-1 mb-3"></i>
              <h3 class="card-title">Our Vision</h3>
              <p class="card-text">
                To create a financially literate society where individuals
                master financial principles early.
              </p>
              <div class="card-hidden">
                <p class="mb-0">
                  We envision communities where financial education begins in
                  childhood and continues through adulthood.
                </p>
              </div>
            </div>
            <button class="card-toggle-btn btn w-100 border-top rounded-0 py-3">
              Learn More <i class="fas fa-chevron-down"></i>
            </button>
            <div class="card-shine"></div>
          </div>
        </div>

        <!-- Values Card -->
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm border-0 overflow-hidden">
            <div class="card-body text-center p-4">
              <i class="fas fa-star text-success fs-1 mb-3"></i>
              <h3 class="card-title">Core Values</h3>
              <p class="card-text">Innovation, Excellence, Integrity</p>
              <div class="card-hidden text-start">
                <ul class="ps-3">
                  <li class="mb-2"><strong>Innovation:</strong> New approaches to financial education</li>
                  <li class="mb-2"><strong>Excellence:</strong> Highest quality programs</li>
                  <li><strong>Integrity:</strong> Transparency in all we do</li>
                </ul>
              </div>
            </div>
            <button class="card-toggle-btn btn w-100 border-top rounded-0 py-3">
              Learn More <i class="fas fa-chevron-down"></i>
            </button>
            <div class="card-shine"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Blog Section -->
  <section class="py-5 bg-light-green" data-aos="fade-up">
    <div class="container">
      <h2 class="text-center text-dark-green mb-5 position-relative section-title">
        Latest blogs
        <span class="title-underline"></span>
      </h2>
      
      <!-- Swiper Container -->
      <div class="swiper blog-swiper pb-5">
        <div class="swiper-wrapper">
          <!-- Blog Posts (5 items) -->
          <div class="swiper-slide" v-for="i in 5" :key="i">
            <div class="blog-card rounded-3 overflow-hidden position-relative" 
                 style="background-image: url('/wvm1.png'); min-height: 300px;">
              <div class="blog-content position-absolute bottom-0 start-0 end-0 p-3 bg-dark-gradient">
                <h3 class="text-white mb-0 fs-5">
                  {{ [
                    'Exponential Growth: Achieving in 2 Months What Took Me 1 Year',
                    'I Asked ChatGPT How to Earn $1000 Online',
                    'Top 6 Investment Mistakes to Avoid',
                    'Do You Know Your Money Personality?',
                    '6 Must-Read Books About Wealth'
                  ][i-1] }}
                </h3>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation Buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- Pagination Dots -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style>
/* Color Variables */
:root {
  --dark-green: rgb(2, 75, 2);
  --bright-green: rgb(7, 201, 7);
  --light-green: #f3fcf3;
}

/* Custom Utility Classes */
.bg-dark-gradient {
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
}
.bg-light-green {
  background-color: var(--light-green);
}
.text-dark-green {
  color: var(--dark-green);
}
.text-bright-green {
  color: var(--bright-green);
}

/* Section Title Styling */
.section-title {
  font-size: 2.5rem;
}
.title-underline {
  display: block;
  width: 60px;
  height: 4px;
  background: var(--bright-green);
  margin: 15px auto 0;
  border-radius: 2px;
}

/* Card Styles */
.card {
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12) !important;
}

/* Card Toggle Functionality */
.card-hidden {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
}
.card.active .card-hidden {
  max-height: 500px;
}
.card-toggle-btn {
  color: var(--bright-green);
  font-weight: 600;
}
.card-toggle-btn:hover {
  color: var(--dark-green);
}
.card-toggle-btn i {
  transition: transform 0.3s ease;
}
.card.active .card-toggle-btn i {
  transform: rotate(180deg);
}

/* Card Shine Effect */
.card-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 45%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  pointer-events: none;
  opacity: 0;
  transition: all 0.5s ease;
}
.card:hover .card-shine {
  opacity: 1;
  top: -20%;
  left: -20%;
}

/* Blog Card Styles */
.blog-card {
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
}
.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Swiper Navigation */
.swiper-button-prev,
.swiper-button-next {
  color: var(--bright-green);
}
.swiper-pagination-bullet {
  background: var(--bright-green);
  opacity: 0.6;
}
.swiper-pagination-bullet-active {
  background: var(--dark-green);
  opacity: 1;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .blog-card {
    min-height: 250px;
  }
}
</style>