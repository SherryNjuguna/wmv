<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.refresh(); // Refresh on mount if needed
});

import Navbar from "../components/Navbar.vue";

// Add this script for the toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const toggleBtn = card.querySelector(".card-toggle-btn");

    toggleBtn.addEventListener("click", function () {
      card.classList.toggle("active");

      if (card.classList.contains("active")) {
        toggleBtn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
      } else {
        toggleBtn.innerHTML = 'Learn More <i class="fas fa-chevron-down"></i>';
      }
    });
  });
});
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Navbar />
  <Hero />
  <section class="main-section" data-aos="fade-up">
    <div class="container">
      <div class="text-content">
        <h1>Who we are</h1>
        <p>
          At The Wealth Mindset Ventures, we believe that financial literacy is
          the cornerstone of building lasting wealth and achieving financial
          independence. <br />Our mission is to empower individuals across all
          stages of life—students, employees, and social groups—with the skills,
          knowledge, and confidence to make informed financial decisions.
          Through tailored workshops, interactive training sessions, and
          practical tools, WMV bridges the gap between financial principles and
          real-world application.
        </p>
        <router-link to="/about" class="text-decoration-none text-primary">
          <button class="learn-more-btn">Learn More</button>
        </router-link>
      </div>
      <div class="image-content">
        <img src="/bulb.png" alt="about bulb" class="img-fluid" />
      </div>
    </div>
  </section>

  <section class="mission-section" data-aos="fade-up">
    <div class="container">
      <h2 class="section-title">Our Purpose</h2>
      <div class="cards-container">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-main">
              <i class="fas fa-plane-departure card-icon"></i>
              <h3 class="card-title">Our Mission</h3>
              <p class="card-text">
                We are dedicated to empowering individuals with essential
                financial knowledge, fostering a strong wealth mindset, and
                equipping them with the skills to make informed financial
                decisions.
              </p>
            </div>
            <div class="card-hidden">
              <p>
                We achieve this through comprehensive workshops, one-on-one
                coaching, and accessible digital resources that break down
                complex financial concepts into actionable steps.
              </p>
            </div>
            <button class="card-toggle-btn">
              Learn More <i class="fas fa-chevron-down"></i>
            </button>
            <div class="card-shine"></div>
          </div>
        </div>

        <div class="card-wrapper">
          <div class="card">
            <div class="card-main">
              <i class="fas fa-eye card-icon"></i>
              <h3 class="card-title">Our Vision</h3>
              <p class="card-text">
                To create a financially literate society where individuals
                master financial principles early, leading to better financial
                decisions and wealth creation.
              </p>
            </div>
            <div class="card-hidden">
              <p>
                We envision communities where financial education begins in
                childhood and continues through adulthood, creating generational
                wealth and economic stability for all.
              </p>
            </div>
            <button class="card-toggle-btn">
              Learn More <i class="fas fa-chevron-down"></i>
            </button>
            <div class="card-shine"></div>
          </div>
        </div>

        <div class="card-wrapper">
          <div class="card">
            <div class="card-main">
              <i class="fas fa-star card-icon"></i>
              <h3 class="card-title">Core Values</h3>
              <p class="card-text">Innovation, Excellence, Integrity</p>
            </div>
            <div class="card-hidden">
              <ul>
                <li>
                  <strong>Innovation:</strong> Continuously developing new
                  approaches to financial education
                </li>
                <li>
                  <strong>Excellence:</strong> Delivering the highest quality
                  programs and resources
                </li>
                <li>
                  <strong>Integrity:</strong> Maintaining transparency and
                  honesty in all we do
                </li>
              </ul>
            </div>
            <button class="card-toggle-btn">
              Learn More <i class="fas fa-chevron-down"></i>
            </button>
            <div class="card-shine"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style>
.main-section {
  background-color: #f0fff0;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.text-content {
  flex: 1;
  min-width: 300px;
}

.image-content {
  flex: 1;
  min-width: 300px;
  padding: 20px;
  text-align: center;
}

.main-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: rgb(2, 75, 2);
}

.main-section p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #0a0000;
}

.learn-more-btn {
  background-color: rgb(7, 201, 7);
  color: white;
  font-weight: bold;
  font-size: larger;
  border-radius: 1rem;
  border: none;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex: 1 1 auto;
  max-width: 200px;
}

.learn-more-btn:hover {
  background-color: rgb(44, 243, 44);
  transform: translateY(-2px);
}

.img-fluid {
  max-width: 100%;
  height: auto;
  max-height: 400px;
}

@media (max-width: 768px) {
  .learn-more-btn {
    width: 100%;
    max-width: 100%;
  }
}

/* Mission Section Styles */
.mission-section {
  background-color: #f8f9fa;
  padding: 4rem 0;
  position: relative;
    overflow: hidden;
}

.mission-section .container {
 
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: rgb(2, 75, 2);
  position: relative;
}

.section-title::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background: rgb(7, 201, 7);
  margin: 15px auto 0;
  border-radius: 2px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 -15px;
}

.card-wrapper {
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  padding: 0 15px;
}

.card {
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.card-main {
  text-align: center;
  margin-bottom: 1.5rem;
}

.card-icon {
  font-size: 2.5rem;
  color: rgb(7, 201, 7);
  margin-bottom: 1.5rem;
  text-align: center;
}

.card:hover .card-icon {
  transform: scale(1.1);
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
}

.card-text {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
  flex: 1;
}

.card-hidden {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
  color: #555;
}

.card-hidden ul {
  text-align: left;
  padding-left: 20px;
}

.card-hidden ul {
  padding-left: 20px;
  text-align: left;
}

.card-toggle-btn {
  background: transparent;
  color: rgb(7, 201, 7);
  border: none;
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.card-toggle-btn:hover {
  color: rgb(2, 75, 2);
}

.card-toggle-btn i {
  transition: transform 0.3s ease;
}

.card.active .card-toggle-btn i {
  transform: rotate(180deg);
}

.card.active .card-hidden {
  max-height: 500px;
  margin-bottom: 1.5rem;
}

.card.active .card-toggle-btn {
  color: rgb(2, 75, 2);
}

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

/* Responsive Design */
@media (max-width: 992px) {
  .cards-container {
    gap: 1.5rem;
  }

  .card-wrapper {
    min-width: 45%;
  }
}

@media (max-width: 768px) {
  .mission-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .card-wrapper {
    min-width: 100%;
    max-width: 400px;
    margin-bottom: 1.5rem;
  }

  .card {
    padding: 2rem;
  }
}

@media (max-width: 576px) {
  .mission-section {
    padding: 2rem 0;
  }

  .card {
    padding: 1.5rem;
  }

  .card-icon {
    font-size: 2.5rem;
  }

  .card-title {
    font-size: 1.3rem;
  }
}
</style>
