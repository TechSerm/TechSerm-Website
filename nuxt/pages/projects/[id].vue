<template>
    <div v-if="projectData">
      <HeroSection :projectData="projectData.basic" />
      <FeaturesSection :features="projectData.features" />
      <Technology :technologies="projectData.technology" />
      <ContactUsSection />
    </div>
    <div v-else>
      <!-- <NotFound /> -->
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  
  import HeroSection from "../../components/project/HeroSection.vue";
  import FeaturesSection from "../../components/project/FeaturesSection.vue";
  import Technology from "../../components/project/Technology.vue";
  import ContactUsSection from "../../components/project/ContactUsSection.vue";
//   import NotFound from "../../components/NotFound.vue";
  
  const props = defineProps({
    data: Object
  });
  
  const route = useRoute();
  
  const projectData = computed(() => {
    return props.data.projects.project_list.find(
      (project) => project.basic.slug === route.params.id
    );
  });
  
  </script>
  