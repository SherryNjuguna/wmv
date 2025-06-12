<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";
import { useRoute } from "vue-router";

import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    
    <Navbar />
    <Hero />
    <Footer />

</template>