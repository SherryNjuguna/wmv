<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import AOS from "aos";
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import Mission from "../components/Mission.vue";

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

 
});
</script>

<template >
  <Navbar />
  <Hero />
  
  <!-- Main About Section -->
  <section class="bg-light-green py-5" data-aos="fade-up">
    <div class="container">
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
  </div>
  </section>

  <Mission /> 

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