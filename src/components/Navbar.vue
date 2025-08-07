<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// Navigation links for the navbar
const navLinks = [
  { label: "HOME", to: "/", icon: "fas fa-home" },
  { label: "ABOUT US", to: "/about", icon: "fas fa-info-circle" },
  { label: "SERVICES", to: "/services", icon: "fas fa-graduation-cap" },
  { label: "RESOURCES", to: "/resources", icon: "fas fa-store" },
  { label: "SHOP", to: "/shop", icon: "fas fa-shop" },
  { label: "CONTACT US", to: "/contact", icon: "fas fa-envelope" }
]
</script>

<template>
  <nav class="navbar navbar-expand-lg sticky-top" style="background-color: white;">
    <!-- Logo -->
    <a class="navbar-brand ms-5" href="#">
      <img src="/wmvlogo3.png" alt="Logo" class="logo-image" style="width: 80px; height: 60px;">
    </a>

    <!-- Mobile toggler button -->
    <button class="navbar-toggler px-4 ms-5 border-0 custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navigation links -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav px-5 text-center text-lg-end w-100 justify-content-end">
        <li class="nav-item mx-lg-3 my-lg-0" v-for="(link, i) in navLinks" :key="i">
          <router-link
            :to="link.to"
            class="nav-link custom-link gap-2"
            active-class="active-link"
            exact>
            <i :class="link.icon"></i>
            {{ link.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* Highlight the active nav link */
.active-link {
  color: green;
}

.active-link::after {
  transform: scaleX(1);
}

/* Custom hamburger icon (green lines) */
.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='green' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Style for all nav links */
.custom-link {
  color: black;
  font-weight: bold;
  position: relative;
  transition: color 0.3s;
}

.custom-link:hover {
  color: rgb(7, 187, 7);
}

/* Underline animation on hover */
.custom-link::after {
  content: '';
  display: block;
  height: 2px;
  background-color: rgb(2, 75, 2);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  margin-top: 5px;
}

.custom-link:hover::after {
  transform: scaleX(1);
}

/* Margin between nav items */
.nav-item {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

/* Extra spacing on smaller screens */
@media (max-width: 991.98px) {
  .navbar-nav {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
</style>
