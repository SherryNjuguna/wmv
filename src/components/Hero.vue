<script setup></script>

<template>
  <section class="hero-section">
    <img src="/hero2.jpeg" alt="wmv Background" class="hero-image" />
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <div class="text-white hero-text">
        <h1 class="hero-title">You have to study to become</h1>
        <p class="hero-description">
          We believe that financial literacy is the cornerstone of building
          lasting wealth and achieving financial independence.
        </p>
      </div>
    </div>
  </section>

 
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Hero Image */
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (min-width: 640px) {
  .hero-image {
    height: 80vh;
  }
}

/* Overlay with solid transparency */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Adjust opacity as needed */
}

/* Hero Content - now properly centered */
.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  text-align: center;
  z-index: 2;
}

.hero-text {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.btn-primary {
  background-color: rgb(20, 101, 167);
  color: white;
  border-radius: 1.5rem;
  border: none;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex: 1 1 auto;
  max-width: 200px;
}

.btn-primary:hover {
  background-color: rgb(23, 150, 247);
  transform: translateY(-2px);
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }
}
</style>