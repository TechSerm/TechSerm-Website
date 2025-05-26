<template>
    <div class="mb-16 bg-gray-100 text-black font-extrabold text-6xl"  style="background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;background: url('https://www.enosisbd.com/wp-content/uploads/2020/06/services-banner.png')">
  <div class="container h-[300px] flex items-center justify-center text-white">
    Projects
  </div>
</div>
    <section id="projects" class="container pt-10 md:pt-0 flex items-center">
        <ProjectsSection :projects="data.projects.project_list" />
    </section>
</template>

<script setup>
import ProjectsSection from '../components/ProjectSection.vue'
defineProps({
  data: Object
})
</script>