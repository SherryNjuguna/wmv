import axios from 'axios';

const API_URL = import.meta.env.VITE_STRAPI_URL + '/api';

export default {
  async getBlogs() {
    try {
      const { data } = await axios.get(`${API_URL}/blogs?populate=featured_image`);
      return data.data || []; // Handle direct data array
    } catch (error) {
      console.error("API Error:", error);
      return [];
    }
  },

  async getBlogBySlug(slug) {
    try {
      const { data } = await axios.get(
        `${API_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`
      );
      return data.data[0] || null;
    } catch (error) {
      console.error("Error fetching blog:", error);
      return null;
    }
  }
};