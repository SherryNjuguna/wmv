<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

/**
 * Computes whether the current route matches the given path
 * @param {string} path - The path to check against current route
 * @returns {boolean} True if current route starts with the given path
 */
const isActive = (path) => computed(() => route.path.startsWith(path));
</script>

<template>
  <footer
    class="ftco-footer"
    style="background-color: rgb(2, 75, 2); color: white; padding: 20px 0"
  >
    <!-- Main footer content -->
    <div class="container-fluid">
      <div class="row justify-content-center text-center mb-5">
        <!-- Quick Links Section -->
        <div class="col-md-6 col-lg-3">
          <div class="ftco-footer-widget mb-4">
            <div class="section-header">
              <span class="resource-apexcel">Quick Links</span>
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

        <!-- Programs Section -->
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
              <li>Student Financial Training</li>
            </ul>
          </div>
        </div>

        <!-- Contact Us Section -->
        <div class="col-md-6 col-lg-3">
          <div class="ftco-footer-widget mb-4">
            <div class="section-header">
              <span class="resource-apexcel">Contact Us</span>
            </div>
            <ul class="footer-list">
              <li>
                <i class="fas fa-envelope"></i>
                studyofwealth101@gmail.com
              </li>
              <li><i class="fas fa-phone"></i> +254 706651438</li>
              <li>
                <a
                  href="https://www.youtube.com/@studyofwealth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@studyofwealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ms-2"
                >
                  <i class="fab fa-tiktok"></i>
                </a>
                <a
                  href="https://www.linkedin.com/newsletters/study-of-wealth-7205257944148488192/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ms-2"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer divider line -->
    <hr style="border-color: white; opacity: 1" class="mx-5" />

    <!-- Copyright section -->
    <div class="container-fluid px-0 py-3">
      <div class="row">
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
/* Base footer styling */
footer {
  margin-top: auto;
}

/* Section header styling */
.section-header {
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: white;
}

/* Footer list styling */
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
  color: white;
}

/* Special text styling */
.resource-apexcel {
  font-weight: bold;
  font-size: 22px;
}

.footer-text {
  font-size: 16px;
}

/* Icon color - applied globally to all icons in footer */
.fas,
.fab {
  color: white;
}
</style>
