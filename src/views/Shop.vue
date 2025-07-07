<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

const book = ref({
  title: "How to Buy Your First Shares in Kenya",
  price: "KES 389.00",
  buyLink: "https://payhip.com/b/49yEH",
  image: "/book.jpeg", // Replace with your actual image path
  description: [
    "This guide is your shortcut to starting — the easy way.",
    "If you've ever opened a CDS account and then got stuck...",
    "Or you've probably tried asking the bank, Googling at 2 a.m., or watching endless Tiktok or YouTube videos that left you with more questions than answers.",
    "And deep down, you're tired of watching your money sit idle while everyone else seems to be building wealth.",
    "But here's the truth:",
    "Investing in shares is not hard. You've just never had someone break it down for you.",
    "This guide was made for you — the everyday Kenyan who wants more out of their money but doesn't know where to start.",
    "This ebook was made for you.",
    "No fluff. No jargon.",
    "Just a clear, step-by-step guide to help you start investing in shares in Kenya — even if you're starting with just KES 1,000."
  ]
});
</script>

<template>
  <Navbar />

  <!-- Hero Section -->
  <section class="position-relative w-100 d-flex align-items-center hero-section">
    <img
      src="/hero2.jpeg"
      alt="Book Shop Background"
      class="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
    />
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
    <div class="position-absolute top-50 start-50 translate-middle text-center text-white px-3 container">
      <h1 class="display-5 fw-semibold">
        <strong class="d-block">Shop</strong>
        Invest in Your Financial Knowledge
      </h1>
    </div>
  </section>

  <!-- Book Section -->
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row g-5">
        <!-- Book Image Column -->
        <div class="col-lg-5 d-flex flex-column">
          <div class="card border-0 shadow-sm rounded-3 p-4 bg-white h-100 d-flex flex-column">
            <div class="flex-grow-1 d-flex align-items-center justify-content-center">
              <img 
                :src="book.image" 
                :alt="book.title" 
                class="img-fluid rounded mb-4"
                style="max-height: 400px; width: auto;"
              >
            </div>
            <div class="text-center mt-auto">
              <h4 class="text-dark-green mb-3">{{ book.price }}</h4>
              <a 
                :href="book.buyLink" 
                target="_blank"
                class="btn btn-success px-4 py-2 fw-bold"
              >
                <i class="bi bi-cart-plus me-2"></i> Add to Cart
              </a>
            </div>
          </div>
        </div>
        
        <!-- Book Description Column -->
        <div class="col-lg-7">
          <div class="card border-0 shadow-sm rounded-3 p-4 p-lg-5 bg-white h-100">
            <h2 class="text-dark-green mb-4">{{ book.title }}</h2>
            <div class="book-description">
              <p v-for="(paragraph, index) in book.description" :key="index" class="mb-3">
                {{ paragraph }}
              </p>
            </div>
            
            <!-- Features List -->
            
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

.title-underline {
  display: block;
  width: 100px;
  height: 4px;
  background: var(--bright-green);
  margin: 15px auto;
  border-radius: 2px;
}

.book-description p:empty {
  display: none;
}

.btn-success {
  background-color: var(--dark-green);
  border-color: var(--dark-green);
}

.btn-success:hover {
  background-color: #0a5c36;
  border-color: #0a5c36;
}

/* Equal height cards */
.card {
  display: flex;
  flex-direction: column;
}
</style>