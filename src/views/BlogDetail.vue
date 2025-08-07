<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const blog = ref(null);
const isLoading = ref(true);
const relatedBlogs = ref([]);
const API_URL = import.meta.env.VITE_STRAPI_URL + "/api";

// Function to fetch blog and related blogs
const fetchBlogData = async () => {
  isLoading.value = true;
  try {
    // Fetch current blog
    const { data: blogData } = await axios.get(
      `${API_URL}/blogs?filters[slug][$eq]=${route.params.slug}&populate=*`
    );
    blog.value = blogData.data[0] || null;

    // Fetch related blogs (excluding current)
    const { data: relatedData } = await axios.get(
      `${API_URL}/blogs?filters[slug][$ne]=${route.params.slug}&populate=featured_image&pagination[limit]=5`
    );
    relatedBlogs.value = relatedData.data || [];
  } catch (error) {
    console.error("Error loading blog:", error);
  } finally {
    isLoading.value = false;
  }
};

// Fetch data on initial load
onMounted(fetchBlogData);

// Watch for changes to slug and re-fetch blog
watch(
  () => route.params.slug,
  () => {
    fetchBlogData();
  }
);

// Get image URL with proper Strapi formatting
const getImageUrl = (item) => {
  try {
    const imageAttributes =
      item?.attributes?.featured_image?.data?.[0]?.attributes ||
      item?.[0]?.attributes ||
      item?.attributes;

    if (!imageAttributes?.url) return "/wvm1.png";

    const imageUrl = imageAttributes.url;
    if (imageUrl.startsWith("http")) return imageUrl;

    const basePath = imageUrl.startsWith("/uploads") ? "" : "/uploads";
    return `${import.meta.env.VITE_STRAPI_URL || ""}${basePath}${imageUrl}`;
  } catch (error) {
    console.error("Error processing image URL:", error);
    return "/wvm1.png";
  }
};

// Render rich text content
const renderContent = (content) => {
  if (!content) return "";
  return content
    .map((item) => {
      if (item.type === "paragraph") {
        const text = item.children
          .map((child) => {
            let html = child.text;
            if (child.bold) html = `<strong>${html}</strong>`;
            if (child.italic) html = `<em>${html}</em>`;
            return html;
          })
          .join("");
        return `<p>${text}</p>`;
      }
      return "";
    })
    .join("");
};
</script>



<template>
  <div class="container-fluid py-4 blog-detail">
    <!-- Back Button (sticky top) -->
    <div class="sticky-top bg-white py-3 shadow-sm">
      <div class="container">
        <RouterLink to="/" class="btn"> ← Back to Blogs </RouterLink>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="container py-5 text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3">Loading blog post...</p>
    </div>

    <!-- Blog Content -->
    <div v-else-if="blog" class="container py-4">
      <div class="row g-4">
        <!-- Main Content (3/4 width) -->
        <div class="col-lg-9">
          <!-- Blog Title -->
          <h1 class="mb-4">{{ blog.attributes.title }}</h1>

          <!-- Published Date -->
          <p class="text-muted mb-4">
            Published on
            {{ new Date(blog.attributes.publishedAt).toLocaleDateString() }}
          </p>

          <!-- Featured Image -->
          <img
            :src="getImageUrl(blog.attributes.featured_image?.data)"
            :alt="blog.attributes.title"
            class="img-fluid rounded mb-4"
            style="max-height: 500px; width: 100%; object-fit: cover"
          />

          <!-- Blog Content -->
          <div
            class="content"
            v-html="renderContent(blog.attributes.content)"
          ></div>
        </div>

        <!-- Sidebar (1/4 width) -->
        <div class="col-lg-3">
          <div class="card shadow-sm sticky-top" style="top: 80px">
            <div class="card-header text-white">
              <h5 class="mb-0">Related Articles</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li
                  v-for="related in relatedBlogs"
                  :key="related.id"
                  class="list-group-item"
                >
                  <router-link
                    :to="`/blog/${related.attributes.slug}`"
                    class="blog-link d-block h-100"
                  >
                    <div class="d-flex">
                      <span>{{ related.attributes.title }}</span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Not Found State -->
    <div v-else class="container py-5 text-center">
      <div class="alert alert-warning">
        <h4>Blog post not found</h4>
        <RouterLink to="/" class="btn btn-primary mt-3">
          Back to Home
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-detail {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.btn {
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

.btn:hover {
  background-color: rgb(44, 243, 44);
  transform: translateY(-2px);
}

.content :deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.content :deep(strong) {
  font-weight: bold;
}

.content :deep(em) {
  font-style: italic;
}

.sticky-top {
  z-index: 1020; /* Above Bootstrap's fixed navbar */
}

.card {
  border: none;
}

.card-header {
  background-color: rgb(7, 201, 7);
  color: white;
}

.list-group-item {
  padding: 1rem;
  border-left: none;
  border-right: none;
}

.list-group-item:first-child {
  border-top: none;
}

.list-group-item:last-child {
  border-bottom: none;
}
</style>
