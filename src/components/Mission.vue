<script setup>
import { ref } from "vue";

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

const toggleCard = (index) => {
  cards.value[index].isActive = !cards.value[index].isActive;
};
</script>

<template>

<section class=" py-5" >
  <div class="container">
    <h2 class="text-center text-dark-green mb-5 position-relative section-title">
        Our Purpose
        <span class="title-underline"></span>
      </h2>
    <div class="row g-4 justify-content-center">  <!-- Added gutter spacing and center alignment -->
      <div class="col-md-6 col-lg-4" v-for="(card, index) in cards" :key="card.id">
        <div class="card h-100 shadow-lg border-0 overflow-hidden">
          <div class="card-body text-center p-4">
            <i :class="`fas ${card.icon} text-success fs-1 mb-3`"></i>
            <h3 class="card-title">{{ card.title }}</h3>
            <p class="card-text">{{ card.summary }}</p>
            <div class="card-hidden" :class="{ 'active': card.isActive }">
              <div v-html="card.details"></div>
            </div>
          </div>
          <button 
            @click="toggleCard(index)"
            class="card-toggle-btn btn w-100 border-top rounded-0 py-3"
          >
            {{ card.isActive ? 'Show Less' : 'Learn More' }}
            <i class="fas" :class="card.isActive ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<style scoped>
/* Card Styles */
:root {
  --dark-green: rgb(2, 75, 2);
  --bright-green: rgb(7, 201, 7);
  --light-green: #979797;
}

.card {
  transition: all 0.3s ease;
}

.card-hidden {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.card-hidden.active {
  max-height: 500px;
}

.card-toggle-btn {
  color: var(--bright-green);
  font-weight: 600;
  background: white;
}

.card-toggle-btn:hover {
  color: var(--dark-green);
}

.card-toggle-btn i {
  transition: transform 0.3s ease;
  margin-left: 5px;
}

.card.active .card-toggle-btn i {
  transform: rotate(180deg);
}
</style>