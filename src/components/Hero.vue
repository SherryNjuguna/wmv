<script setup></script>

<template>
  <section class="hero-section">
    <img src="/hero2.jpeg" alt="wmv Background" class="hero-image" />
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <div class="text-white hero-text">
        <h1 class="hero-title">Turning <br><strong>FINANCIAL KNOWLEDGE</strong> <br>into <strong>WEALTH</strong></h1>
        <p class="hero-description">
          We believe that financial literacy is the cornerstone of building
          lasting wealth and achieving financial independence.
        </p>
        <router-link to="/about" class="text-white text-decoration-none">
          <button class="btn btn-primary">
            Learn More
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Base styles for the hero section */
.hero-section {
  position: relative;
  width: 100%;
  height: 70vh; 
  max-height: 800px;
  overflow: hidden;
  display: flex;
}

/* Hero Image */
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Overlay */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

/* Hero Content */
.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 1rem;
  text-align: center;
  z-index: 2;
}

.hero-text {
  max-width: 90%;
  margin: 0 auto;
}

.hero-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  line-height: 1.3;
}

.hero-title strong {
  font-size: 1.8rem;
  display: inline-block;
  margin: 0.3rem 0;
}

.hero-description {
  font-size: 1rem;
  margin: 1rem auto; 
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  max-width: 90%;
}

.btn-primary {
  background-color: rgb(7, 201, 7);
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 1rem;
  border: none;
  padding: 0.6rem 1.2rem; /* Slightly reduced padding */
  transition: all 0.3s ease;
  margin-top: 0.8rem; /* Reduced margin */
}

.btn-primary:hover {
  background-color: rgb(44, 243, 44);
  transform: translateY(-2px);
}

/* Tablet and larger */
@media (min-width: 640px) {
  .hero-section {
    height: 80vh;
    }
  
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-title strong {
    font-size: 2.5rem;
  }
  
  .hero-description {
    font-size: 1.25rem;
    max-width: 80%;
  }
  
  .btn-primary {
    font-size: 1.1rem;
   
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero-section {
    height: 90vh; 
  }
  
  .hero-title {
    font-size: 2.5rem;
   
  }
  
  .hero-title strong {
    font-size: 3rem;
  }
  
  .hero-description {
    font-size: 1.5rem;
    max-width: 70%;
  
  }
  
  .hero-text {
    max-width: 800px;
  }
}
</style>