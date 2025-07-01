<script setup>
import { RouterLink } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Navbar />

  <section
    class="position-relative w-100 overflow-hidden d-flex align-items-center hero-section"
  >
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
        <strong class="d-block">About</strong>
        Wealth Mindset Ventures
      </h1>
    </div>
  </section>

  <!-- Main About Section -->
  <section class="bg-light-green py-5" data-aos="fade-up">
    <div class="container d-flex flex-wrap">
      <div class="col-lg-6 pe-lg-4">
        <h2 class="text-dark-green mb-5 position-relative section-title">
          Who we Are
          <span class="title-line"></span>
        </h2>

        <p class="mb-4">
          At The Wealth Mindset Ventures, we believe that financial literacy is
          the cornerstone of building lasting wealth and achieving financial
          independence. <br />
          Our mission is to empower individuals across all stages of
          life—students, employees, and social groups—with the skills,
          knowledge, and confidence to make informed financial decisions.
          Through tailored workshops, interactive training sessions, and
          practical tools, WMV bridges the gap between financial principles and
          real-world application. <br />
          Founded with a passion for transforming lives, we are dedicated to
          equipping communities with the mindset, strategies, and discipline
          needed to unlock their full financial potential. Together, we can
          master money and shape a brighter future.
        </p>
      </div>
      <div class="col-lg-6 text-center mt-4 mt-lg-0">
        <img
          src="/wmv5.png"
          alt="about bulb"
          class="img-fluid"
          style="max-height: 400px"
        />
      </div>
    </div>
  </section>

  <!-- Philosophy Section -->
  <section class="bg-light-green py-5" data-aos="fade-up">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="card philosophy-card shadow-lg border-0">
            <div class="card-body p-4 p-lg-5">
              <h2
                class="text-dark-green text-center mb-4 position-relative section-title"
              >
                Our Philosophy
                <span class="title-line mx-auto"></span>
              </h2>

              <div class="philosophy-content">
                <p class="lead mb-4">You study what you want to become.</p>

                <ul class="list-unstyled">
                  <li class="mb-3 d-flex align-items-start">
                    <span class="text-success me-2">•</span>
                    <span>A lawyer has to study law to become a lawyer.</span>
                  </li>
                  <li class="mb-3 d-flex align-items-start">
                    <span class="text-success me-2">•</span>
                    <span
                      >A doctor has to study medicine to become a doctor.</span
                    >
                  </li>
                  <li class="mb-4 d-flex align-items-start">
                    <span class="text-success me-2">•</span>
                    <span>You have to study to become.</span>
                  </li>
                </ul>

                <p class="fw-bold mb-4">Wealth is no exception.</p>

                <p class="mb-4">You have to make it a study to become.</p>
                <p class="mb-4">
                  You have to study money and wealth to become wealthy.
                </p>

                <p class="mb-4">
                  At WMV, we believe that financial success is not a matter of
                  luck or chance—it is a skill that can be learned and mastered.
                  Wealth is built when individuals commit to understanding
                  financial principles, applying them strategically, and
                  continuously evolving their knowledge.
                </p>

                <p class="mb-0 fst-italic fw-bold">
                  That's why we exist: to help you study wealth, grow wealth,
                  and live wealthy.
                </p>
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
  height: 40vh; /* Reduced from 70vh to ~half */
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

.title-line {
  display: block;
  width: 100px;
  height: 4px;
  background: var(--bright-green);
  margin: 15px;
  border-radius: 2px;
}

/* Philosophy Card Styles */
.philosophy-card {
  background-color: rgba(255, 255, 255, 0.95);
  transition: transform 0.3s ease;
  margin-top: -50px;
}

.philosophy-content {
  color: #333;
}

/* Responsive adjustments */
@media (min-width: 1024px) {
  .philosophy-card {
    margin-top: -80px;
  }
}
</style>
