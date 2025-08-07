<script setup>
import { ref, onMounted, nextTick } from "vue";
import { RouterLink } from "vue-router";
import AOS from "aos";
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import Mission from "../components/Mission.vue";
import blogService from "../services/blogService";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const blogs = ref([]);
const isLoading = ref(true);



onMounted(async () => {
  try {
    AOS.refresh();

    const response = await blogService.getBlogs();
    console.log("Raw API Response:", response);

    blogs.value = Array.isArray(response) ? response : [];
    console.log("Processed blogs:", blogs.value);

    await nextTick();
  } catch (error) {
    console.error("Blog loading error:", error);
  } finally {
    isLoading.value = false;
  }
});

const getImageUrl = (blog) => {
  try {
    // Check for the exact structure from your API response
    const imageAttributes =
      blog?.attributes?.featured_image?.data?.[0]?.attributes;

    if (!imageAttributes?.url) {
     
      return null; // Return null instead of fallback path
    }

    // Construct the URL
    let imageUrl = imageAttributes.url;

    // If URL is already absolute (starts with http)
    if (imageUrl.startsWith("http")) return imageUrl;

    // Handle Strapi local URLs
    if (imageUrl.startsWith("/uploads")) {
      return `${import.meta.env.VITE_STRAPI_URL || ""}${imageUrl}`;
    }

    // For other relative paths
    return `${import.meta.env.VITE_STRAPI_URL || ""}/uploads${
      imageUrl.startsWith("/") ? "" : "/"
    }${imageUrl}`;
  } catch (error) {
    console.error("Error processing image URL:", error);
    return null;
  }
};
</script>

<template>
  <Navbar />
  <Hero />

  <!-- Who We Are Section -->
  <section class="bg-light-green py-5" data-aos="fade-up">
    <div class="container d-flex flex-wrap align-items-center">
      <div class="col-lg-6 pe-lg-4">
        <h2
          class="text-dark-green mb-5 text-center position-relative section-title"
        >
          Who we Are
          <span class="title-underline"></span>
        </h2>
        <p class="mb-4">
          At The Wealth Mindset Ventures, we believe that financial literacy is
          the cornerstone of building lasting wealth and achieving financial
          independence. <br />Our mission is to empower individuals across all
          stages of life—students, employees, and social groups—with the skills,
          knowledge, and confidence to make informed financial decisions.
        </p>
        <router-link to="/about" class="text-decoration-none">
          <button class="btn-one">Learn More</button>
        </router-link>
      </div>

      <!-- Image Column -->
      <div class="col-lg-6 text-center mt-4 mt-lg-0" data-aos="fade-up">
        <img
          src="/bulb.png"
          alt="about bulb"
          class="img-fluid"
          style="max-height: 400px"
        />
      </div>
    </div>
  </section>

  <!-- Mission Section -->
  <section data-aos="fade-up">
    <Mission />
  </section>

  <!-- Blog Section -->
<section class="py-5 bg-light-green" data-aos="fade-up">
  <div class="container">
    <h2
      class="text-center text-dark-green mb-5 position-relative section-title"
    >
      Latest blogs
      <span class="title-underline"></span>
    </h2>

    <!-- Loading State -->
    <div v-if="isLoading" class="text-center py-5">
      <p>Loading blogs...</p>
    </div>

    <!-- Data States -->
    <div v-else>
      <!-- Empty State -->
      <div v-if="blogs.length === 0" class="text-center py-5">
        <p>No blogs found</p>
      </div>

      <!-- Data Loaded State -->
      <div v-else>
        <Swiper
          class="blog-swiper"
          :modules="[Navigation, Pagination, Autoplay]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
          :navigation="true"
          :pagination="{ clickable: true }"
          :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }"
        >
          <SwiperSlide v-for="blog in blogs" :key="blog.id">
            <router-link
              :to="`/blog/${blog.attributes.slug}`"
              class="blog-link d-block h-100"
            >
              <div
                class="blog-card h-100"
                :style="{
                  'background-image': getImageUrl(blog)
                    ? `url('${getImageUrl(blog)}')`
                    : 'none',
                  'background-color': !getImageUrl(blog)
                    ? 'var(--light-green)'
                    : '',
                }"
              >
                <div
                  v-if="!getImageUrl(blog)"
                  class="blog-image-placeholder"
                ></div>
                <div class="blog-content">
                  <h3>{{ blog.attributes.title }}</h3>
                </div>
              </div>
            </router-link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</section>


  <Footer />
</template>

<style>
/* ===== Root Variables for Color Scheme ===== */
:root {
  --dark-green: rgb(2, 75, 2);
  --bright-green: rgb(7, 201, 7);
  --light-green: #f3fcf3;
}

.btn-one {
  background-color: rgb(7, 201, 7);
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 1rem;
  border: none;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s ease;
  margin-top: 0.8rem;
}

.btn-one:hover {
  background-color: rgb(44, 243, 44);
  transform: translateY(-2px);
}

/* ===== Custom Classes ===== */
.bg-dark-gradient {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
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

/* ===== Section Titles ===== */
.section-title {
  font-size: 2.5rem;
  font-weight: 600;
}

.title-underline {
  display: block;
  width: 60px;
  height: 4px;
  background: var(--bright-green);
  margin: 15px auto 0;
  border-radius: 2px;
}

/* Swiper container */
.blog-swiper {
  width: 100%;
  padding: 20px 0 50px;
  overflow: hidden;
}

/* Swiper wrapper */
.swiper-wrapper {
  display: flex;
  align-items: stretch;
}

/* Individual slides */
.swiper-slide {
  width: 100%;
  height: auto;
  flex-shrink: 0;
}

/* Adjust slide width for different screens */
@media (min-width: 768px) {
  .swiper-slide {
    width: calc(50% - 12.5px) !important;
    margin-right: 25px !important;
  }
}

@media (min-width: 1024px) {
  .swiper-slide {
    width: calc(33.333% - 20px) !important;
    margin-right: 30px !important;
  }
}

/* Blog cards */
.blog-card {
  width: 100%;
  height: 300px; /* Increased height */
  min-height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  background-color: var(--light-green);
}

.blog-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bright-green);
  opacity: 0.2;
  z-index: 1;
}

.blog-card:hover {
  transform: scale(1.02);
}

.blog-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  z-index: 2;
}

.blog-content h3 {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
  margin-bottom: 0;
}

/* Navigation buttons */
.swiper-button-prev,
.swiper-button-next {
  color: white;
  background: rgba(0, 0, 0, 0.6);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .blog-card {
    height: 350px;
    min-height: 350px;
  }
}

@media (max-width: 767px) {
  .blog-card {
    height: 300px;
    min-height: 300px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
</style>
