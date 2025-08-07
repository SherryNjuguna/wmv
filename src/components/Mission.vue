<script setup>
import { ref, onMounted } from "vue";

// Card data with toggle functionality
const cards = ref([
  { 
    id: 1, 
    isActive: false,
    icon: "fa-plane-departure",
    title: "Our Mission",
    summary: "We are dedicated to empowering individuals with essential financial knowledge, fostering a strong wealth mindset.",
    details: "We achieve this through comprehensive workshops, one-on-one coaching, and accessible digital resources."
  },
  { 
    id: 2, 
    isActive: false,
    icon: "fa-eye",
    title: "Our Vision",
    summary: "To create a financially literate society where individuals master financial principles early.",
    details: "We envision communities where financial education begins in childhood and continues through adulthood."
  },
  { 
    id: 3, 
    isActive: false,
    icon: "fa-star",
    title: "Core Values",
    summary: "Innovation, Excellence, Integrity",
    details: `
      <ul class="ps-3 text-start">
        <li class="mb-2"><strong>Innovation:</strong> New approaches to financial education</li>
        <li class="mb-2"><strong>Excellence:</strong> Highest quality programs</li>
        <li><strong>Integrity:</strong> Transparency in all we do</li>
      </ul>
    `
  }
]);

// Toggle card expand/collapse
const toggleCard = (index) => {
  cards.value[index].isActive = !cards.value[index].isActive;
};

// Animation on scroll initialization
onMounted(() => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.classList.add('fade-up');
      }
    });
  };

  // Initial check and event listener
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});
</script>

<template>
  <!-- Purpose Section with animated cards -->
  <section class="py-5 purpose-section">
    <div class="container">
      <!-- Section Title with decorative underline -->
      <h2 class="text-center text-dark-green mb-5 position-relative section-title">
        Our Purpose
        <span class="title-underline"></span>
      </h2>
      
      <!-- Card Grid -->
      <div class="row g-4 justify-content-center">
        <!-- Each card with hover and animation effects -->
        <div 
          class="col-md-6 col-lg-4" 
          v-for="(card, index) in cards" 
          :key="card.id"
        >
          <div class="card h-100 shadow-lg border-0 overflow-hidden">
            <div class="card-body text-center p-4">
              <!-- Card Icon -->
              <i :class="`fas ${card.icon} text-success fs-1 mb-3`"></i>
              
              <!-- Card Title -->
              <h3 class="card-title">{{ card.title }}</h3>
              
              <!-- Card Summary (always visible) -->
              <p class="card-text">{{ card.summary }}</p>
              
              <!-- Card Details (expandable content) -->
              <div 
                class="card-hidden" 
                :class="{ 'active': card.isActive }"
              >
                <div v-html="card.details"></div>
              </div>
            </div>
            
            <!-- Toggle Button -->
            <button 
              @click="toggleCard(index)"
              class="card-toggle-btn btn w-100 border-top rounded-0 py-3"
              :aria-expanded="card.isActive"
              :aria-controls="`card-${card.id}`"
            >
              {{ card.isActive ? 'Show Less' : 'Learn More' }}
              <i 
                class="fas ms-2" 
                :class="card.isActive ? 'fa-chevron-up' : 'fa-chevron-down'"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Color Variables */
:root {
  --dark-green: rgb(2, 75, 2);
  --bright-green: rgb(7, 201, 7);
  --light-green: #979797;
}

/* Section Styles */
.purpose-section {
  background-color: #f8f9fa;
}

/* Section Title with Underline */
.section-title {
  font-weight: 600;
}

.title-underline {
  display: block;
  width: 80px;
  height: 3px;
  background: var(--bright-green);
  margin: 0.5rem auto 0;
}

/* Card Styles with Animation */
.card {
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  border-radius: 10px !important;
}

.card.fade-up {
  opacity: 1;
  transform: translateY(0);
}

/* Card Hover Effect */
.card:hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
  transform: translateY(-5px);
}

/* Expandable Content Animation */
.card-hidden {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.3s ease;
  opacity: 0;
}

.card-hidden.active {
  max-height: 500px;
  opacity: 1;
  transition: max-height 0.5s ease, opacity 0.5s ease 0.2s;
}

/* Toggle Button Styles */
.card-toggle-btn {
  color: var(--bright-green);
  font-weight: 600;
  background: white;
  transition: all 0.3s ease;
}

.card-toggle-btn:hover {
  color: var(--dark-green);
  background-color: #f1f1f1;
}

/* Chevron Icon Animation */
.card-toggle-btn i {
  transition: transform 0.3s ease;
}

.card.active .card-toggle-btn i {
  transform: rotate(180deg);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .card {
    margin-bottom: 1.5rem;
  }
  
  .card:last-child {
    margin-bottom: 0;
  }
}
</style>