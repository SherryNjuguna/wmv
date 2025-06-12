<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

/**
 * Function to check if the current route matches the given path
 */
const isActive = (path) => computed(() => route.path.startsWith(path));
</script>
<template>
  <footer
    class="ftco-footer ftco-no-pb ftco-section"
    style="background-color: rgb(2, 75, 2); color: white; padding: 20px 0"
  >
    <div class="container-fluid" style="width: 100%">
      <!-- Using container-fluid for full-width layout -->
      <div class="row justify-content-center text-center mb-5">
        <!-- Added justify-content-center and text-center -->
        <div class="col-md-6 col-lg-3">
          <div class="ftco-footer-widget mb-4">
            <div class="section-header">
              <span class="resource-apexcel"> Quick Links</span>
              <!-- Increased font size to 32px -->
            </div>
            <ul class="footer-list">
              <li>
                <router-link to="/about" class="text-white text-decoration-none"
                  >About Us</router-link
                >
              </li>
              <li>
                <router-link
                  to="/services"
                  class="text-white text-decoration-none"
                  >Services</router-link
                >
              </li>
              <li>
                <router-link to="/shop" class="text-white text-decoration-none"
                  >Shop</router-link
                >
              </li>
              <li>
                <router-link
                  to="/contact"
                  class="text-white text-decoration-none"
                  >Contact Us</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="ftco-footer-widget mb-4">
            <div class="section-header">
              <span class="resource-apexcel">Programs</span>
            </div>
            <ul class="footer-list">
              <li>Financial Literacy Training</li>
              <li>Investment Mastery Workshops</li>
              <li>Personal Finance Coaching</li>
              <li>Corporate Financial Wellness Sessions</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="ftco-footer-widget mb-4">
            <div class="section-header">
              <span class="resource-apexcel">Contact Us</span>
            </div>
            <ul class="footer-list">
              <li>
                <i class="fas fa-envelope" style="color: white"></i>
                studyofwealth101@gmail.com
              </li>
              <li>
                <i class="fas fa-phone" style="color: white"></i> +254 706651438
              </li>
              <li class="">
                <i
                  class="fab fa-youtube"
                  style="color: white"
                  href="https://www.youtube.com/@studyofwealth"
                ></i>
                <i
                  class="fab fa-tiktok ms-2"
                  style="color: white"
                  href="https://www.tiktok.com/@studyofwealth"
                ></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <hr style="border-color: white; opacity: 1" class="mx-5" />

    <div class="container-fluid px-0 py-3">
      <div class="row no-gutters">
        <div class="col-md-12">
          <p class="footer-text mb-0 text-center">
            &copy; 2025 THE WEALTH MINDSET VENTURES (WMV). All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  margin-top: auto;
}

.section-header {
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: white;
}

.footer-list {
  list-style-type: none;
  padding: 0;
  font-size: 18px;
}

.footer-list li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.resource-apexcel {
  font-weight: bold;
  font-size: 22px;
}
.footer-text {
  font-size: 16px; /* Adjust the font size as needed */
}
</style>
